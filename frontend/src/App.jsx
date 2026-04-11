import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import menCategoryImage from "./assets/banner_mens.png";
import womenCatergoryImage from "./assets/banner_women.png";
import kidsCategoryImage from "./assets/banner_kids.png";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={
            <ShopCategory category="mens" categoryImage={menCategoryImage} />
          }
        />
        <Route
          path="/womens"
          element={
            <ShopCategory
              category="womens"
              categoryImage={womenCatergoryImage}
            />
          }
        />
        <Route
          path="/kids"
          element={
            <ShopCategory category="kids" categoryImage={kidsCategoryImage} />
          }
        />
        <Route path="/product" element={<Product />} />
        <Route path="/:productId" />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </div>
  );
};

export default App;
