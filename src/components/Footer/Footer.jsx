import React from "react";
import "./Footer.css";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Sound <span className="red">DZign</span>
            </a>

            <div className="social-icons">
              <a href="#">
                <FaSquareFacebook fill="#0866ff" size="25px" />
              </a>
              <a href="#">
                <FaSquareXTwitter fill="#fff" size="25px" />
              </a>
              <a href="#">
                <FaInstagramSquare fill="#e91e63" size="25px" />
              </a>
            </div>

            <div className="copy-right">
              This website is designed by Warren inspired by GTCoding &copy;
              2024
            </div>
          </div>

          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#">warrenokumu98@gmail.com</a>
              </li>
              <li>
                <a href="#">+254707168578</a>
              </li>
            </ul>
          </div>

          <div className="copy-right mobile">
              This website is designed by Warren inspired by GTCoding &copy;
              2024
            </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
