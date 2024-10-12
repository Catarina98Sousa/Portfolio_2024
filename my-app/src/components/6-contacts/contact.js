/* CSS */
import "../6-contacts/contact.css";
import "../button/button.css";

/* React-animation */
/* import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom"; */


/* icon-react */
import { BsGeoAltFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiFillCodepenSquare } from "react-icons/ai";

function Contact(props) {
  return (
    <div className="Contact py-3" id="contact">
      <div className="container-md container-sm py-5">
        <div className="col-md col-sm">
          <h1 className="title mb-5">Contact</h1>
        </div>
        
     {/*  <div className="row pt-5 d-flex align-items-center">
          <div className="col-md col-sm">
            <div className="info mx-5">
                <div className=" border mb-4">
                  <div className="d-flex justify-content-center align-items-center">
                    <p className="d-flex align-items-center sub-title">
                      <BsEnvelopeFill className="me-3" /> Email:
                    </p>
                    <p className="mail ms-3"> catarina989sousa@gmail.com</p>
                  </div>
                </div>
                <div className="row mx-1 ">
                  <div className="border col-md col-sm me-1">
                    <div className="d-flex justify-content-center align-items-center">
                      <p className="d-flex align-items-center sub-title">
                        <BsTelephoneFill className="me-2" />{" "}
                        <BsWhatsapp className="me-3" /> Phone (Whatsap):  
                      </p>
                      <p className="number ms-3"> 962229610</p>
                    </div>
                  </div>
                  
                </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
