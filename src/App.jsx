import "./style.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projetos/Projects";
import About from "./components/AboutMe/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;
