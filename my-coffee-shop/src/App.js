 
import './App.css';

import Navbar from './comp/Navbar';
import Hero from './comp/Hero';
import Devider from './comp/Devider';
import About from './comp/About';
import Services from './comp/Services';


function App() {
  return (
    <div className="App">
          <Navbar />
          <Hero />
          <Devider />
          <About />
          <Services />
    </div>
  );
}

export default App;
