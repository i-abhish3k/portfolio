import About from "./Pages/About/About.js";
import Education from "./Pages/Educations/Education";
import Techstack from "./Pages/Techstack/Techstack";
import Projects from "./Pages/Projects/Projects";
import WorkExp from "./Pages/workExp/WorkExp";
import Layout from "./components/Layout/Layout";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemContext.js";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <Tada>
          <div className="footer pb-3 ms-3">
            <h4 className="text-center">Made With ❤️ Abhishek &copy; 2023</h4>
          </div>
        </Tada>
      </div>

      <ScrollToTop
        color="#f29f67"
        smooth
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
