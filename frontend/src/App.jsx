import { Routes, Route } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import AuthenticatedRoute from "./utils/AuthenticatedRoute";
import ProductUpload from "./pages/ProductUpload";
import Products from "./pages/Products";



const App = () => {
  return (
    <>
      <ToastContainer limit={3} />
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products-upload" element={<ProductUpload />} />
        <Route path="/products" element={<Products />} />
        <Route element={<AuthenticatedRoute />}></Route>
        {/* 
        <Route path="/products/:id" element={<BlogDetails />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App