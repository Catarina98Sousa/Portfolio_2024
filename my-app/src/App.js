/* css */
import './styles.css';

/* imports */
import useLocalStorage from "use-local-storage";

/* parts */
import Header from './components/1-header/Header.js';
import Banner from './components/2-banner/Banner.js';
import About from './components/3-About/About.js';
import Projects from './components/5-projects/projects.js';
import Contact from './components/6-contacts/contact.js';
import Footer from './components/7-footer/footer.js';


function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  function switchTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} handleThemeChange={switchTheme} />
      <Banner/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      

    </div>
  );
}

export default App;
