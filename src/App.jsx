import { useState, useEffect } from "react";
// import axios from "axios";
import Navbar from "./components/Navbar";
import Authentication from "./pages/auth/Authentication";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Logout from "./components/Logout";
import Gallery from "./pages/Gallery";
import SinglePost from "./pages/Singlepost";
import Write from "./pages/Write";
import { useUser } from "./Context";
import "@fortawesome/fontawesome-free/css/all.css";
import Update from "./pages/Update";
import ScrollToAnchor from "./components/ScrollToAnchor"; // Adjust the import path accordingly
import About from "./components/About";
import Contact from "./pages/Contact";
import Delete from "./pages/Delete";
import Message from "./pages/Message";
import Messagedetail from "./pages/Messagedetail";
import Notfound from "./pages/Notfound";

function App() {
  const data = useUser();

  return (
    <>
      <Router>
        <ScrollToAnchor />{" "}
        {/* This ensures navigation to section on the same page */}
        <Navbar />
        <Routes>
          \
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Authentication />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/singlepost/:id" element={<SinglePost />} />
          <Route path="/write" element={data.user ? <Write /> : <Notfound />} />
          <Route
            path="/update/:id"
            element={data.user ? <Update /> : <Home />}
          />
          <Route
            path="/delete/:id"
            element={data.user ? <Delete /> : <Home />}
          />
          <Route path="/message" element={data.user ? <Message /> : <Home />} />
          <Route
            path="/message/:id"
            element={data.user ? <Messagedetail /> : <Home />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </Router>

      {/* review */}

      {/* footer */}
    </>
  );
}
export default App;
