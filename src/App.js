import { BrowserRouter, Route , Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import AboutUS from "./pages/about";
import Footer from "./components/footer";
import Blogs from "./pages/blogs";
import Home from "./pages/home";
import Feature from "./pages/features";
import { FullBlog } from "./components/FullBlog";


function App() {
  return (
    <>
      <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<AboutUS />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="*" element={<Home />} />
                    <Route path="/features" element={<Feature />} />
                    <Route path="/blogs/:id" element={<FullBlog />} />
                </Routes>
            <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
