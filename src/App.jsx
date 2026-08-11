import SocialSidebar from './components/SocialSidebar';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import BackendProjects from './components/BackendProjects';
import Skills from './components/Skills';
import Services from './components/Services';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuraBackground from './components/AuraBackground';
import CursorGlow from './components/CursorGlow';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <>
      <AuraBackground />
      <CursorGlow />
      <SocialSidebar />
      <BackToTop />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <BackendProjects />
      <Skills />
      <Services />
      <Experience />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
