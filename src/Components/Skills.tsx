const skillGroups = [
    {
        title: 'Frontend Development',
        description: 'Building responsive and reusable user interfaces',
        skills: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'TypeScript',
            'React.js',
            'Next.js',
            'Astro',
            'Tailwind CSS',
        ],
        accent: 'from-cyan-400 to-blue-500',
    },
    {
        title: 'State Management & Routing',
        description: 'Managing application data and navigation',
        skills: [
            'Redux Toolkit',
            'Zustand',
            'React Router',
        ],
        accent: 'from-violet-400 to-purple-500',
    },
    {
        title: 'API & UI Development',
        description: 'Connecting services and creating polished interfaces',
        skills: [
            'REST APIs',
            'Axios',
            'Formik',
            'shadcn/ui',
            'Material UI',
        ],
        accent: 'from-pink-400 to-rose-500',
    },
    {
        title: 'Tools & Optimization',
        description: 'Writing maintainable and performant applications',
        skills: [
            'Git',
            'Claude AI',
            'Cursor AI',
            'Lazy Loading',
            'Code Splitting',
            'Memoization',
        ],
        accent: 'from-emerald-400 to-cyan-500',
    },
]

export default function Skills() {
    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-bold mb-4">
                    What I Work With
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    My Skills<span className="text-cyan-400">.</span>
                </h2>

                <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mx-auto mt-5" />

                <p className="text-gray-400 mt-4 leading-relaxed">
                    Technologies and tools I use to build modern, maintainable,
                    and high-performance web applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillGroups.map((group) => (
                    <div
                        key={group.title}
                        className="group relative overflow-hidden rounded-2xl
              border border-white/10 bg-white/[0.03] p-5
              transition-all duration-300
              hover:border-cyan-400/30 hover:bg-white/[0.05]"
                    >
                        <div
                            className={`absolute left-0 top-5 bottom-5 w-1 rounded-r-full
                bg-gradient-to-b ${group.accent}`}
                        />

                        <div className="pl-3">
                            <h3 className="text-lg font-semibold text-white">
                                {group.title}
                            </h3>

                            <p className="text-sm text-gray-500 mt-1 mb-4">
                                {group.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-lg border border-white/10
                      bg-black/20 px-3 py-1.5 text-sm text-gray-300
                      transition-colors duration-200
                      hover:border-cyan-400/40 hover:text-cyan-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
