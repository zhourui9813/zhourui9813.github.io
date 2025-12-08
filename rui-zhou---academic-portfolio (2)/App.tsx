import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Timeline from './components/Timeline';
import { PROFILE, PROJECTS, EXPERIENCE, AWARDS } from './constants';
import { SunIcon, MoonIcon } from './components/Icons';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update HTML class for Tailwind dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen relative overflow-x-hidden transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* 3D Ambient Lighting Effects (Blue & Amber) */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden -z-10 perspective-1000">
        {/* Top Right Light (Blue) */}
        <div className={`absolute -top-[10%] -right-[5%] w-[60vw] h-[60vw] rounded-full blur-[100px] opacity-40 animate-pulse transition-colors duration-700 ${darkMode ? 'bg-blue-900/40' : 'bg-blue-300/30'} translate-z-0`}></div>
        
        {/* Bottom Left Light (Amber) */}
        <div className={`absolute top-[40%] -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-30 transition-colors duration-700 ${darkMode ? 'bg-amber-900/20' : 'bg-amber-200/40'} translate-z-0`}></div>
        
        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>
      </div>

      {/* Navigation / Header */}
      <header className={`fixed top-0 z-50 w-full transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${scrolled ? 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 py-3 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <div className={`font-serif font-bold text-xl tracking-tight transition-all duration-500 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
            <span className="text-black dark:text-white">
              Rui Zhou
            </span>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="group relative p-2.5 rounded-full overflow-hidden bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 shadow-sm hover:shadow-md"
            aria-label="Toggle dark mode"
          >
             <div className="relative z-10 text-slate-600 dark:text-slate-400 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
               {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
             </div>
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-32">
        <Hero profile={PROFILE} />

        {/* Education & Experience Section */}
        <section id="experience" className="animate-fade-in-up [animation-delay:300ms] mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-slate-50">
              Education & Experience
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800"></div>
          </div>
          
          <Timeline items={EXPERIENCE} />
        </section>

        {/* Research Section */}
        <section id="research" className="animate-fade-in-up [animation-delay:400ms] mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-slate-50">
              Selected Research
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800"></div>
          </div>

          <div className="flex flex-col gap-6">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="animate-fade-in-up [animation-delay:500ms]">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-slate-50">
              Honors & Awards
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800"></div>
          </div>

          <div className="space-y-5">
            {AWARDS.map((award, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8">
                 <div className="shrink-0 w-24 font-mono text-sm text-slate-400 dark:text-slate-500">
                    {award.date}
                 </div>
                 <div className="font-serif text-lg text-slate-800 dark:text-slate-200 leading-snug">
                    {award.title}
                 </div>
              </div>
            ))}
          </div>
          
          {/* Footer Note */}
          <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800/50 text-center">
             <p className="font-serif italic text-slate-400 dark:text-slate-600 text-lg">
               Designing the future of intelligent robots.
             </p>
             <p className="mt-4 text-xs text-slate-300 dark:text-slate-700 uppercase tracking-widest">
               © {new Date().getFullYear()} Rui Zhou
             </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;