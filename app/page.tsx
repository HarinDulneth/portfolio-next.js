import About from "./pages/aboutme";
import Home from "./pages/home";
import Introduction from "./pages/introduction";
import Projects from "./pages/projects";
import Skills from "./pages/skills";

export default function App() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      {/* <section id="introduction">
        <Introduction />
      </section> */}
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="aboutme">
        <About />
      </section>
    </div>
  );
}


