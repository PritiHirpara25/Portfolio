import type React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { FiSend } from "react-icons/fi";
import ToastMessage from "./ToastMessage";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const [showToast, setShowToast] = useState<{
        type: "success" | "error";
        message: string;
    } | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setShowToast(null);

        try {
            await emailjs.send(
                "service_lhpq0ne",
                "template_h7zw83w",
                formData,
                "pTTxxsT4nL0wfYz3c"
            );

            setShowToast({
                type: "success",
                message: "Message sent successfully!",
            });

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch {
            setShowToast({
                type: "error",
                message: "Failed to send message. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "w-full rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3.5 " +
        "text-sm text-white placeholder:text-gray-500 outline-none " +
        "transition-all duration-200 focus:border-cyan-400/60 " +
        "focus:ring-2 focus:ring-cyan-400/10";

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {showToast && (
                <ToastMessage
                    type={showToast.type}
                    message={showToast.message}
                />
            )}

            {/* Name and email */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="contact-name"
                        className="mb-2 block text-sm font-medium text-gray-300"
                    >
                        Your Name <span className="text-cyan-400">*</span>
                    </label>

                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        className={inputClass}
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label
                        htmlFor="contact-email"
                        className="mb-2 block text-sm font-medium text-gray-300"
                    >
                        Your Email <span className="text-cyan-400">*</span>
                    </label>

                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className={inputClass}
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Subject */}
            <div>
                <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-medium text-gray-300"
                >
                    Subject <span className="text-cyan-400">*</span>
                </label>

                <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    className={inputClass}
                    required
                    placeholder="What would you like to discuss?"
                    value={formData.subject}
                    onChange={handleChange}
                />
            </div>

            {/* Message */}
            <div>
                <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-gray-300"
                >
                    Message
                </label>

                <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    className={`${inputClass} resize - y`}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2
                rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600
                px-6 py-3.5 font-semibold text-white
            shadow-lg shadow-cyan-950/30
            transition-all duration-300
            hover:from-cyan-400 hover:to-blue-500
            hover:shadow-cyan-900/40
            disabled:cursor-not-allowed disabled:opacity-60
            sm:ml-auto sm:flex sm:w-auto"
            >
                {loading ? (
                    <>
                        <span className="h-5 w-5 animate-spin rounded-full
              border-2 border-white/30 border-t-white"
                        />
                        Sending...
                    </>
                ) : (
                    <>
                        <FiSend size={17} />
                        Send Message
                    </>
                )}
            </button>
        </form >
    );
}