import About from "./Pages/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Experience from "./Pages/Experience";
import './App.css'


function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0b10]">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
