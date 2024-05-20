import React from "react";
import "./Info.css";
import { FaUserGraduate } from "react-icons/fa6";
import { FaRegFileVideo } from "react-icons/fa";

const Info = () => {
  return (
    <section id="info" className="dark-gray">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <FaUserGraduate size="50px" className="icon"/>
            <div className="amount">23,000+</div>
            <div className="type">Students</div>
          </div>

          <div className="info-content">
          <FaRegFileVideo size="50px"/>
            <div className="amount">26 Hrs</div>
            <div className="type">Video Content</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;