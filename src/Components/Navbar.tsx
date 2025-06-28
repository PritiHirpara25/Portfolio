import { NavLink, Outlet } from 'react-router-dom'
import getNavLinkClass from '../Utils/Render'

export default function Navbar() {
    return (
        <div>
            <nav className='fixed left-0 right-0 bg-black text-white flex justify-between items-center py-6 px-52'>
                <div className='border border-white'>
                    Logo    
                </div>
                <div className='flex items-center gap-10'>
                    <NavLink to='/' className={getNavLinkClass}>Home</NavLink>
                    <NavLink to='/about' className={getNavLinkClass}>About</NavLink>
                    <NavLink to='/service' className={getNavLinkClass}>Service</NavLink>
                    <NavLink to='/portfolio' className={getNavLinkClass}>Portfolio</NavLink>
                    <NavLink to='/contact' className={getNavLinkClass}>Contact</NavLink>
                    <button className='border border-white py-3 px-5 rounded-sm'>Hire Me Now</button>
                </div>
            </nav>
            <main className='pt-24'>
                <Outlet />
            </main>
        </div>
    )
}
