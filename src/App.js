import "./App.css";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blogs from "./pages/Blogs";
import Courses from "./pages/Courses";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abouts" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blogs />} />
        {/* <Route path="/rooms/:slug" element={<SingleRoom slug={slug} />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
