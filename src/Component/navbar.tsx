import React from "react";
import { Link } from "react-router-dom"; // use this for navigation

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MyShop</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/upperwear">Upperwear</Link></li>
        <li><Link to="/lowerwear">Lowerwear</Link></li>
        <li><Link to="/footwear">Footwear</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;



