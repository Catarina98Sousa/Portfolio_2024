/* CSS */
import "../3-About/About.css";
import "../button/button.css";

/* img/icons */
import { Profile, ProfileDark } from "../../images/galery/profile.js";
import { FiDownload } from "react-icons/fi";
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
  const [activeTab, setActiveTab] = useState(null);

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
            {/*------- tabs nav btn ----------*/}
            <div className="wrapper-skill">
              <div class="list-tab-btn" >
                <button className={`tab-btn ${activeTab === 'Tab1' ? 'active' : ''}`}
          onClick={() => handleTabClick('Tab1')} class="tab-btn">Skills <IoIosArrowDown /></button>

                <button className={`tab-btn ${activeTab === 'Tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('Tab2')} class="tab-btn">CV <IoIosArrowDown /></button>
              </div>


              {/*----- tabs content -----*/}
              <div className="tab-content">
                {/* Skill content */}
                {activeTab === 'Tab1' &&<div >
                  <div className="content-skills"> 
                  <div className="grid-skills"> 
                    {/* row 1 */}
                    <div className="item">
                    <div className="item-img"><FaHtml5 /> </div>
                      <div className="item-legend">HTML 5 </div>
                    </div>
                    <div className="item">
                      <div className="item-img"><FaCss3Alt /></div>
                      <div className="item-legend">CSS 3 </div>
                    </div>
                    <div className="item">
                      <div className="item-img"><FaSass /></div>
                      <div className="item-legend">Sass/Scss </div>
                    </div>
                    <div className="item">
                      <div className="item-img"><IoLogoJavascript /></div>
                      <div className="item-legend">Javascript </div>
                    </div>
                    <div className="item">
                      <div className="item-img"><FaReact /></div>
                      <div className="item-legend">React </div>
                    </div>
                      
                    {/* row 2 */}
                    <div className="item">
                      <div className="item-img"><SiAdobeillustrator /></div>
                      <div className="item-legend">Ilustrator </div>
                    </div>

                    <div className="item">
                      <div className="item-img"><SiAdobephotoshop /></div>
                      <div className="item-legend">Photoshop </div>
                    </div>

                    <div className="item">
                      <div className="item-img"><SiAdobepremierepro /></div>
                      <div className="item-legend">Premiere </div>
                    </div>

                    <div className="item">
                      <div className="item-img"><VscVscodeInsiders /></div>
                      <div className="item-legend">VsCode </div>
                    </div>

                    <div className="item">
                      <div className="item-img"><FaFigma /></div>
                      <div className="item-legend">Figma </div>
                    </div>
                  </div>
                  </div>
                </div>}


                {/* CV content */}
                {activeTab === 'Tab2' && <div  >
                  <div className="cv-btn-wrapper">
                    {/* btn en */}
                    <a href="CV-EN-Catarina Sousa.pdf" download="CV-EN-Catarina Sousa.pdf" className="btn-primary">
                    <p className="text-btn"> Download CV <span className="lang"> EN</span><span className="icon-btn"><FiDownload /> </span></p>
                    </a>
                    {/* btn pt */}
                    <a href="CV-PT-Catarina Sousa.pdf" download="CV-PT-Catarina Sousa.pdf" className="btn-primary">
                    <p className="text-btn">Download CV <span className="lang"> PT</span><span className="icon-btn"><FiDownload /> </span></p>
                    </a>
                  </div>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
