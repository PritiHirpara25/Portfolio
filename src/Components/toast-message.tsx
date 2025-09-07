import { useEffect, useState } from "react";
import { BiSolidErrorCircle } from "react-icons/bi";
import { FaCircleCheck } from "react-icons/fa6";

type Props = {
    type: "success" | "error",
    message: string;
}

export default function ToastMeassage({ type, message }: Props) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        const timer = setTimeout(() => setVisible(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fixed z-50 px-4 py-3 flex items-center gap-2 rounded-md shadow-lg top-5 right-5 transform transition-all duration-700 ease-in-out
        ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
         ${type === "success" ? "bg-green-500/70" : "bg-red-500/70"}`}>
            {type === "success" ?
                <FaCircleCheck /> :
                <BiSolidErrorCircle />}
            {message}
        </div>
    )
}