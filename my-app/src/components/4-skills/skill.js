/* CSS */
import "../4-skills/skill.css";

/* Img/icons */
import Photoshop from "../../images/icon/skills/photoshop.png";
import Premiere from "../../images/icon/skills/premiere.png";
import Ilustrator from "../../images/icon/skills/ilustrator.png";
import Figma from "../../images/icon/skills/figma.png";
import VScode from "../../images/icon/skills/vscode.png";
import HTML from "../../images/icon/skills/html.png";
import CSS from "../../images/icon/skills/css.png";
import Javascript from "../../images/icon/skills/javascript.png";
import Sass from "../../images/icon/skills/sass.png";
import React from "../../images/icon/skills/react.png";

/* import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom"; */

function Skill(props) {
  return (
    <div className="Skill py-5" id="skill">
      <div className="container-md container-sm py-5">
        <div className="row mx-5">
          {/* <Fade left oposite cascade> */}
            <h1 className="title mb-5">Skill</h1>
          {/* </Fade> */}
        </div>
        <div className="row">
          <div className="col-md col-sm d-flex justify-content-center">
            <div className="tools">
              {/* Adobe  */}
              {/* Photoshop */}
              {/* <Zoom> */}
                <img src={Photoshop} alt="" className="icon-skill" />
                {/* Premiere */}
              {/* </Zoom>
              <Zoom> */}
                <img src={Premiere} alt="" className="icon-skill" />
                {/* Ilustrator */}
              {/* </Zoom>
              <Zoom> */}
                <img src={Ilustrator} alt="" className="icon-skill" />
                {/* Figma */}
              {/* </Zoom>
              <Zoom> */}
                <img src={Figma} alt="" className="icon-skill" />
                {/* VScode */}
              {/* </Zoom>
              <Zoom> */}
                <img src={VScode} alt="" className="icon-skill" />
                {/* HTML */}
              {/* </Zoom>
              <Zoom> */}
                <img src={HTML} alt="" className="icon-skill" />
                {/* CSS */}
              {/* </Zoom>
              <Zoom> */}
                <img src={CSS} alt="" className="icon-skill" />
                {/* JS */}
              {/* </Zoom>
              <Zoom> */}
                <img src={Javascript} alt="" className="icon-skill" />
                {/* Sass */}
              {/* </Zoom>
              <Zoom> */}
                <img src={Sass} alt="" className="icon-skill" />
                {/* React */}
              {/* </Zoom>
              <Zoom> */}
                <img src={React} alt="" className="icon-skill" />
              {/* </Zoom> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
