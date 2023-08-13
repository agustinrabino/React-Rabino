import { NavBar } from "./components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Categories } from "./pages/Categories.jsx";
import { NewArrivals } from "./pages/NewArrivals.jsx";
import { Products } from "./pages/Products.jsx";
import { ItemRender } from "./pages/ItemRender.jsx";

import "./App.css";

function App() {
  return (
    <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/newarrivals" element={<NewArrivals/>} />
          <Route path="/products/:ID" element={<ItemRender/>} />
        </Routes>
    </>
  );
}

export default App;
