import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { HiDownload } from "react-icons/hi";
import BackgroundParticles from '../Components/BackgroundAnimation';

export default function Home() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0A0A] px-4 sm:px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <BackgroundParticles />
      </div>
      <div className="glow-bg glow-cyan"></div>
      <div className="glow-bg glow-violet"></div>

      <div className="relative z-20 max-w-5xl w-full flex flex-col items-center text-center py-24 sm:py-16 md:py-28">

        {/* Availability Badge */}
        <div className="mb-7 sm:mb-8 flex max-w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md animate-float sm:px-4">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-medium leading-tight tracking-wide text-cyan-50/80 sm:text-sm">
            Available for new opportunities
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-5 text-[clamp(2rem,9.5vw,3rem)] font-bold leading-[1.1] tracking-tight text-white sm:mb-6 sm:text-5xl md:text-7xl lg:text-8xl">
          Crafting Scalable <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
            Digital Experiences
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:mb-10 sm:text-lg md:text-xl">
          Frontend Specialist focused on <span className="text-white">Next.js</span>, <span className="text-white">Inertia.js</span>, and <span className="text-white">AI-Driven Development</span>. Currently building high-impact web apps at Codelab7.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <a
            href="#portfolio"
            className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            View My Work
          </a>
          <a
            href="/CV/Priti Frontend.pdf"
            target="_blank"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
          >
            <HiDownload className="text-xl" />
            Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 items-center">
          {[
            { icon: <IoLogoLinkedin />, href: "https://www.linkedin.com/in/priti-hirpara-8a90aa267/" },
            { icon: <IoLogoGithub />, href: "https://github.com/PritiHirpara25" },
            { icon: <IoLogoInstagram />, href: "https://www.instagram.com/priti_.2506/" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              className="text-2xl text-gray-400 hover:text-cyan-400 transition-colors duration-300 glass-card p-3 rounded-full"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
