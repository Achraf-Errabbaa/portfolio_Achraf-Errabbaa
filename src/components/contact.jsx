import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j3r3yfn",  // Make sure these are inside quotes
        "template_0933cdb",
        form.current,
        "yKfwU3s-KJ7qV2QrS"
      )
      .then(
        (result) => {
          console.log("Success!", result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log("Failed...", error.text);
          alert("Message Failed to Send.");
        }
      );

    e.target.reset();
  };

  return (
    <div id="contact" className="border-b border-neutral-900 pb-20 px-4 sm:px-0">
      <h1 className="my-10 text-center text-4xl font-bold text-white">
        Get in <span className="text-neutral-500">Touch</span>
      </h1>
      <form ref={form} onSubmit={sendEmail} className="mt-8">
        <div className="flex flex-col items-center space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="px-4 py-3 bg-gray-800 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 w-full max-w-md shadow-md"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="px-4 py-3 bg-gray-800 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 w-full max-w-md shadow-md"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="px-4 py-3 bg-gray-800 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 w-full max-w-md shadow-md"
            rows="6"
          />
          <button
            type="submit"
            className="flex items-center bg-blue-500 gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact; 
