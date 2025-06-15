type Props = {
    isActive:boolean;
}

export default function getNavLinkClass({isActive}:Props){
    return isActive ? 'text-pink-600 font-medium transition duration-300' : "hover:text-pink-600 font-medium transition duration-300" 
}