/* Css */
import "../3-About-bg/bg.css";
/* Parts */
import Skill from "../4-skills/skill";
import About from "../3-About/About";

export default function AboutSkill() {
    return (  
        <div className="About-bg py-5" >
        <div className="container py-5">
          <About/>
          <Skill/>
        </div>
      </div>
    );
}