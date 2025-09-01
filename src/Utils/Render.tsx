type Props = {
    isActive: boolean;
}

export default function getNavLinkClass({ isActive }: Props) {
    return isActive ? 'text-[#ff0180] font-medium transition duration-300' : "hover:text-[#ff0180] font-medium transition duration-300"
}