import React from "react";
import Typical from "react-typical";
import "./Profile.css"

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/simrann20/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/simranchawla20">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.instagram.com/simranchawla_20/">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <span className="highlighted-text">Simranjeet Kaur</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🔴",
                    2000,
                    "Full Stack Developer 💻",
                    2000,
                    "MERN Stack Developer 😃",
                    2000,
                    "Java Developer 👽",
                    2000,
                    "Database Handler 🛢️",
                    2000,
                    "Flutter Developer 🐜",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                “Software always remain softly for End users! But sometimes hardly to developers!”
              </span>
            </span>
          </div>
          <div className="profile-optins">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="Simran_Resume.pdf" download="Simran_Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
