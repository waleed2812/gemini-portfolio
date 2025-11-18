import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowRight, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Featured Projects</h2>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
          Key initiatives and platforms developed using modern cloud and web technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Layers size={24} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wide rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;