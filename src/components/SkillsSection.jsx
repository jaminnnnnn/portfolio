import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Mail, MapPin, Facebook, Instagram, Send, Linkedin, Github } from 'lucide-react';
import { cn } from "../lib/utils";

// ===== OPTIMIZED SKILLS SECTION =====
const skills = [
  // frontend
  {name: "HTML/CSS", level: 60, category: "frontend"},
  {name: "React", level: 70, category: "frontend"},
  {name: "Tailwind CSS", level: 60, category: "frontend"},

  // backend
  {name: "MYSQL", level: 70, category: "backend"},
  {name: "CodeIgniter PHP", level: 80, category: "backend"},
  {name: "Supabase", level: 60, category: "backend"},

  // Tools
  {name: "Github", level: 70, category: "tools"},
  {name: "VS Code", level: 100, category: "tools"},
  {name: "Figma", level: 60, category: "tools"},
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredSkills = useMemo(() => 
    skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory),
    [activeCategory]
  );

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-teal-500">Skills</span>
        </h2>

        {/* Removed unnecessary wrapper div */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button 
              key={key} 
              onClick={() => handleCategoryChange(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category 
                  ? "bg-teal-400 text-primary-foreground" 
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              {/* Flattened structure - removed nested div */}
              <h3 className="font-semibold text-lg mb-4">{skill.name}</h3>
              
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden mb-1">
                <div 
                  className="bg-teal-600 h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                  style={{width: `${skill.level}%`}}
                />                                   
              </div>
              
              <span className="text-sm text-muted-foreground text-right block">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};