import { NavLink, Outlet } from 'react-router-dom';
import getNavLinkClass from '../Utils/Render';
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../assets/logo.png';
import { useState } from 'react';

export default function Navbar() {

    const [isOpen , setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <nav className='fixed top-0 left-0 right-0 bg-black text-white flex justify-between items-center py-6 px-5 sm:px-10 md:px-20 lg:px-44'>
                <div>
                    <img src={logo} alt='logo' />
                </div>
                <div>
                    <div className='flex items-center md:gap-5 lg:gap-10 max-md:hidden'>
                        <NavLink to='/' className={getNavLinkClass}>Home</NavLink>
                        <NavLink to='/about' className={getNavLinkClass}>About</NavLink>
                        <NavLink to='/service' className={getNavLinkClass}>Service</NavLink>
                        <NavLink to='/portfolio' className={getNavLinkClass}>Portfolio</NavLink>
                        <NavLink to='/contact' className={getNavLinkClass}>Contact</NavLink>
                        <button className='border border-white py-2 px-8 rounded-sm'>Hire Me Now</button>
                    </div>
                    <div className='border border-white p-1 md:hidden' onClick={handleClick}>
                        <RxHamburgerMenu/>
                    </div>
                    {isOpen && <div>Navbar</div>}
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
