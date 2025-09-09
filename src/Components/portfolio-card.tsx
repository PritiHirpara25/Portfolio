import portfolioimg from '../assets/image.png'

export default function PortfolioCard() {
    return (
        <div className='size-80 relative group overflow-hidden'>
            <img src={portfolioimg} className='size-full' />
            <div className='absolute bg-black/80 bottom-0 left-0 w-full p-4 translate-y-full transition-transform group-hover:translate-y-0 duration-500'>
                <h3 className="text-lg font-bold cursor-pointer">Tinder App</h3>
                <p className="text-sm">React | Tailwind | Node.js</p>
            </div>
        </div>
    )
}