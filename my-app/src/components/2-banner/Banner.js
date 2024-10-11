/* CSS */
import "../2-banner/Banner.css";
/* other */
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";



function Banner(props) {
  return (
    <div className="banner" id="home">
      <div className="banner-wrapper">
        <div className="banner-menu-icon">
        <h2>C</h2><h2>C</h2><h2>C</h2><h2>C</h2>
        </div>
        <div className="banner-intro">
          <h2> Hello, World! I'm </h2>
          <h2>Catarina Sousa</h2>
          <span className="color-intro">Frontend Developer</span>
        </div>
        <div className="banner-image"></div>
      </div>
    </div>
  );
}

export default Banner;
