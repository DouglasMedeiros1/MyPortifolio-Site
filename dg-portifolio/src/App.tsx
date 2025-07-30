import BackgroundTheme from "./components/backgroundTheme";
import Notebook3D from "./components/notebook3D";

import HomePage from "./components/homePage";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <BackgroundTheme />
      <Notebook3D />

      <div id="home" />
      
      <HomePage />
    
      <div id="aboutme" />
      <br />
      <AboutMe />

      <div id="skills" />
      <br />
      <Skills/>

      <div id="projects" />
      <br />
      <Projects />

      <Footer />
    </>
  );
}

export default App;
