/* CSS */
import "../2-banner/Banner.css";

/* other */
import "bootstrap/dist/css/bootstrap-grid.min.css";
/* import Fade from "react-reveal/Fade"; */

/* bootstrap n esta a funcionar
 */
function Banner(props) {
  return (
    <div className="banner" id="home">
      <div className="container-md container-sm">
        <div className="row pt-5"></div>
        <div className="row pt-5"></div>
        <div className="row">
          <div className="col-md-2 col-sm"></div>
          {/* <Fade left oposite cascade> */}
            <div className="col intro">
              <h2>Hello!</h2>
              <h2>I'm Catarina Sousa!</h2>
              <span className="color-intro">Frontend Developer</span>
            </div>
          {/* </Fade> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
