import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <nav className={`fixed left-0 right-0 z-50 ${scrolled ? 'bg-[#262626] opacity-90' : 'bg-transparent'} text-white flex justify-center items-center py-6 px-52 text-lg font-semibold pl-80`}>
      <div className="flex items-center gap-14">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}                      // watch scroll position
          activeClass="text-pink-600"     // apply this when active
          className="cursor-pointer hover:text-pink-600">
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="text-pink-600"
          className="cursor-pointer hover:text-pink-600">
          About
        </Link>
        <Link
          to="service"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="text-pink-600"
          className="cursor-pointer hover:text-pink-600">
          Service
        </Link>
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="text-pink-600"
          className="cursor-pointer hover:text-pink-600">
          Portfolio
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="text-pink-600"
          className="cursor-pointer hover:text-pink-600">
          Contact
        </Link>
        <button className="border border-white py-3 px-5 rounded-sm">Hire Me Now</button>
      </div>
    </nav >
  )
}
