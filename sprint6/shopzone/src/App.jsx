import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";


function App() {
  return (
   <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;