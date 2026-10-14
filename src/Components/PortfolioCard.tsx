import { FiExternalLink } from "react-icons/fi";

interface Props {
    number: string;
    title: string;
    category: string;
    description: string;
    technologies: string[];
    liveUrl?: string;
}

export default function PortfolioCard({
    number,
    title,
    category,
    description,
    technologies,
    liveUrl,
}: Props) {
    const initial = title.charAt(0);

    return (
        <article
            className="group relative flex h-full flex-col overflow-hidden
        rounded-2xl border border-white/10 bg-[#111827]
        transition-all duration-300
        hover:-translate-y-1.5 hover:border-cyan-400/40
        hover:shadow-xl hover:shadow-cyan-950/30"
        >
            {/* Compact project header */}
            <div
                className="relative overflow-hidden border-b border-white/10
          bg-gradient-to-br from-cyan-950/70 to-violet-950/70 p-5"
            >
                <div
                    className="absolute -right-8 -top-12 h-32 w-32 rounded-full
            bg-cyan-400/10 blur-3xl transition-colors
            group-hover:bg-cyan-400/20"
                />

                <div className="relative flex items-center gap-4">
                    {/* Project initial */}
                    <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center
              rounded-xl border border-white/10 bg-white/[0.07]
              text-xl font-bold text-cyan-300"
                    >
                        {initial}
                    </div>

                    {/* Project name and category */}
                    <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-semibold uppercase
              tracking-[0.2em] text-cyan-300"
                        >
                            Project {number}
                        </span>

                        <p className="mt-1 text-sm font-medium text-gray-300">
                            {category}
                        </p>
                    </div>

                    {/* Small project number badge */}
                    <span
                        className="shrink-0 rounded-full border border-white/10
              bg-black/20 px-2.5 py-1 text-[10px] text-gray-400"
                    >
                        #{number}
                    </span>
                </div>
            </div>

            {/* Project information */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3
                    className="text-xl font-bold text-white transition-colors
            group-hover:text-cyan-300"
                >
                    {title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
                    {description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-lg border border-white/10
                bg-white/[0.04] px-2.5 py-1.5
                text-xs font-medium text-gray-300"
                        >
                            {technology}
                        </span>
                    ))}
                </div>

                {/* Live Demo only */}
                {liveUrl && (
                    <div className="mt-5 border-t border-white/10 pt-4">
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-2
                text-sm font-semibold text-cyan-400
                transition-colors hover:text-cyan-300"
                        >
                            <span>Live Demo</span>
                            <FiExternalLink
                                size={16}
                                className="transition-transform duration-200
                  group-hover/link:translate-x-0.5
                  group-hover/link:-translate-y-0.5"
                            />
                        </a>
                    </div>
                )}
            </div>
        </article>
    );
}
