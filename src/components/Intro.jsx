import React from 'react';
import mypic from '../assets/mypic3.jpg';
import gitpic from '../assets/githubpic.jpg';
import resume from '../assets/resume.pdf';
import '../App.css';

const Intro = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
<div
  className={`${theme}theme w-full min-h-[75vh] flex flex-col md:flex-row justify-around items-center px-4 py-6 md:py-0`}
>

   <div className="left mx-auto md:ml-6 border-2 rounded-[20px] border-[#6a5989] w-full max-w-[90vw] md:max-w-[40vw] mb-8 md:mb-0">

        <div
          className={`rounded-[17px] p-4 raleway transition-all duration-300 ${
            isDark ? 'bg-[#1a1a2e] text-[#e0dffb]' : 'bg-[#FDFBD4] text-black'
          } h-auto md:h-[360px]  `}
        >

          <div className="font-semibold text-[20px]">
            Hi, I’m Sritama — a passionate web developer who loves crafting beautiful, responsive, and user-focused websites.
          </div>
          <br />
          With a keen eye for design and a deep curiosity for emerging technologies, I enjoy turning ideas into intuitive digital experiences. Whether it’s building sleek frontends or exploring new frameworks, I’m always eager to push the boundaries of what’s possible on the web.
          <div className="text-[18px] mt-2">
            "Bringing creativity and code together to build elegant web experiences."
          </div>

          <a
            href={resume}
            download="Sritama_Resume.pdf"
            className={`mt-6 mb-6 inline-block px-6 py-2 rounded-lg transition font-semibold ${
              isDark
                ? 'bg-[#A993FF] text-[#1a1a2e] hover:bg-[#BFAAFF]'
                : 'bg-[#3a054f] text-white hover:bg-purple-700'
            }`}
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Hide picture on small screens */}
      <div className="right perspective mr-[50px] hidden md:block">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={gitpic}
                alt="Image Front"
                className="w-[100px] rounded-[50%] border-[#6a5989] border-2 shadow-custom ml-6"
              />
            </div>
            <div className="flip-card-back">
              <img
                src={mypic}
                alt="Image Back"
                className="w-[100px] rounded-[50%] border-[#6a5989] border-2 shadow-custom ml-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
