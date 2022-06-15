import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import News from "./pages/News";
import Categories from "./pages/Categories";
import InfoSellers from "./pages/InfoSellers";
import DetailProduct from "./pages/DetailProduct";
import ProductReview from "./pages/ProductReview";
import DetailNews from "./pages/DetailNews";
import LoginPage from "./pages/LoginPage";
import ResetPassword from "./pages/ResetPassword";
import VerificationPage from "./pages/VerificationPage";
import RegisterAccount from "./pages/RegisterAccount";
import ProfileAndPassword from "./pages/ProfileAndPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/news" element={<News />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/sellers" element={<InfoSellers />} />
      <Route path="/product" element={<DetailProduct />} />
      <Route path="/product/review" element={<ProductReview />} />
      <Route path="/news/:id" element={<DetailNews />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/verification" element={<VerificationPage />} />
      <Route path="/register" element={<RegisterAccount />} />
      <Route
        path="/register/profile-password"
        element={<ProfileAndPassword />}
      />
    </Routes>
  );
}

export default App;
