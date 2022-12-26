import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services" name="Skills">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
       I provides MERN stack technologies that enables faster application development. 
          <br />
          It is used by developers worldwide.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Frontend"}
            detail={
              // "HTML, CSS, SCSS, BOOTSTARP, JAVASCRIPT, REACT JS, NEXT JS, REDUCX JS, WORDPRESS, W3.CSS, MUI"
          <ul><li>html</li>
          <li>css</li>
          <li>scss</li>
          <li>bootsrtap</li>
          <li>JAVASCRIPT</li>
          <li>react js</li>
          <li>next js</li>
          <li>redux js</li> 
          <li>WORDPRESS</li>
          <li>w3.css</li>
          <li>MUI</li>
          <li>tailwind
            </li></ul>
          }
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Backend"}
            detail={
            
              <ul>
                <li>REST API</li>
                <li>NODE JS</li>
                <li>EXPRESS JS</li>
                <li>MONGODB</li>
                <li>MONGOOSE</li>
              </ul>
            }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"More"}
            detail={
             
              <ul> 
                <li>GIT</li>
                <li>GITHUB</li>
                <li>AWS</li>
                <li>FIREBASE</li>
              
              </ul>
             
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
