import { FaDribbble } from "react-icons/fa";

interface Props {
    title: string;
    year: string;
    description: string;
}

export default function ExperienceCard({ title, year, description }: Props) {
    return (
        <div className="p-8 md:w-5/6 lg:w-4/6 xl:w-3/6 space-y-4 bg-[#212529] rounded-2xl shadow-[2px_2px_6px_#000000,-2px_-2px_6px_#4d4d4d]">
            <h3 className="text-2xl">{title}</h3>
            <div className="flex items-center gap-4">
                <span><FaDribbble className="text-[#ff0180]" /></span>
                <span>{year}</span>
            </div>
            <p className="text-[#bcbcbc] text-lg">{description}</p>
        </div>
    )
}