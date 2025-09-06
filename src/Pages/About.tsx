import aboutImage from '../assets/aboutimage.jpg'
import ExperienceCard from '../Components/experience-card'
import Information from '../Components/information'
import Skills from '../Components/skills'

export default function About() {
  return (
    <div id='about' className='px-52'>

      <div className="grid grid-cols-3 gap-8 py-24">
        <div className="flex flex-col justify-center">
          <Information />
        </div>

        <div>
          <img src={aboutImage} alt='about image' className='rounded-2xl h-[500px] w-full object-cover' />
        </div>

        <div className="py-18">
          <Skills />
        </div>
      </div>

      <div className='space-y-12 flex flex-col items-center'>
        <h1 className='text-4xl'>My Experience</h1>
        <ExperienceCard title='Web Developer' year='April 2024 - Present' description='Developed and maintained responsive web applications using React.js, TypeScript, and Tailwind CSS, ensuring smooth user experiences.' />
      </div>

    </div>
  )
}
