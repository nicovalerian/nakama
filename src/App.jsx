import { useState } from "react";
import { useProducts } from "./hooks/useProducts";
import HomePage from "./components/HomePage";

function App() {
  const [cart, setCart] = useState([]);

  const { data: products, isLoading, isError, error } = useProducts();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <HomePage products={products}/>
    </>
  );
}

export default App;
