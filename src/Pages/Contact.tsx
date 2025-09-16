import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import ContactForm from "../Components/contact-form";

export default function Contact() {
  return (
    <div className='px-5 sm:px-12 md:px-16 lg:px-20 xl:px-40 2xl:px-52'>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-4xl">Contact Me</h3>
        <p className="text-[#bcbcbc] text-lg text-center w-5/6">I’m always open to discussing new opportunities, collaborations, or exciting projects.Feel free to reach out, and I’ll get back to you as soon as possible!</p>
      </div>

      <div className="sm:flex justify-evenly space-y-10 py-10 sm:py-16">
        <div className="flex flex-col items-center">
          <FaMobileAlt className="text-5xl" />
          <span className="text-lg font-medium pt-3">Call Me</span>
          <span className="text-[#bcbcbc] text-lg">+91 7383412398</span>
        </div>

        <div className="flex flex-col items-center">
          <MdOutlineMail className="text-5xl" />
          <span className="text-lg font-medium pt-3">Email Me</span>
          <span className="text-[#bcbcbc] text-lg">pritihirpara256@gmail.com</span>
        </div>
      </div>

      <ContactForm />

    </div>
  )
}
