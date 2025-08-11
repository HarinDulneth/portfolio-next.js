import About from "./pages/aboutme";
import Home from "./pages/home";
import Skills from "./pages/skills";

export default function App() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="aboutme">
        <About />
      </section>
    </div>
  );
}
