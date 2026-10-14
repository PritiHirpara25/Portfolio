export default function Information() {
    return (

        <div className="space-y-7">
            <div className="text-center mb-8">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-bold mb-4">
                    Introduction
                </p>

                <h1 className="text-4xl sm:text-5xl font-bold text-white">
                    About Me<span className="text-cyan-400">.</span>
                </h1>

                <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mx-auto mt-5" />
            </div>

            <p className="w-full text-gray-400 text-lg leading-relaxed">
                I'm <span className="text-white font-semibold">Priti Hirapara</span>,
                a Frontend Developer with{' '}
                <span className="text-cyan-400 font-semibold">
                    2 years of experience
                </span>{' '}
                building responsive, scalable, and user-friendly web applications.
                I specialize in React.js, Next.js, and TypeScript, with a focus on
                reusable components, clean code, and seamless user experiences.
            </p>

            <p className="w-full text-gray-400 text-lg leading-relaxed">
                I work with Redux, Zustand, and REST APIs to build reliable web
                applications and improve performance. I also use Claude AI and
                Cursor AI to support development, debugging, and refactoring while
                maintaining code quality and best practices.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
                <a
                    href="/CV/Priti Frontend.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl
        bg-gradient-to-r from-cyan-400 to-violet-500
        px-7 py-4 font-bold text-slate-950
        transition-all duration-300
        hover:scale-[1.02] hover:shadow-lg
        hover:shadow-cyan-500/20"
                >
                    Download CV
                </a>
            </div>
        </div>

    );
}