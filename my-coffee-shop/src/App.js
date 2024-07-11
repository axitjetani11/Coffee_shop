 
import './App.css';

import Navbar from './comp/Navbar';
import Hero from './comp/Hero';
import Devider from './comp/Devider';
import About from './comp/About';
import Services from './comp/Services';
import Projects from './comp/Projects';

function App() {
  return (
    <div className="App">
          <Navbar />
          <Hero />
          <Devider />
          <About />
          <Services />
          <Projects />
    </div>
  );
}

export default App;
