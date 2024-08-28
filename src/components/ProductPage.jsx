import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DetailsList from "./DetailsList";
import ProductCard from "./ProductCard";
import BackButton from "./BackButton";

function ProductPage() {
  const { id } = useParams();
  const { data: products, isLoading, isError, error } = useProducts();
  

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  if (!products[id]) return <div>Product not found</div>;

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
