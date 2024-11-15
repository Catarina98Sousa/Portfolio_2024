/* CSS */
import "../6-contacts/contact.css";
import "../button/button.css";

import Spline from '@splinetool/react-spline';

/* icon-react */
import { BsGeoAltFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

function Contact(props) {
  return (
    <div className="Contact" id="contact">
      <div className="Contact-wrapper">
        <div className="row scroll">
          <h1 className="title ">Contact</h1>
        </div>
        
        <div className="content-wrapper-contact scroll">

          {/* ---------first part------ */}
          

          <div className="info-wrapper">
            
            {/* icon */}
            <div className="icon-wrapper">

            <div className="icon-contact"  > <BsGeoAltFill/></div>
            <div className="icon-contact"  > <BsWhatsapp/></div> 
            <div className="icon-contact" > <BsEnvelopeFill/></div>
            </div> 

            {/* text */}
            <div className="text-description">

              <h3 className="description">Location</h3>
              <div className="box margin-costum btn-animation"><p>Portugal, Lisbon</p></div>

              <h3 className="description">Call me</h3>
              <div className="box margin-costum btn-animation"><p>+351 962 229 610</p></div>

              <h3 className="description ">Email me</h3>
              <div className="box btn-animation"><p>catarina989sousa@gmail.com</p></div>
            </div>
          </div>

          {/* ---------second part------ */}
          <div className="image"> 
          <Spline scene="https://prod.spline.design/qR3fJABdN-VOB8KA/scene.splinecode" />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;
