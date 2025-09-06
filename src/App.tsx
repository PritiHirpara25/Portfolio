import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Navbar from "./Components/navbar";

function App() {
  return (
    <div className="text-white">
      <Navbar />

      <div id="home">
        <Home />
      </div>
      <div className="bg-[#212529] pb-20">
        <div className=' space-y-32'>
          <div id='about'>
            <About />
          </div>
          <div id="service" className="bg-[#131419]">
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

    </div>
  );
}

export default App;
