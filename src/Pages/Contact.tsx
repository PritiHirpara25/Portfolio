import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import ContactForm from "../Components/contact-form";

export default function Contact() {
  return (
    <div className='px-52'>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-4xl">Contact Me</h3>
        <p className="text-[#bcbcbc] text-lg text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>

      <div className="flex justify-evenly py-16">
        <div className="flex flex-col items-center">
          <FaMobileAlt className="text-5xl" />
          <span className="text-lg font-medium pt-3">Call Me</span>
          <span className="text-[#bcbcbc] text-lg">7383412398</span>
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
