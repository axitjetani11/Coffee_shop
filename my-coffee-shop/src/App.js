 
import './App.css';
// Componant Import
import Navbar from './comp/Navbar';
import Hero from './comp/Hero';
import Devider from './comp/Devider';
import About from './comp/About';
import Services from './comp/Services';
import Projects from './comp/Projects';
import Contact from './comp/Contact';
import Foooter from './comp/Foooter';

function App() {
  return (
    <div className="App">
          <Navbar

          />
          <Hero />
          <Devider />
          <About />
          <Services />
          <Projects />
          <Contact />
          <Foooter />
    </div>
  );
}

export default App;
