import BackgroundTheme from "./components/backgroundTheme";
import Notebook3D from "./components/notebook3D";

import HomePage from "./components/homePage";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <BackgroundTheme />
      <Notebook3D />

      <HomePage />
    
      <AboutMe />

      <Skills/>

      <Projects />
    </>
  );
}

export default App;
