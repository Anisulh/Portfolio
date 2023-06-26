import { ChangeEvent, RefObject, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { m } from "framer-motion";
import Modal from "./Modal";

interface contactProps {
  contactRef: RefObject<HTMLDivElement> | null;
}

function Contact({ contactRef }: contactProps) {
  const form = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const validateEmail = (email: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    } else {
      alert("You have entered an invalid email address!");
      return false;
    }
  };

  const onFormSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current == null) return;
    if (validateEmail(email)) {
      try {
        const result = await emailjs.sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY
        );
        setOpen(true);
        console.log(result);
      } catch (error) {
        alert("Oh no, something went wrong!");
        console.log(error);
      }
    }
  };

  return (
    <m.div
      className="text-gray-100 mx-auto max-w-7xl mb-10 mt-40 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div ref={contactRef} className="mx-10">
        <h4 className="text-3xl mb-10 font-medium ">Contact</h4>
        <form ref={form} onSubmit={onFormSubmit} className="max-w-2xl">
          <div>
            <input
              type="text"
              name="user_name"
              className="border rounded-md bg-gray-100 text-gray-900 text-lg w-full mb-5 py-1 px-5"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="text"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md bg-gray-100 text-gray-900 text-lg w-full mb-5 py-1 px-5"
              placeholder="Email"
            />
          </div>
          <div>
            <textarea
              name="message"
              className="border rounded-md bg-gray-100 text-gray-900 text-lg w-full mb-5 py-1 px-5"
              placeholder="Message"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="flex items-center justify-center rounded-md border border-transparent bg-sky-500 px-3 py-1 text-base font-medium text-white hover:bg-sky-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </m.div>
  );
}

export default Contact;
