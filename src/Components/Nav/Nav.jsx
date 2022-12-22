import React from "react";
import "./Nav.css";
import { GrCart } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Nav = ({ cart }) => {
  const nav = useNavigate();
  function gotoCart() {
    nav("/cart");
  }
  return (
    <div className="nav">
      <div className="navlinks">
        <div>Home</div>
        <div>About</div>
        <div>Products</div>
        <div>Contact us</div>
      </div>
      <div className="Ecom">E-com</div>
      <div className="cart" style={{ display: "flex" }} onClick={gotoCart}>
        <h4>{cart?.length}</h4>
        <GrCart className="cartIcon" />
      </div>
    </div>
  );
};

export default Nav;
