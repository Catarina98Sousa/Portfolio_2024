/* CSS */
import "../3-About/About.css";
import "../button/button.css";

/* img/icons */
import { Profile, ProfileDark } from "../../images/galery/profile.js";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";



/* import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom"; */


function About(props) {
  return (
    <div className="About " id="about">
      <div className="container-md container-sm py-5">
        <div className="row mx-5 justify-content-center">
          <div className="col-md col-sm">
            {/* <Fade left oposite cascade> */}
              <h1 className="title mb-5">About</h1>
          {/*   </Fade> */}
          </div>
        </div>
        <div className="row mx-5">
         {/*  <Zoom> */}
            <div className="col-md-4 col-sm">
              {/* phone difer  */} 
              <img src={props.theme === "light" ? Profile : ProfileDark} alt="profile" className="profile" />
            </div>
          {/* </Zoom> */}
         {/*  <Fade right oposite cascade> */}
            <div className="col-md col-sm text align-content-center">
              <p >
                Hello world <br/><br/>
                I am Catarina Sousa who is an enthusiastic about creating engaging and delightful digital experiences.
               <br/><br/> I am a curious person who is open to new knowledge and skills, constantly seeking learning opportunities to stay updated and improve my professional performance.
              </p>
            </div>
          {/* </Fade> */}
          <div className="row d-inline-flex justify-content-end mt-3 ">
            {/* phone difer */}
            <div className="col-md col-sm"></div>
            {/* <Zoom> */}
              <div className="col-md-3 col-sm-1">
                <a href="CV-EN-Catarina Sousa.pdf" download="CV-EN-Catarina Sousa.pdf" className="btn-primary">
                  {/* phone difer  */}
                  <p>
                    <span className="icon-btn">
                      <BsFillFileEarmarkPdfFill />
                    </span>
                    Download CV <span className="lang"> EN</span>
                  </p>
                </a>
              </div>
              <div className="col-md-3 col-sm-1">
                <a href="CV-PT-Catarina Sousa.pdf" download="CV-PT-Catarina Sousa.pdf" className="btn-primary">
                  {/* phone difer  */}

                  <p>
                    <span className="icon-btn">
                      <BsFillFileEarmarkPdfFill />
                    </span>
                    Download CV <span className="lang"> PT</span>
                  </p>
                </a>
              </div>
            {/* </Zoom> */}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default About;
