import React, { useState, useEffect } from 'react';

const projectsData = [
  {
    id: 1,
    title: "Blank",
    description: "Under construction",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://via.placeholder.com/300x200/4F46E5/ffffff?text=E-Commerce",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Blank",
    description: "Under construction",
    tech: ["React", "OpenWeather API", "Chart.js"],
    image: "https://via.placeholder.com/300x200/7C3AED/ffffff?text=Weather+App",
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Blank",
    description: "Under construction",
    tech: ["Vue.js", "Firebase", "Tailwind"],
    image: "https://via.placeholder.com/300x200/DC2626/ffffff?text=Task+Manager",
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Responsive portfolio with 3D animations and modern design principles",
    tech: ["React", "Three.js", "Tailwind"],
    image: "https://via.placeholder.com/300x200/059669/ffffff?text=Portfolio",
    github: "#",
    demo: "#"
  }
];

export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  // Auto-rotate effect
  

  return (
    <section id="projects" className="py-24 px-4">
  {/* Section Title */}
  <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-center mb-16">
    My<span className="text-teal-500"> Projects</span>
  </h2>

  {/* Responsive Layout */}
  <div className="flex flex-col items-center">
    {/* Cube Wrapper (takes full width on mobile, shrinks nicely on larger screens) */}
    <div
      className="relative w-full max-w-md sm:max-w-lg lg:max-w-3xl h-[400px] mx-auto"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 3D Cube */}
      <div
        className="relative w-full h-full transition-transform duration-1000 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${currentIndex * -90}deg) ${
            isHovering ? "rotateX(-5deg) scale(1.05)" : "rotateX(0deg) scale(1)"
          }`,
        }}
      >
        {projectsData.map((project, index) => {
          const rotationAngle = index * 90;
          const isActive = index === currentIndex;

          return (
            <div
              key={project.id}
              className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-700"
              style={{
                transform: `rotateY(${rotationAngle}deg) translateZ(200px)`,
                backfaceVisibility: "hidden",
              }}
            >
              {/* Glass card */}
              <div
                className={`h-full relative transition- duration-700 ${
                  isActive
                    ? "bg-gray-900/80  border border-teal-400/30 shadow-2xl shadow-teal-400/20"
                    : "bg-gray-900/60 border border-gray-700/50 shadow-lg"
                }`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-transparent to-teal-400/10 rounded-2xl"></div>
                )}

                {/* Project Content */}
                <div className="h-full flex flex-col relative z-10">
                  {/* Image */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isActive ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-500 ${
                        isActive ? "opacity-40" : "opacity-70"
                      }`}
                    ></div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3
                        className={`text-xl font-bold mb-3 transition-all duration-500 ${
                          isActive ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-sm mb-4 transition-all duration-500 ${
                          isActive ? "text-gray-300" : "text-gray-400"
                        }`}
                      >
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 text-xs rounded-full transition-all duration-500 ${
                              isActive
                                ? "bg-teal-400/20 text-teal-300 border border-teal-400/40 shadow-lg shadow-teal-400/20"
                                : "bg-gray-700/50 text-gray-400 border border-gray-600/30"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div
                      className={`flex gap-3 transition-all duration-500 ${
                        isActive
                          ? "opacity-100 transform translate-y-0"
                          : "opacity-70 transform translate-y-2"
                      }`}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-800/50 hover:bg-gray-700/70 text-white text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium border border-gray-600/30 hover:border-gray-500/50"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl shadow-teal-400/30"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

      {/* Controls */}
    <div className="flex justify-center items-center mt-12 gap-8 flex-wrap">
      {/* Left */}
      <button
        onClick={prevProject}
        className="group bg-gray-900/50 hover:bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 hover:border-teal-400/50 rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-teal-400/20"
      >
        <svg
          className="w-5 h-5 text-gray-400 group-hover:text-teal-400 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="flex gap-2">
        {projectsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-teal-400 scale-125 shadow-lg shadow-teal-400/50"
                : "bg-gray-600 hover:bg-gray-500 hover:scale-110"
            }`}
          />
        ))}
      </div>

      {/* Right */}
      <button
        onClick={nextProject}
        className="group bg-gray-900/50 hover:bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 hover:border-teal-400/50 rounded-full p-3 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-teal-400/20"
      >
        <svg
          className="w-5 h-5 text-gray-400 group-hover:text-teal-400 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>

    {/* Current Info */}
    <div className="text-center mt-8 px-4">
      <h3 className="text-2xl text-white mb-2 transition-all duration-500">
        {projectsData[currentIndex].title}
      </h3>
      <p className="text-gray-400 max-w-xl mx-auto">
        {projectsData[currentIndex].description}
      </p>
    </div>
  </div>
</section>
  );
}
