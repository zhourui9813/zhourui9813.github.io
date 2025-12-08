import React from 'react';
import { Profile } from '../types';
import { GithubIcon, MailIcon, ScholarIcon } from './Icons';

interface HeroProps {
  profile: Profile;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center mb-16 pt-24">
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center">
        
        {/* Text Content */}
        <div className="flex-1 space-y-8 animate-fade-in-up text-center md:text-left">
          <div className="space-y-4">
            {/* Direct Name Display - Solid Black */}
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-black dark:text-white leading-none">
              {profile.name}
            </h1>
            
            {/* Subtitle with Gradient Effects */}
            <p className="text-2xl md:text-3xl font-serif italic">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-200">
                {profile.title}
              </span>
              <span className="not-italic text-slate-300 dark:text-slate-600 px-3">/</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-500 dark:from-amber-400 dark:to-amber-200">
                {profile.affiliation}
              </span>
            </p>
          </div>

          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl font-light mx-auto md:mx-0">
            {profile.bio}
          </p>
          
          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {profile.interests.map((interest) => (
                <span 
                  key={interest} 
                  className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-blue-50/50 dark:bg-slate-800/50 border border-blue-100 dark:border-slate-700 text-blue-700 dark:text-blue-200 backdrop-blur-sm"
                >
                  {interest}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              {/* Primary CTA */}
              <a 
                href="mailto:zhourui9813@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg shadow-blue-500/20"
              >
                <MailIcon className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              {/* Social Links */}
              <div className="flex gap-2">
                {profile.links.filter(l => l.type !== 'email').map((link) => {
                  const Icon = link.type === 'github' ? GithubIcon : ScholarIcon;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:-translate-y-1 hover:shadow-md"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Visual - Blue & Amber 3D */}
        <div className="relative group shrink-0 animate-fade-in [animation-delay:200ms] perspective-1000">
           {/* Glow behind - Amber/Blue */}
           <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/30 to-amber-500/30 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition duration-1000"></div>
           
           {/* 3D Stacked Card Container */}
           <div className="relative w-48 h-48 md:w-56 md:h-56 transform-style-3d transition-transform duration-500 group-hover:rotate-y-12 group-hover:rotate-x-6">
              
              {/* Back Layer (Depth) */}
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-[2rem] transform translate-z-[-20px] shadow-xl"></div>
              
              {/* Middle Layer (Color Accent - Amber) */}
              <div className="absolute inset-2 bg-gradient-to-br from-blue-100 to-amber-100 dark:from-blue-900/40 dark:to-amber-900/40 rounded-[1.8rem] transform translate-z-[-10px]"></div>

              {/* Front Layer (Blue Glass) */}
              <div className="absolute inset-0 bg-white/10 dark:bg-slate-900/20 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-[2rem] flex items-center justify-center shadow-2xl overflow-hidden transform translate-z-[10px]">
                 
                 {/* Inner geometric shine */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-blue-400/20 to-transparent rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
                 
                 <span className="relative font-serif text-6xl md:text-7xl font-bold text-slate-800 dark:text-slate-200 opacity-90 mix-blend-overlay dark:mix-blend-normal">
                   RZ
                 </span>
              </div>

              {/* Floating Element - Amber Accent */}
              <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-100 dark:border-slate-700 text-[10px] font-bold uppercase tracking-widest text-amber-500 transform translate-z-[30px] animate-bounce-slow">
                 2025
              </div>

           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;