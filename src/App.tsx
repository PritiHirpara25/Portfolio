import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="text-white">
      <Navbar />

      <div id="home">
        <Home />
      </div>
      <main className="content-section-stack bg-[#212529]">
        <About />
        <Portfolio />
        <Contact />
      </main>

    </div>
  );
}

export default App;
