import React from 'react';
import { ExperienceItem } from '../types';

interface TimelineProps {
  items: ExperienceItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative pl-8 md:pl-0">
       {/* Central Line (hidden on mobile, visible on md) */}
       <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-400/30 to-blue-500/0 hidden md:block md:left-1/2 md:-ml-[1px]"></div>
       
       {/* Mobile Line */}
       <div className="absolute left-2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-400/30 to-blue-500/0 md:hidden"></div>

       <div className="flex flex-col gap-12">
         {items.map((item, index) => (
           <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Dot on Line */}
              <div className="absolute left-2 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-slate-50 dark:bg-slate-900 border-[3px] border-blue-500 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

              {/* Date (Opposite side) */}
              <div className={`w-full md:w-1/2 text-left md:text-center ${index % 2 === 0 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'} pl-8 md:pl-0`}>
                 <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                    {item.date}
                 </span>
              </div>

              {/* Card */}
              <div className="w-full md:w-1/2 group perspective-1000">
                 <div className="relative p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/50 dark:hover:border-blue-500/30">
                    {/* Corner Accent */}
                    <div className="absolute -top-1 -right-1 w-12 h-12 bg-gradient-to-br from-amber-300/20 to-transparent rounded-tr-2xl -z-10 group-hover:scale-110 transition-transform"></div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{item.institution}</h3>
                    <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">{item.title}</div>
                    {item.description && (
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                 </div>
              </div>

           </div>
         ))}
       </div>
    </div>
  );
};

export default Timeline;