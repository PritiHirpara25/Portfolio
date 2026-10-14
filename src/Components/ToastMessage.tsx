import { useEffect, useState } from "react";
import { BiSolidErrorCircle } from "react-icons/bi";
import { FaCircleCheck } from "react-icons/fa6";
import { FiX } from "react-icons/fi";

type Props = {
    type: "success" | "error";
    message: string;
};

export default function ToastMessage({ type, message }: Props) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const showTimer = setTimeout(() => setVisible(true), 50);
        const hideTimer = setTimeout(() => setVisible(false), 5000);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    const isSuccess = type === "success";

    return (
        <div
            role={isSuccess ? "status" : "alert"}
            aria-live={isSuccess ? "polite" : "assertive"}
            className={`fixed right-4 top-4 z-[100] flex w-[calc(100%-2rem)]
        max-w-sm items-start gap-3 overflow-hidden rounded-xl
        border bg-[#111827] p-4 shadow-2xl backdrop-blur-xl
        transition-all duration-300 ease-out sm:right-6 sm:top-6
        ${isSuccess
                    ? "border-emerald-400/30 shadow-emerald-950/30"
                    : "border-rose-400/30 shadow-rose-950/30"
                }
        ${visible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[120%] opacity-0"
                }`}
        >
            {/* Status icon */}
            <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center
          rounded-full ${isSuccess
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "bg-rose-400/10 text-rose-400"
                    }`}
            >
                {isSuccess ? (
                    <FaCircleCheck size={21} />
                ) : (
                    <BiSolidErrorCircle size={23} />
                )}
            </div>

            {/* Message */}
            <div className="min-w-0 flex-1 pt-0.5">
                <p
                    className={`text-sm font-semibold ${isSuccess ? "text-emerald-400" : "text-rose-400"
                        }`}
                >
                    {isSuccess ? "Success!" : "Something went wrong"}
                </p>

                <p className="mt-1 break-words text-sm leading-5 text-gray-300">
                    {message}
                </p>
            </div>

            {/* Close button */}
            <button
                type="button"
                aria-label="Dismiss notification"
                onClick={() => setVisible(false)}
                className="shrink-0 rounded-md p-1 text-gray-500
          transition-colors hover:bg-white/10 hover:text-white"
            >
                <FiX size={18} />
            </button>

            {/* Bottom timer indicator */}
            <div
                className={`absolute bottom-0 left-0 h-0.5 w-full origin-left
          animate-[toast-progress_5s_linear_forwards]
          ${isSuccess ? "bg-emerald-400" : "bg-rose-400"}`}
            />
        </div>
    );
}