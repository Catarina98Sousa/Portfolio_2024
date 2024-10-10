/* CSS */
import "../5-projects/project.css";
import "../button/button.css";

/* Img/icons */
import { BsChevronRight } from "react-icons/bs";

/* download */
/* import PDF from "../../images/icon/social/download.png"; */

/* Img/icons */
/* import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom"; */

/* Others */
import BasicCard from "../basicCard/basicCard";
import Articles from "../../data/articles";



function Projects(props) {
  const articlesArray = Articles.map((article) => (
    <BasicCard
      key={article.id}
      id={article.id}
      imgPath={article.image}
      title={article.title}
      link={article.link}
      url={article.url}
    />
  ));
  return (
    <div className="Projects" id="projects">
      <div className="container-md container-sm py-5">
        <div className="row mx-5 justify-content-between align-items-baseline">
          <div className="col-md col-sm-2">
           {/*  <Fade left oposite cascade> */}
              <h1 className="title mb-5">Projects</h1>
           {/*  </Fade> */}
          </div>
          {/* <Fade right oposite cascade> */}
            <div className="col-md-2 col-sm-2">
              <a href="https://github.com/Catarina98Sousa" className="btn-primary">
                see more <BsChevronRight className="arrow"/>
              </a>
            </div>
          {/* </Fade> */}
        </div>
        <div className="row mx-4 ">
          {/* <Zoom> */}
            <div className="articles">{articlesArray}</div>
          {/* </Zoom> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
