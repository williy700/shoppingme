import React from "react";
import { Link } from "react-router-dom"; 
import "../Component/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyShop. All rights reserved.</p>
      <div className="footer-links">
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link> | 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;


