/* CSS */
import "../3-About/About.css";
import "../button/button.css";

/* img/icons */
import { Profile, ProfileDark } from "../../images/galery/profile.js";
 import { BsFillFileEarmarkPdfFill } from "react-icons/bs"; 
 import { IoIosArrowDown } from "react-icons/io";

 /* skills */
 import { FaHtml5 } from "react-icons/fa";
 import { FaCss3Alt } from "react-icons/fa";
 import { FaSass } from "react-icons/fa";
 import { IoLogoJavascript } from "react-icons/io";
 import { FaReact } from "react-icons/fa";
 import { SiAdobeillustrator } from "react-icons/si";
 import { SiAdobephotoshop } from "react-icons/si";
 import { SiAdobepremierepro } from "react-icons/si";
 import { VscVscodeInsiders } from "react-icons/vsc";
 import { FaFigma } from "react-icons/fa";


 /* imports */
 import React, { useState } from 'react';



function About(props) {
  /* tab js */
  /* Qual tab */
  const [activeTab, setActiveTab] = useState('Tab1');

  /* click event */
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className="About " id="about">
      <div className="About-wrapper">
        {/* titulo */}
        <div className="row"> <h1 className="title">About</h1> </div>

        <div className="content-wrapper">
          {/*--------------------- imagem ---------------------*/}
          <div className="profile"> <img src={props.theme === "light" ? Profile : ProfileDark} alt="profile" className="pic-profile" /> </div>

          {/*------------------ texto + tabs -----------------*/}
          <div className="wrapper-info">

            {/* texto */}
            <div className="text">
              <p >I am Catarina Sousa who is an enthusiastic about creating engaging and delightful digital experiences.<br/> 
              I am a curious person who is open to new knowledge and skills, constantly seeking learning opportunities to stay updated and improve my professional performance.</p>
            </div>
            {/*------- tabs nav ----------*/}
            <div className="wrapper-skill">
              <div class="list-tab-btn" >
                <button class="tab-btn active" id="skills" >Skills <IoIosArrowDown /></button>
                <button class="tab-btn" id="education" >Education <IoIosArrowDown /></button>
                <button class="tab-btn" id="CV" >CV <IoIosArrowDown /></button>
              </div>


              {/*----- tabs content -----*/}
              <div class="tab-content" id="tabContent">
                {/* Skill content */}
                <div class="tab-pane fade show active" id="skills" role="tabpanel"  tabindex="0">
                  <div className="grid-skills"> 
                    <div className="item 1"><FaHtml5 /></div>
                    <div className="item 1"><FaCss3Alt /></div>
                    <div className="item 1"><FaSass /></div>
                    <div className="item 1"><IoLogoJavascript /></div>
                    <div className="item 1"><FaReact /></div>
                    <div className="item 1"><SiAdobeillustrator /></div>
                    <div className="item 1"><SiAdobephotoshop /></div>
                    <div className="item 1"><SiAdobepremierepro /></div>
                    <div className="item 1"><VscVscodeInsiders /></div>
                    <div className="item 1"><FaFigma /></div>
                  </div>
                </div>
                {/* Education content */}
                <div class="tab-pane fade" id="education">
                  

                </div>

                {/* CV content */}
                <div class="tab-pane " id="CV" >
                  <div className="cv-btn-wrapper">
                    {/* btn en */}
                    <a href="CV-EN-Catarina Sousa.pdf" download="CV-EN-Catarina Sousa.pdf" className="btn-primary">
                    <p><span className="icon-btn"><BsFillFileEarmarkPdfFill /> </span> Download CV <span className="lang"> EN</span></p>
                    </a>
                    {/* btn pt */}
                    <a href="CV-PT-Catarina Sousa.pdf" download="CV-PT-Catarina Sousa.pdf" className="btn-primary">
                    <p><span className="icon-btn"><BsFillFileEarmarkPdfFill /> </span>Download CV <span className="lang"> PT</span></p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
