/* CSS */
import "../2-banner/Banner.css";
/* other */
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

import Spline from '@splinetool/react-spline';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaCodepen } from "react-icons/fa";


function Banner(props) {
  return (
    <div className="banner" id="home">
      <div className="banner-wrapper ">
        <div className="banner-menu-icon ">
          
        <a className="icon-social" href="https://www.linkedin.com/in/catarina-sousa-386b69247/" > <FaLinkedinIn/></a>
        <a className="icon-social" href="https://codepen.io/SakuraCat" > <FaCodepen/></a> 
        <a className="icon-social" href="https://github.com/Catarina98Sousa" > <IoLogoGithub/></a>
        </div>
        <div className="banner-intro">
          <h2> Hello, World! I'm </h2>
          <TypeAnimation
      sequence={[
        'Catarina Sousa ',
        2000, // wait 1s before replacing 
        'Frontend Developer ',
        2000]}wrapper="span" speed={20} className="color-intro" repeat={Infinity} />
        </div>
        <div className="banner-image">
        <Spline scene="https://prod.spline.design/MGn0zyYNIY2nMpcP/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}

export default Banner;


