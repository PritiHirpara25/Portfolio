import type React from "react";
import { useState } from "react";

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">

            <div className="flex gap-8">
                <input name="name" className="form-input w-1/2" placeholder="Name*" onChange={handleChange} />
                <input name="email" className="form-input w-1/2" placeholder="Email*" onChange={handleChange} />
            </div>

            <input name="subject" className="form-input w-full" placeholder="Subject*" onChange={handleChange} />
            <textarea name="message" className="form-input w-full" placeholder="Message" onChange={handleChange} />

            <button className="px-7 py-4 flex justify-self-end cursor-pointer bg-[#131419] rounded-md shadow-[5px_5px_15px_#000000,-5px_-5px_15px_#4d4d4d]">
                Send Message
            </button>
        </form>
    )
}