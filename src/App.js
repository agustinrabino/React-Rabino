import { NavBar } from "./components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home.jsx";
import { Categories } from "./views/Categories.jsx";
import { AboutUs } from "./views/AboutUs.jsx";
import { ShoppingCartCheckout } from "./views/ShoppingCartCheckout.jsx";
import { Products } from "./views/Products.jsx";
import { ItemDetailsContainer } from "./views/ItemDetailsContainer.jsx";
import "./App.css";

function App() {
  return (
    <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/checkout" element={<ShoppingCartCheckout/>} />
          <Route path="/products/:ID" element={<ItemDetailsContainer/>} />
          <Route path="*" element={404} />
        </Routes>
    </>
  );
}

export default App;
