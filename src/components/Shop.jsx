import { useProducts } from "../hooks/useProducts";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ShopPagination from "./ShopPagination";
import ProductCard from "./ProductCard";
import LoadingPage from "./LoadingPage";

function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: products, isLoading, isError, error } = useProducts();

  if (isLoading) return <LoadingPage />;
  if (isError) return <div>Error: {error.message}</div>;

  const itemPerPage = 4;
  const numberOfPages = Math.ceil(products.length / itemPerPage);

  return (
    <>
      <Header />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>

            <p className="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <div className="mt-8">
            <p className="text-sm text-gray-500">
              Showing {itemPerPage} of 20
            </p>
          </div>

          <ul className="mt-8 mb-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {
                products.slice(currentPage * itemPerPage - 4, currentPage * itemPerPage).map((product, index) => {
                    return <ProductCard key={index} product={product} />;
                })
            }
          </ul>

          <ShopPagination numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Shop;
