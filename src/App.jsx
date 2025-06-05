import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    document.body.classList.remove('lighttheme', 'darktheme');
    document.body.classList.add(`${saved}theme`);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.remove('lighttheme', 'darktheme');
    document.body.classList.add(`${newTheme}theme`);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <section id="home">
       <Intro theme={theme} />

      </section>
      <div className="all">
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
      <section id="contact">
        <Contact theme={theme} />

      </section>
    </>
  );
}

export default App;
