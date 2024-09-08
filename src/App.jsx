import { useState } from "react";
import { useProducts } from "./hooks/useProducts";
import HomePage from "./components/HomePage";
import LoadingPage from "./components/LoadingPage";
import ErrorPage from "./components/ErrorPage";

function App() {

  const { data: products, isLoading, isError, error } = useProducts();
  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage message={error.message} />;

  return (
    <>
      <HomePage products={products}/>
    </>
  );
}

export default App;
