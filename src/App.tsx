import Home from "./Pages/Home";
import About from "./Pages/About";
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
