import React, { useEffect, useRef, useState } from 'react';
const skills = [
  {
    title: 'Frontend',
    tools: [
      {
        name: 'HTML',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
        description: 'Markup language for web pages',
      },
      {
        name: 'CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
        description: 'Style language for HTML documents',
      },
      {
        name: 'JavaScript',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        description: 'Programming language for the web',
      },
      {
        name: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        description: 'JavaScript library for UI development',
      },
      {
        name: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
        description: 'Utility-first CSS framework',
      },
      {
         name: 'Bootstrap',
         logo: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
          description: 'Responsive front-end framework',
      },

    ],
  },
  {
    title: 'Backend',
    tools: [
      {
        name: 'Flask',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg',
        description: 'Python micro web framework',
      },
    ],
  },
  {
    title: 'Database',
    tools: [
      {
        name: 'SQLite',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg',
        description: 'Lightweight SQL database engine',
      },
      {
        name: 'MySQL',
        logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg',
        description: 'Relational database management system',
      },
    ],
  },
  {
    title: 'DevOps',
    tools: [
      {
        name: 'Git',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg',
        description: 'Version control system',
      },
      {
        name: 'GitHub',
        logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        description: 'Code hosting and collaboration platform',
      },
      {
        name: 'Render',
        logo: '/render_logo_clearer.png',
        description: 'Cloud hosting for web apps',
      },
    ],
  },
  {
    title: 'Languages',
    tools: [
      {
        name: 'Python',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        description: 'High-level programming language',
      },
      {
        name: 'Java',
        logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
        description: 'Object-oriented programming language',
      },
      {
        name: 'C',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
        description: 'Procedural programming language',
      },
    ],
  },
];

const Skills = () => {
  const blocksRef = useRef([]);
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', isLargeScreen ? 'translate-x-full' : 'translate-y-4');
            entry.target.classList.add('opacity-100', 'translate-x-0', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    blocksRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      blocksRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, [isLargeScreen]);

  const handleMouseEnter = (e, text) => {
    setTooltip({ visible: true, text, x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = e => {
    setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, text: '', x: 0, y: 0 });
  };

  return (
    <section className="relative flex flex-col items-center gap-6 px-4 py-16">
      <h2 className="text-[3rem] font-semibold mb-4 lightfont">Technologies I use:</h2>
      {skills.map((skill, index) => (
        <div
          key={index}
          ref={el => (blocksRef.current[index] = el)}
          className={`w-full max-w-4xl min-h-[125px] flex flex-col md:flex-row items-center
                      bg-white rounded-xl shadow-lg p-4 opacity-0 transition-all duration-700 ease-out
                      ${isLargeScreen ? 'translate-x-full' : 'translate-y-4'}`}
        >
         <div
  className={`
    raleway font-bold text-[20px] text-[#7E6EAA] whitespace-nowrap

    flex items-center justify-center

    md:w-12 md:h-[125px]   /* fixed width and height for vertical title on md+ */
    md:transform md:-rotate-90 md:origin-center

    w-full h-auto  /* full width on small screens */
    mb-2 md:mb-0 
  `}
>
  {skill.title}
</div>


          <div className="flex-1 flex flex-wrap items-center gap-4 ml-0 md:ml-[4rem] mt-[3rem] md:mt-0">
            {skill.tools.map((tool, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 cursor-pointer"
                onMouseEnter={e => handleMouseEnter(e, tool.description)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img src={tool.logo} alt={`${tool.name} logo`} className="w-10 object-contain " />
                <div className="text-gray-700 text-[18px] raleway font-semibold">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {tooltip.visible && (
        <div
          className="fixed z-50 px-3 py-1 text-sm bg-black text-white rounded-md pointer-events-none shadow-lg transition-opacity duration-200"
          style={{
            left: tooltip.x + 15,
            top: tooltip.y + 15,
            whiteSpace: 'nowrap',
          }}
        >
          {tooltip.text}
        </div>
      )}
    </section>
  );
};

export default Skills;
