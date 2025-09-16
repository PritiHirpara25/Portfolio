import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [toggleNavbar, setToggleNavbar] = useState(false);

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

  const navLinks = [
    { to: 'home', label: "Home" },
    { to: 'about', label: "About" },
    { to: 'portfolio', label: "Portfolio" },
    { to: 'contact', label: "Contact" },
  ]

  const handleToggleNavbar = () => {
    setToggleNavbar(!toggleNavbar);
  }
  return (
    <div className="fixed left-0 right-0 z-50 text-white">

      {/* Mobile Screen */}
      <div className="px-5 md:hidden py-6">
        <div className="flex justify-end cursor-pointer">
          <div className="border p-1" onClick={handleToggleNavbar}>
            {toggleNavbar ? <IoMdClose /> : <RxHamburgerMenu />}
          </div>
        </div>

        <div className={`transition-all duration-300 ease-in-out pt-1 ${toggleNavbar ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          {navLinks.map((item) => {
            return (
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-[#ff0180]"
                onClick={handleToggleNavbar}
                className="cursor-pointer hover:text-[#ff0180] bg-[#0c1923]/80 block border-t py-1 uppercase text-sm pl-4">
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>

      {/* Desktop Screen */}
      <nav className={`hidden top-0 transition-all duration-500 ${scrolled ? 'bg-[#262626] opacity-90' : 'bg-transparent'} md:flex justify-center items-center py-6 text-lg font-semibold`}>
        <div className="flex items-center gap-14">
          {navLinks.map((item) => {
            return (
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-[#ff0180]"
                className="cursor-pointer hover:text-[#ff0180]">{item.label}</Link>
            )
          })}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="border border-white py-3 px-5 rounded-sm cursor-pointer inline-block"
          >
            Hire Me Now
          </Link>
        </div>
      </nav >

    </div>
  )
}
