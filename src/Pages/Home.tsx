import { NavLink } from 'react-router-dom'
import home from '../assets/home.jpg'
import bghome from '../assets/bghome.png'
import { IoLogoLinkedin, IoLogoFacebook, IoLogoInstagram, IoLogoPinterest } from "react-icons/io";

export default function Home() {
  return (
    <div className='h-[530px]'
      style={{ backgroundImage: `url(${bghome})` }}
    >
      {/* <div>
        <img src={home} className='w-44 h-98 border border-red-500'/>
      </div>   */}
      <div className='flex justify-center items-center text-center h-[530px]'>
        <div className='text-white flex flex-col items-center'>

          <div className='home-content'>
            <span className='text-2xl'>I Am</span>
            <p className='animated-content'>Frontend Developer</p>
          </div>

          <div className='flex justify-center gap-3 text-2xl mt-5'>
            <NavLink to='/' className='drop-shadow-[2px_2px_3px_#000000] shadow-[-1px_-1px_3px_#4d4d4d] rounded-full'>
              <IoLogoFacebook />
            </NavLink>
            <NavLink to='/' className='drop-shadow-[2px_2px_3px_#000000] shadow-[-1px_-1px_3px_#4d4d4d] rounded-full'>
              <IoLogoLinkedin />
            </NavLink>
            <NavLink to='/' className='drop-shadow-[2px_2px_3px_#000000] shadow-[-1px_-1px_3px_#4d4d4d] rounded-full'>
              <IoLogoInstagram />
            </NavLink>
            <NavLink to='/' className='drop-shadow-[2px_2px_3px_#000000] shadow-[-1px_-1px_3px_#4d4d4d] rounded-full'>
              <IoLogoPinterest />
            </NavLink>

          </div>

          <div className='border-2 border-white px-3 py-1.5 w-fit rounded-4xl absolute bottom-10 cursor-pointer'>
            <div className='animate-mouse bg-white px-0.5 py-1.5 rounded-lg mt-3 mb-3'>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
