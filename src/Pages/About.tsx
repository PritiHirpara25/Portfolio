import home from '../assets/home.jpg'
import Skills from '../Components/skills'

export default function About() {
  return (
    <div id='about'>

      <div className="grid grid-cols-3 gap-8 py-24">
        <div className="flex flex-col justify-center">
          <h1 className='font-bold text-3xl mb-4'>ABOUT ME</h1>
          <div className='bg-white h-0.5 w-16 rounded-md'></div>
          <p className='text-gray-400 text-lg py-10'>My name is Jone Doe, I am web developer from Dhaka, Bangladesh. I have rich experience in web site design and building and customization, also I am good at Laravel.</p>
          <a href='/CV/Priti_Hirapara_CV.pdf' download={'Priti_Hirapara_CV.pdf'} target='_blank'>
            <button className="px-6 py-3 cursor-pointer bg-[#1e1e1e] rounded-md shadow-[-6px_-6px_12px_rgba(255,255,255,0.05),6px_6px_12px_rgba(0,0,0,0.6)]">
              Download CV
            </button>
          </a>
        </div>

        <div>
          <img src={home} alt='about image' className='rounded-2xl h-[500px] w-full' />
        </div>

        <div className="py-18">
          <Skills/>
        </div>
      </div>

    </div>
  )
}
