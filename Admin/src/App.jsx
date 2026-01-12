import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar1 from "./pages/Navbar1";
import ProductForm from "./pages/ProductForm";
import AdminProducts from './AdminProducts';
const App = () => {
  return (
    <Router>
      <Navbar1 />

      <Routes>
        <Route path="/" element={<ProductForm />} />
        <Route path="/view" element={<AdminProducts />} />
      </Routes>
    </Router>
  );
};

export default App;
