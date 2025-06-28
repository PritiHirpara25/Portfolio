import { NavLink } from 'react-router-dom'
import home from '../assets/home.jpg'
import { IoLogoLinkedin , IoLogoFacebook , IoLogoInstagram , IoLogoPinterest  } from "react-icons/io";

export default function Home() {
  return (
    <div className='bg-gray-500 border border-red-500 h-[530px]'>
      {/* <div>
        <img src={home} className='w-44 h-98 border border-red-500'/>
      </div>   */}
      <div className='flex justify-center items-center text-center h-[530px]'>
        <div>
          <div className='home-content'>
            <span className='text-2xl'>I Am</span>
            <p className='animated-content'>Frontend Developer</p>
          </div>
          <div className='flex justify-center gap-3 text-2xl text-white'>
            <NavLink to='/' className='drop-shadow-[2px_2px_3px_#000000] shadow-[-1px_-1px_3px_#4d4d4d] rounded-full'>
              <IoLogoFacebook/>
            </NavLink>
            <NavLink to='/' className='drop-shadow-[2px_2px_3px_#000000] shadow-[-1px_-1px_3px_#4d4d4d] rounded-full'>
              <IoLogoLinkedin/>
            </NavLink>
            <NavLink to='/' className='drop-shadow-[2px_2px_3px_#000000] shadow-[-1px_-1px_3px_#4d4d4d] rounded-full'>
              <IoLogoInstagram />
            </NavLink>
            <NavLink to='/' className='drop-shadow-[2px_2px_3px_#000000] shadow-[-1px_-1px_3px_#4d4d4d] rounded-full'>
              <IoLogoPinterest />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
