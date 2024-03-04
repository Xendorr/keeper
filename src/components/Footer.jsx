import React from "react";
import "../styles/components/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer__container">
        <p className="footer__container-text">
          Copyright © {currentYear} Keeper App
        </p>
      </footer>
    </>
  );
};

export default Footer;
