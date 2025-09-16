import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import home from '../assets/home.jpg';
import BackgroundParticles from '../Components/background-animation';

export default function Home() {
  return (
    <div>
      <div style={{ backgroundImage: `url(${home})` }} className='bg-black relative h-screen bg-contain bg-[center_top_8rem] bg-no-repeat flex justify-center'>
        <div className="absolute inset-0 z-0">
          <BackgroundParticles />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative flex flex-col items-center justify-center text-center z-20">


          <div className='home-content'>
            <span className='text-2xl'>I Am</span>
            <p className='animated-content'>Frontend Developer</p>
          </div>

          <div className='flex justify-center gap-3 text-2xl mt-5'>
            <a href='https://www.linkedin.com/in/priti-hirpara-8a90aa267/'
              className='drop-shadow-[2px_2px_3px_#000000] shadow-[-1px_-1px_3px_#4d4d4d] rounded-full cursor-pointer'
              target='_blank'>
              <IoLogoLinkedin />
            </a>
            <a href='https://www.instagram.com/priti_.2506/'
              className='drop-shadow-[2px_2px_3px_#000000] shadow-[-1px_-1px_3px_#4d4d4d] rounded-full cursor-pointer'
              target='_blank'>
              <IoLogoInstagram />
            </a>
          </div>


          <a href='#about' className='border-2 border-white px-3 py-1.5 w-fit rounded-4xl absolute bottom-10 cursor-pointer'>
            <div className='animate-mouse bg-white px-0.5 py-1.5 rounded-lg mt-3 mb-3'></div>
          </a>

        </div>
      </div>

    </div>
  )
}
