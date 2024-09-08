import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DetailsList from "./DetailsList";
import ProductCard from "./ProductCard";
import BackButton from "./BackButton";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

function ProductPage() {
  const { id } = useParams();
  const { data: products, isLoading, isError, error } = useProducts();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage message={error.message} />;

  if (!products[id]) return <ErrorPage message={"Product not found"} />;

  return (
    <>
      <Header />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="flex gap-4 items-center">
            <Link to="/shop" className="text-nakamaRed">
              <BackButton />
            </Link>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Details
            </h2>
          </header>
          <div className="mt-8 flex gap-36 h-[42rem]">
            <ul className="w-[48rem]">
              <ProductCard product={products[id]} />
            </ul>
            <DetailsList product={products[id]} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductPage;
