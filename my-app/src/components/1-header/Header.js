/* CSS */
import "./header.css";
import "../button/button.css";

/* Img/icons */
import { Logo, LogoDark } from "../../images/icon/logo.js";
import { Moon, Sun } from "../../images/icon/menu/swicth.js";

/* Animation */
import {Link} from "react-scroll";

/* others */
import React, { useState } from "react";

function Header(props) {
  /* scroll change bg */
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  /* menu bar */
  const [active, setActive] = useState("nav-menu");
  const [togglerIcon, setTogglerIcon] = useState("nav-toggler");

  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");

    //toggler animation close

    togglerIcon === "nav-toggler"
      ? setTogglerIcon("nav-toggler toggle")
      : setTogglerIcon("nav-toggler");
  };

  return (
    <header className={header ? "header active" : "header"}>
      <div className="nav">
        <a href="#home" className="logo">
          <img src={props.theme === "light" ? Logo : LogoDark} alt="logo" />
        </a>
        <div className="menu">
          <ul className={active}>
            <li className="nav-item">
              <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="nav-item" >
                Home
              </Link>
            </li>
            <li className="nav-item">
            <Link to="about" spy={true} smooth={true} offset={-58} duration={500} className="nav-item" >
                About
              </Link>
            </li>
            <li className="nav-item">
            <Link to="skill" spy={true} smooth={true} offset={-50} duration={500} className="nav-item" >
                Skills
              </Link>
            </li>
            <li className="nav-item">
            <Link to="projects" spy={true} smooth={true} offset={-58} duration={500} className="nav-item" >
                Projects
              </Link>
            </li>
            <li className="nav-item">
            <Link to="contact" spy={true} smooth={true} offset={0} duration={500} className="nav-item" >
            Contact
              </Link>
            </li>
          </ul>
          <button className="swicth-btn" onClick={props.handleThemeChange}>
            <img
              src={props.theme === "light" ? Moon : Sun}
              className="icon-switch"
              alt=""
            />
          </button>

          <div onClick={navToggle} className={togglerIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
