import React from 'react';
import { Project } from '../types';
import { FileTextIcon, ArrowRightIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative perspective-1000">
      <div className="relative rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md p-6 sm:p-8 transition-all duration-500 ease-out 
                      hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.3)] 
                      hover:-translate-y-2 hover:scale-[1.01] hover:border-blue-500/30 dark:hover:border-blue-400/30">
        
        {/* Shine effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/40 to-white/0 dark:via-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div className="relative flex flex-col gap-5">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <h3 className="text-xl md:text-2xl font-serif font-bold leading-tight text-slate-900 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
              {project.paperUrl ? (
                <a href={project.paperUrl} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-2 underline-offset-4 decoration-amber-300 dark:decoration-amber-600/50">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            
            <div className="shrink-0 flex items-center gap-3">
               <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${
                  project.venue.includes('Submission') 
                    ? 'bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/30' 
                    : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
                }`}>
                  {project.venue.replace(/In |Arxiv /i, '')}
                </span>

               {project.paperUrl && (
                <a 
                  href={project.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-transparent text-slate-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 transform group-hover:rotate-0"
                >
                  <ArrowRightIcon className="w-4 h-4 -rotate-45 group-hover:-rotate-45 transition-transform" />
                </a>
              )}
            </div>
          </div>

          {/* Authors */}
          <div className="text-base leading-relaxed text-slate-600 dark:text-slate-400 font-light pl-1 border-l-2 border-slate-100 dark:border-slate-800 group-hover:border-amber-400/50 transition-colors">
            {project.authors.map((author, index) => (
              <span key={index} className="inline-block mr-1">
                {author.isMe ? (
                  <span className="font-medium text-slate-900 dark:text-slate-100 bg-blue-50 dark:bg-blue-900/30 px-1 rounded-md">
                    {author.name}
                  </span>
                ) : (
                  <span className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors cursor-default">
                    {author.name}
                  </span>
                )}
                {index < project.authors.length - 1 && ","}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-4 pt-2">
            {project.paperUrl && (
              <a 
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="group/link flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                <FileTextIcon className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                <span>Paper</span>
              </a>
            )}
            {project.codeUrl && (
              <a 
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="group/link flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                <span>Code</span>
              </a>
            )}
             {project.projectUrl && (
              <a 
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer" 
                className="group/link flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                <span>Website</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;