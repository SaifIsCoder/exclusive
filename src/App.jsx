import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import About from "./pages/about/About";
import Wishlist from "./pages/wishlist/Wishlist";
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
