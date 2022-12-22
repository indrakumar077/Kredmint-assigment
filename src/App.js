import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage/CartPage";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

function App() {
  const [data, setData] = useState();
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home data={data} setData={setData} cart={cart} setCart={setCart} />
          }
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
         <Route
          path="/details"
          element={<ProductDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;
