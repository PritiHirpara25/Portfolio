import type React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import ToastMeassage from "./toast-message";

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send(
            "service_lhpq0ne",
            "template_h7zw83w",
            formData,
            "pTTxxsT4nL0wfYz3c"
        ).then(() => {
            setShowToast({ type: "success", message: "Message sent successfully" });
            setFormData({ name: "", email: "", subject: "", message: "" });
            setLoading(false);
        }).catch(() => {
            setShowToast({ type: "error", message: "Failes to send" });
            setLoading(false);
        })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">

            {showToast && <ToastMeassage type={showToast.type} message={showToast.message} />}
            <div className="flex gap-8">
                <input name="name"
                    type="text"
                    className="form-input w-1/2"
                    required
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange} />
                <input name="email"
                    type="email"
                    className="form-input w-1/2"
                    required
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange} />
            </div>

            <input name="subject"
                type="text"
                className="form-input w-full"
                required
                placeholder="Subject*"
                value={formData.subject}
                onChange={handleChange} />
            <textarea name="message"
                className="form-input w-full"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange} />

            <button className="px-7 py-4 flex items-center gap-2 justify-self-end cursor-pointer bg-[#131419] rounded-md shadow-[5px_5px_15px_#000000,-5px_-5px_15px_#4d4d4d] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}>
                {loading && <span className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></span>}
                {loading ? "Sending..." : "Send Message"}
            </button>
        </form>
    )
}