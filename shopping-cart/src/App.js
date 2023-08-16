import "./App.css";
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
import Products from "./components/Products";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Products products={products} />
      </div>
    </div>
  );
}

export default App;
