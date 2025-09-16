import PortfolioCard from "../Components/portfolio-card";

export default function Portfolio() {
  return (
    <div className='px-5 sm:px-12 md:px-16 lg:px-20 xl:px-40 2xl:px-52'>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-4xl">My Works</h3>
        <p className="text-[#bcbcbc] text-lg text-center w-5/6">Take a look at my work! These projects represent my passion for coding, problem-solving, and creating digital experiences with React technologies.</p>
      </div>
      <div className="flex justify-center mt-12">
        <PortfolioCard />
      </div>
    </div>
  )
}
