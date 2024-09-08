import { useState } from "react";
import { useProducts } from "./hooks/useProducts";
import HomePage from "./components/HomePage";
import LoadingPage from "./components/LoadingPage";

function App() {

  const { data: products, isLoading, isError, error } = useProducts();
  if (isLoading) return <LoadingPage />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <HomePage products={products}/>
    </>
  );
}

export default App;
