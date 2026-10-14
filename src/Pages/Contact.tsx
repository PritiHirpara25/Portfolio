import { FaMobileAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import ContactForm from "../Components/ContactForm";

export default function Contact() {
  const phone = import.meta.env.VITE_CONTACT_PHONE?.trim();
  const email = import.meta.env.VITE_CONTACT_EMAIL?.trim();

  return (
    <section
      id="contact"
      className="content-section"
    >
      {/* Section heading */}
      <div className="content-container mb-14 flex flex-col items-center gap-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Get In Touch
        </span>

        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />

        <p className="text-base leading-7 text-gray-400 sm:text-lg">
          Have a project in mind or an exciting opportunity?
          I'd love to hear from you. Let's connect and build
          something great together.
        </p>
      </div>

      {/* Contact content */}
      <div className="content-container mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        {/* Contact information */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Let's talk
            </h3>
            <p className="mt-2 leading-7 text-gray-400">
              Feel free to reach out for job opportunities,
              collaborations, or any frontend development work.
            </p>
          </div>

          {/* Phone card */}
          {phone && (
            <a
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              className="group flex items-center gap-4 rounded-2xl
              border border-white/10 bg-[#111827] p-5
              transition-all duration-300
              hover:-translate-y-1 hover:border-cyan-400/40
              hover:bg-[#151e2d]"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center
              rounded-xl border border-cyan-400/20 bg-cyan-400/10
              text-2xl text-cyan-400"
              >
                <FaMobileAlt />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm text-gray-400">Call Me</p>
                <p className="mt-1 break-all font-semibold text-white">
                  {phone}
                </p>
              </div>

              <FiArrowUpRight
                size={20}
                className="shrink-0 text-gray-500 transition-colors
                group-hover:text-cyan-400"
              />
            </a>
          )}

          {/* Email card */}
          {email && (
            <a
              href={`mailto:${email}`}
              className="group flex items-center gap-4 rounded-2xl
              border border-white/10 bg-[#111827] p-5
              transition-all duration-300
              hover:-translate-y-1 hover:border-cyan-400/40
              hover:bg-[#151e2d]"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center
              rounded-xl border border-violet-400/20 bg-violet-400/10
              text-3xl text-violet-400"
              >
                <MdOutlineMail />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm text-gray-400">Email Me</p>
                <p className="mt-1 break-all font-semibold text-white">
                  {email}
                </p>
              </div>

              <FiArrowUpRight
                size={20}
                className="shrink-0 text-gray-500 transition-colors
                group-hover:text-cyan-400"
              />
            </a>
          )}

          <div className="rounded-2xl border border-cyan-400/10
            bg-gradient-to-br from-cyan-950/40 to-violet-950/30 p-5"
          >
            <p className="font-semibold text-white">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Open to opportunities
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              I'm interested in frontend and React developer roles
              where I can contribute, learn, and grow.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-2xl border border-white/10
          bg-[#111827] p-5 shadow-xl shadow-black/10 sm:p-8"
        >
          <div className="mb-7">
            <h3 className="text-2xl font-bold text-white">
              Send me a message
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Fill out the form below, and I'll get back to you.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}