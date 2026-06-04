import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
      <ParticlesBackground />
      <Header />
      <main className="relative z-10 flex flex-col items-center justify-center w-full mt-20">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
