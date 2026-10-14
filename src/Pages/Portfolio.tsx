
import PortfolioCard from "../Components/PortfolioCard";

const projects = [
  {
    number: "01",
    title: "Passbuk.com",
    category: "Accounting Software",
    description:
      "A web-based accounting application featuring ledger management, expense tracking, invoicing, financial reporting, and AI-powered transaction categorization.",
    technologies: [
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "REST API",
    ],
    liveUrl: "https://passbuk.com",
  },
  {
    number: "02",
    title: "KundliGPT",
    category: "AI Astrology Platform",
    description:
      "An AI-powered astrology platform built with Astro and React, featuring responsive interfaces, reusable components, and REST API integration.",
    technologies: [
      "Astro",
      "React.js",
      "Tailwind CSS",
      "REST API",
    ],
    liveUrl: "https://kundligpt.com/"
  },
  {
    number: "03",
    title: "Diahearts",
    category: "Jewellery eCommerce",
    description:
      "A jewellery catalogue and eCommerce platform with responsive product displays, reusable UI components, and API-driven application features.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "REST API",
      "Git",
    ],
    liveUrl: "https://diahearts.com/"
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="content-section"
    >
      {/* Section heading */}
      <div className="content-container flex flex-col items-center text-center gap-5 mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-bold">
          Selected Projects
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          My Works<span className="text-cyan-400">.</span>
        </h2>

        <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />

        <p className="w-full text-gray-400 text-base sm:text-lg leading-relaxed">
          Explore the projects I've worked on, from accounting
          software and AI-powered platforms to eCommerce
          experiences. Each project reflects my focus on
          responsive design, clean code, and user experience.
        </p>
      </div>

      {/* Project cards */}
      <div className="content-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project) => (
          <PortfolioCard
            key={project.number}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
