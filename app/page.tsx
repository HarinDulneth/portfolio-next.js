import About from "./pages/aboutme";
import Awards from "./pages/awards";
import Experience from "./pages/experience";
import FooterPage from "./pages/footer";
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
      <section id="awards">
        <Awards />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="footer">
        <FooterPage />
      </section>
    </div>
  );
}


