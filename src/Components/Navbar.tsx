import { NavLink, Outlet } from 'react-router-dom'
import getNavLinkClass from '../Utils/Render'
import { useEffect, useState } from 'react'

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
        <div>
            <nav className={`fixed left-0 right-0 z-50 ${scrolled ? 'bg-[#262626] opacity-90' : 'bg-transparent'} text-white flex justify-center items-center py-6 px-52`}>
                {/* <div className='border border-white'>
                    Logo
                </div> */}
                <div className='flex items-center gap-10'>
                    <NavLink to='/' className={({ isActive }) => getNavLinkClass({ isActive })}>Home</NavLink>
                    <NavLink to='/about' className={({ isActive }) => getNavLinkClass({ isActive })}>About</NavLink>
                    <NavLink to='/service' className={({ isActive }) => getNavLinkClass({ isActive })}>Service</NavLink>
                    <NavLink to='/portfolio' className={({ isActive }) => getNavLinkClass({ isActive })}>Portfolio</NavLink>
                    <NavLink to='/contact' className={({ isActive }) => getNavLinkClass({ isActive })}>Contact</NavLink>
                    <button className='border border-white py-3 px-5 rounded-sm'>Hire Me Now</button>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
