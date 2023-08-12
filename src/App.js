import { NavBar } from "./components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Categories } from "./pages/Categories.jsx";
import { NewArrivals } from "./pages/NewArrivals.jsx";
import { Sales } from "./pages/Sales.jsx";
import { Featured } from "./pages/Featured.jsx";
import "./App.css";

function App() {
  return (
    <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/newarrivals" element={<NewArrivals/>} />
          <Route path="/featured" element={<Featured/>} />
          <Route path="/sales" element={<Sales/>} />
        </Routes>
    </>
  );
}

export default App;
