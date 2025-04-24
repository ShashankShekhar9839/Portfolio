import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Experince from "./sections/Experience/Experience";
import Education from "./sections/Education/Education";
import FloatingContactPanel from "./sections/FloatingContactPanel/FloatingContactPanel";
import Header from "./sections/Header/Header";

function App() {
  return (
    <>
      <Header />
      <FloatingContactPanel />
      <Hero />
      <Experince />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
