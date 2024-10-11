/* css */
import './styles.css';

/* imports */
import useLocalStorage from "use-local-storage";

/* parts */
import Header from './components/1-header/Header.js';
import Banner from './components/2-banner/Banner.js';


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

    </div>
  );
}

export default App;
