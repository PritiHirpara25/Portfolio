export default function Information() {
    return (
        <div>
            <h1 className='font-bold text-3xl mb-4'>ABOUT ME</h1>
            <div className='bg-white h-0.5 w-16 rounded-md'></div>
            <p className='text-[#bcbcbc] text-lg py-10'>I’m Priti Hirapara, a passionate React Developer with hands-on experience in building responsive and user-friendly web applications. Skilled in React.js, TypeScript, Tailwind CSS, I enjoy crafting clean, efficient, and scalable code.</p>
            <a href='/CV/Priti Frontend.pdf' download={'Priti_Hirapara.pdf'} target='_blank'>
                <button className="px-6 py-3 cursor-pointer bg-[#212529] rounded-md shadow-[5px_5px_15px_#000000,-5px_-5px_15px_#4d4d4d]">
                    Download CV
                </button>
            </a>
        </div>
    )
}