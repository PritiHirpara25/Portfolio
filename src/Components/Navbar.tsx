import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [toggleNavbar, setToggleNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: 'home', label: "Home" },
    { to: 'about', label: "About" },
    { to: 'portfolio', label: "Portfolio" },
    { to: 'contact', label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[#0A0A0A]/80 backdrop-blur-lg' : 'py-6 bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo/Name */}
        <Link to="home" smooth={true} className="text-xl font-bold tracking-tighter cursor-pointer group">
          PRITI<span className="text-cyan-400 group-hover:text-violet-500 transition-colors">.H</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-cyan-400"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer uppercase tracking-widest"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-lg hover:bg-cyan-400 transition-all cursor-pointer shadow-lg shadow-white/5"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-white p-2 glass-card rounded-lg"
          onClick={() => setToggleNavbar(!toggleNavbar)}
        >
          {toggleNavbar ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 right-0 mx-4 mt-2 rounded-xl border border-white/10 bg-gray-800 p-6 shadow-xl md:hidden transition-all duration-300 origin-top ${toggleNavbar ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`}>
        <div className="flex flex-col gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-cyan-400 font-bold"
              onClick={() => setToggleNavbar(false)}
              className="text-lg text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
