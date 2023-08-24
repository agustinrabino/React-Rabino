import { NavBar } from "./components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home.jsx";
import { Categories } from "./views/Categories.jsx";
import { NewArrivals } from "./views/NewArrivals.jsx";
import { Products } from "./views/Products.jsx";
import { ItemDetails } from "./views/ItemDetails.jsx";
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
          <Route path="/products/:ID" element={<ItemDetails/>} />
          <Route path="*" element={404} />
        </Routes>
    </>
  );
}

export default App;
