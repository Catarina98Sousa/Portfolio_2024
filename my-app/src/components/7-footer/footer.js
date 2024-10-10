/* CSS */
import "../7-footer/footer.css";
import "../button/button.css";

/* Img/icons */
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillCodepenSquare } from "react-icons/ai";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row mx-2">
          <div className="col by mt-3">
            <p>Developed by Catarina Sousa</p>
          </div>
          <div className="col d-flex justify-content-end align-items-end pt-2">
            <a href="https://www.linkedin.com/in/catarina-sousa-386b69247/" >
            <BsLinkedin className="social-icon mx-1" /></a>
            <a href="https://github.com/Catarina98Sousa" >
            <BsGithub className="social-icon mx-1" /></a>
            <a href="https://codepen.io/SakuraCat" >
                <AiFillCodepenSquare className="social-icon-def mx-1"/>
                </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
