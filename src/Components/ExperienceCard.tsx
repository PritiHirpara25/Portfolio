
interface Props {
    title: string
    company: string
    location: string
    year: string
    description: string
    technologies: string[]
}

export default function ExperienceCard({
    title,
    company,
    location,
    year,
    description,
    technologies,
}: Props) {
    return (
        <article className="relative pl-8 sm:pl-12">
            {/* Timeline marker */}
            <div className="absolute left-0 top-6 flex h-4 w-4 sm:h-6 sm:w-6
        items-center justify-center rounded-full border border-cyan-400/50
        bg-[#0b1120] shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            >
                <div className="h-2 w-2 rounded-full bg-cyan-400" />
            </div>

            <div className="rounded-2xl border border-white/10
        bg-gradient-to-br from-white/[0.06] to-white/[0.02]
        p-5 sm:p-7 md:p-8
        transition-all duration-300
        hover:border-cyan-400/30 hover:shadow-xl
        hover:shadow-cyan-950/20"
            >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                            {title}
                        </h3>

                        <p className="mt-2 text-cyan-400 font-semibold">
                            {company}
                            <span className="text-gray-600 mx-2">/</span>
                            <span className="text-gray-400 font-normal">
                                {location}
                            </span>
                        </p>
                    </div>

                    <span className="inline-flex w-fit shrink-0 items-center rounded-full
            border border-violet-400/20 bg-violet-400/10
            px-3 py-1.5 text-xs sm:text-sm font-medium text-violet-300"
                    >
                        {year}
                    </span>
                </div>

                <p className="mt-5 text-gray-400 leading-7">
                    {description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-md bg-white/[0.05]
                px-2.5 py-1.5 text-xs font-medium text-gray-300
                border border-white/[0.06]"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    )
}
