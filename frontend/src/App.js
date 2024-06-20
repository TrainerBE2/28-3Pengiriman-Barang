import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./components/Features";
import Contact from "./pages/Contact";
import Services from "./components/Services";
import AdminPage from "./components/adminPage";
import Loginpage from './pages/LoginRegister';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </Router>
  );
};

export default App;
