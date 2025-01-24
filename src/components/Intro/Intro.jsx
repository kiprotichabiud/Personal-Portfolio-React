import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import "./Intro.css";

const Main = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 2 }}
    >
      <div id="home" className="main-container">
        <div className="content-wrapper">
          <div>
            <p className="intro-text">LET'S BUILD SOMETHING BEAUTIFUL</p>
            <h1 className="greeting">
              Hi, I am <span className="highlight">Abiud Kiprotich</span>
            </h1>
            <h2 className="role">I am a</h2>
            <h1 className="dynamic-role">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "React Js Developer",
                    "Phoenix Developer",
                    "Elixir Developer",
                    "Technical Writer",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                }}
              />
            </h1>
            <p className="description">
              I am a full-stack developer with 4 years of experience, trained at
              Microverse and Moringa. I specialize in building scalable web
              applications using Elixir, Phoenix, and React JS. From startups to
              enterprise solutions, I’ve delivered projects that prioritize user
              experience and performance. I also create content around tech to
              help developers grow. Let’s create something impactful together.
            </p>
            <div className="social-icons">
              <div className="icon-wrapper">
                <a
                  href="https://www.linkedin.com/in/abiud-kiprotich-5577692a7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="icon" />
                </a>
              </div>
              <div className="icon-wrapper">
                <a
                  href="https://github.com/kiprotichabiud"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="icon" />
                </a>
              </div>
              <div className="icon-wrapper">
                <a
                  href="https://twitter.com/your_twitter_handle"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="icon" />
                </a>
              </div>
              <div className="icon-wrapper">
                <a href="tel:+254715394384" rel="noopener noreferrer">
                  <FiPhoneCall className="icon" />
                </a>
              </div>
              <div className="icon-wrapper">
                <a
                  href="https://wa.me/254715394384"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp className="icon" />
                </a>
              </div>
              <div className="icon-wrapper">
                <a
                  href="https://www.tiktok.com/@your_tiktok_handle"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
