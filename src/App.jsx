import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./pages/Footer";

import Home from "./pages/Home";
import CourseList from "./pages/CourseList";
import About from "./pages/about";
import Contact from "./pages/contact";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
