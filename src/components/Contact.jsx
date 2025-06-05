import React, { useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = ({ theme }) => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ct28and',
        'template_zo7pky4',
        form.current,
        'mlm5DEJ_sD-0h4m4i'
      )
      .then(
        () => {
          alert('Message sent!');
          form.current.reset();
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('Something went wrong. Please try again later.');
        }
      );
  };

  const isDark = theme === 'dark';

  return (
    <section
      id="contact"
      className={`${theme}theme py-16 px-6 transition-colors duration-500`}
    >
      <h2 className={`text-[3rem] font-bold text-center mb-8 ${isDark ? 'text-[#e0dffb]' : 'lightfont'}`}>
        Contact Me
      </h2>
      <p className={`text-center mb-12 max-w-xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        I'd love to hear from you! Whether you have a question, project idea, or just want to say hi — drop me a message.
      </p>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className={`max-w-xl mx-auto p-6 rounded-xl shadow-md space-y-4 transition-colors duration-500
          ${isDark ? 'bg-[#1a1a2e] border border-[#9381FF]' : 'bg-white border border-purple-300'}`}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={`w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 transition
            ${isDark 
              ? 'bg-[#2a2a44] border border-[#9381FF] text-[#e0dffb] placeholder:text-gray-400 focus:ring-[#9381FF]' 
              : 'border border-purple-300 text-black placeholder:text-gray-500 focus:ring-purple-500'}`}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={`w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 transition
            ${isDark 
              ? 'bg-[#2a2a44] border border-[#9381FF] text-[#e0dffb] placeholder:text-gray-400 focus:ring-[#9381FF]' 
              : 'border border-purple-300 text-black placeholder:text-gray-500 focus:ring-purple-500'}`}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className={`w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 transition
            ${isDark 
              ? 'bg-[#2a2a44] border border-[#9381FF] text-[#e0dffb] placeholder:text-gray-400 focus:ring-[#9381FF]' 
              : 'border border-purple-300 text-black placeholder:text-gray-500 focus:ring-purple-500'}`}
          required
        ></textarea>
        <button
          type="submit"
          className={`font-semibold py-2 px-6 rounded-lg transition cursor-pointer
            ${isDark ? 'bg-[#A993FF] text-[#1a1a2e] hover:bg-[#BFAAFF]' : 'bg-[#3a054f] text-white hover:bg-purple-700'}`}
        >
          Send Message
        </button>
      </form>

      <div className={`flex justify-center items-center gap-6 mt-10 text-2xl transition-colors duration-500
        ${isDark ? 'text-[#BFAAFF]' : 'text-purple-900'}`}
      >
        <a href="https://github.com/s-125" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700 transition">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sritama-mitra-baa51a290/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700 transition">
          <FaLinkedin />
        </a>
        <a href="mailto:sritama813@gmail.com" className="hover:text-purple-700 transition">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
