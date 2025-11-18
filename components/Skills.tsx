import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Server, Cloud, Database, Smartphone, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes("Frontend")) return <Code2 className="text-blue-500" />;
    if (title.includes("Backend")) return <Server className="text-green-500" />;
    if (title.includes("Cloud")) return <Cloud className="text-purple-500" />;
    if (title.includes("Database")) return <Database className="text-yellow-500" />;
    if (title.includes("Mobile")) return <Smartphone className="text-pink-500" />;
    return <Wrench className="text-gray-500" />;
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Technical Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  {getIcon(category.title)}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded-full text-sm font-medium hover:border-blue-200 hover:text-blue-600 transition-colors"
                  >
                    {skill}
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

export default Skills;