import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <a href="https://www.instagram.com/_brijesh.p/">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/brijesh-prajapati-436256135/">
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/BrijeshPrajapati8858">
            <Gitub color="white" size={"3rem"} />{" "}
          </a>
        </div>
        <span>userbrijesh@gmail.com</span>
      </div>
    </div>
  );
};

export default Footer;
