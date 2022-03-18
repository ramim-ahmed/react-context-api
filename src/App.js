import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Nav from "./components/Nav/Nav";
import Products from "./components/Products/Products";
import { CartContextProvider } from "./Context/CartContext";

function App() {
  const [products, setProducts] = useState([]);

  const getAllProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    setProducts(data);
  }

  useEffect( () => {
    getAllProduct();
  }, [])

  return (
    <div>
     <CartContextProvider>
     <Nav />
     <Routes>
        <Route path="/" element={<Products products={products} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
     </CartContextProvider>
    </div>
  );
}

export default App;
