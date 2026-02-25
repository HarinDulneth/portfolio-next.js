import About from "./pages/aboutme";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Skills from "./pages/skills";

export default function App() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="aboutme">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}


