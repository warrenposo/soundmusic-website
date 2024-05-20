import React, { useState } from "react";
import "./Topics.css";
import {
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
} from "../../assets";

const Topics = () => {

  const [currentImage, setCurrentImage] = useState(blog1);
  return (
  <section id="topics" className="black">
    <div className="wrapper">
      <h2>What will you learn</h2>
      <div className="content-container">
        <ul className="topics-list">
          <li onMouseEnter={() => setCurrentImage(blog1)}>What are frequencies</li>
          <li onMouseEnter={() => setCurrentImage(blog2)}>Using the DAW</li>
          <li onMouseEnter={() => setCurrentImage(blog3)}>Vocals Processing</li>
          <li onMouseEnter={() => setCurrentImage(blog4)}>Mixing</li>
          <li onMouseEnter={() => setCurrentImage(blog5)}>Mixing Console</li>
          <li onMouseEnter={() => setCurrentImage(blog6)}>Mastering</li>
        </ul>

        <div className="topic-image">
        <img src={currentImage} alt="blogs" />
      </div>
      </div>
    </div>
  </section>

  );
};

export default Topics;