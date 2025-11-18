import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EducationLanguages from './components/EducationLanguages';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <EducationLanguages />
      </main>
      <Contact />
      <ChatWidget />
    </div>
  );
}

export default App;