import React from "react";
import logo from "../assets/images/logoFooter.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p className="footer-text">© 2024 Kasa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
