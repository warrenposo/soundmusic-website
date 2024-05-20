import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav>
        <a href="#" className="logo">
          Sound <span className="red">DZign</span>
        </a>

        <ul>
          <li>
            <a href="#topics">Course Details</a>
          </li>
          <li>
            <a href="#info">About</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>

        <div onClick={() => setIsActive(true)} className="menu-icon">
          <FiMenu color="#fff" size="25px" />
        </div>
      </nav>

      <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
        <div onClick ={() => isActive(false)} className="close-icon">
          <MdClose color="#fff" size="25px" />
        </div>

        <ul className="menu-items">
          <li>
            <a href="#topics" onClick ={() => isActive(false)}>Course Details</a>
          </li>
          <li>
            <a href="#info" onClick ={() => isActive(false)}>About</a>
          </li>
          <li>
            <a href="#blog" onClick ={() => isActive(false)}>Blog</a>
          </li>
          <li>
            <a href="#testimonials" onClick ={() => isActive(false)}>Testimonials</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
