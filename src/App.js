import { BrowserRouter, Route , Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import AboutUS from "./pages/about";
import Footer from "./components/footer";
import Blogs from "./pages/blogs";
import Home from "./pages/home";
import Feature from "./pages/features";
import { FullBlog } from "./components/FullBlog";
import Product from "./pages/product";
import ProductEach from "./components/productDetails";
import FromsAll from "./components/forms/forms";
import { ContactUs, LoginFrom, RegisterNew } from "./components/forms/formComponents/loginForm";




function App() {
  return (
    <>
      <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="about" element={<AboutUS />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="*" element={<Home />} />
                    <Route path="/features" element={<Feature />} />
                    <Route path="/blogs/:meta" element={<FullBlog />} />
                    <Route path="/products" element={<Product />}/>
                    <Route path="/products/:id" element={<ProductEach />}/>
                    <Route path="/forms" element={<FromsAll/>} />
                   <Route path="/forms" element={<FromsAll />}>
                        <Route path="login" element={<LoginFrom />} />
                        <Route path="register" element={<RegisterNew />} />
                        <Route path="contact" element={<ContactUs />} />
                    </Route>
                </Routes>
            <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
