import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="text-white">
      <Navbar />

      <div id="home">
        <Home />
      </div>
      <div className='bg-[#262626] px-52'>
        <div id='about'>
          <About />
        </div>
        <div id="service">
          <Service />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>

    </div>
  );
}

export default App;
