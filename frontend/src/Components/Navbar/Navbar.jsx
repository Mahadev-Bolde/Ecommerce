import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/shopping-logo.jpg";
import cart_image from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" className="logo-img" />
      </div>
      <div className="nav-menu">
        <ul>
          <li onClick={() => setMenu("shop")}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              {" "}
              Shop {menu === "shop" && <hr />}
            </Link>
          </li>
          <li onClick={() => setMenu("mens")}>
            <Link to={"/mens"} style={{ textDecoration: "none" }}>
              {" "}
              Mens {menu === "mens" && <hr />}{" "}
            </Link>
          </li>
          <li onClick={() => setMenu("womens")}>
            <Link to={"/womens"} style={{ textDecoration: "none" }}>
              Womens {menu === "womens" && <hr />}
            </Link>
          </li>
          <li onClick={() => setMenu("kids")}>
            <Link to={"/kids"} style={{ textDecoration: "none" }}>
              {" "}
              Kids {menu === "kids" && <hr />}
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-login-cart">
        {/* login Button     */}
        <Link to="/login">
          <button>Login</button>
        </Link>
        {/* cart Icon */}
        <Link to="/cart">
          <img src={cart_image} alt="" />
        </Link>
        {/* auto increment top badge */}
        <div className="nav-cart-count">19</div>
      </div>
    </div>
  );
};

export default Navbar;
