import ExperienceCard from '../Components/ExperienceCard'
import Information from '../Components/Information'
import Skills from '../Components/Skills'

export default function About() {
  return (
    <section
      id="about"
      className="content-section"
    >
      {/* About and Skills */}
      <div className="content-container flex w-full flex-col items-stretch gap-12 md:gap-16">
        <div className="w-full">
          <Information />
        </div>

        <div className="w-full">
          <Skills />
        </div>
      </div>

      {/* Experience */}
      <div className="content-container mt-[var(--section-gap)]">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-bold mb-4">
            Career Journey
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            My Experience
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mx-auto mt-5" />

          <p className="text-gray-400 mt-5 leading-relaxed">
            My professional journey in frontend development, building
            responsive interfaces and delivering practical web solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-[7px] sm:left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent" />

          <div className="space-y-8">
            <ExperienceCard
              title="Frontend Developer"
              company="Codelab7"
              location="Surat"
              year="April 2025 – September 2026"
              description="Developed and maintained responsive web applications using React.js and Next.js. Built reusable UI components, managed application state, integrated backend functionality, and focused on performance, scalability, and user experience."
              technologies={[
                'React.js',
                'Next.js',
                'TypeScript',
                'Tailwind CSS',
                'Redux',
                'REST APIs',
              ]}
            />

            <ExperienceCard
              title="Frontend Developer"
              company="Hopiant"
              location="Surat"
              year="February 2024 – March 2025"
              description="Built responsive web interfaces using HTML, CSS, JavaScript, and React.js. Translated UI/UX designs into accessible layouts, developed reusable components, and collaborated with the team to deliver user-friendly web experiences."
              technologies={[
                'HTML',
                'CSS',
                'JavaScript',
                'TypeScript',
                'React.js',
                'Tailwind CSS',
                'Responsive Design',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
