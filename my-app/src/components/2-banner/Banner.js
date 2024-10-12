/* CSS */
import "../2-banner/Banner.css";
/* other */
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

import Spline from '@splinetool/react-spline';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaCodepen } from "react-icons/fa";


function Banner(props) {
  return (
    <div className="banner" id="home">
      <div className="banner-wrapper">
        <div className="banner-menu-icon">
          
        <div className="icon-social"><FaLinkedinIn/></div><div className="icon-social"><FaCodepen/></div ><div className="icon-social"><FiGithub/></div>
        </div>
        <div className="banner-intro">
          <h2> Hello, World! I'm </h2>
          <TypeAnimation
      sequence={[
        'Catarina Sousa ',
        1000, // wait 1s before replacing 
        'Frontend Developer ',
        1000]}wrapper="span" speed={50} className="color-intro" repeat={Infinity} />
        </div>
        <div className="banner-image">
        <Spline scene="https://prod.spline.design/MGn0zyYNIY2nMpcP/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}

export default Banner;


