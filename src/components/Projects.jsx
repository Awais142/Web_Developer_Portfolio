import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Builder",
      description: "MERN stack application with AI integration for creating professional resumes. Features include dynamic templates, AI-powered content suggestions, and real-time preview.",
      status: "Under Development",
      tech: ["React", "Node.js", "MongoDB", "Express", "OpenAI", "Tailwind CSS"],
      image: "/projects/ai-resume.jpg",
      github: "https://github.com/Awais142/Mern_Resume_Builder_With_Ai",
      live: "#"
    },
    {
      title: "Job Portal WebApp",
      description: "Full-stack MERN application for job seekers and employers. Features include job posting, application tracking, and user authentication.",
      status: "Completed",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Bootstrap"],
      image: "/projects/job-portal.jpg",
      github: "https://github.com/Awais142/Mern-Job-Portal-WebApp",
      live: "#"
    },
    {
      title: "E-commerce Store",
      description: "Modern e-commerce platform built with React and Fake Store API. Features product filtering, cart management, and responsive design.",
      status: "Completed",
      tech: ["React", "Redux", "Fake Store API", "Tailwind CSS"],
      image: "/projects/ecommerce.jpg",
      github: "https://github.com/Awais142/React-Ecommerce-FakeStoreAPI",
      live: "#"
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts and beautiful UI animations.",
      status: "Completed",
      tech: ["React", "Weather API", "CSS3", "JavaScript"],
      image: "/projects/weather.jpg",
      github: "https://github.com/Awais142/WeatherApp",
      live: "#"
    },
    {
      title: "Image Search Engine",
      description: "Dynamic image search application using Unsplash API with infinite scroll and masonry layout.",
      status: "Completed",
      tech: ["React", "Unsplash API", "CSS3", "Masonry"],
      image: "/projects/image-search.jpg",
      github: "https://github.com/Awais142/image-search-unsplas-api",
      live: "#"
    },
    {
      title: "Developer Portfolio",
      description: "Modern, animated portfolio website showcasing my projects and skills. Built with React, Vite, and Framer Motion for smooth animations.",
      status: "Completed",
      tech: ["React", "Vite", "Framer Motion", "Tailwind CSS"],
      image: "/projects/portfolio.jpg",
      github: "https://github.com/Awais142/Web_Developer_Portfolio",
      live: "#"
    }
  ];

  return (
    <section className="relative w-screen min-h-screen bg-primary py-20 px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-[#915eff] rounded-full mb-8"></div>
          
          <p className="text-secondary text-lg max-w-3xl text-center mb-16">
            Here are some of my featured projects that demonstrate my skills and experience.
            Each project reflects my passion for creating intuitive and impactful web applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="relative group"
              >
                {/* Border container */}
                <div className="absolute -inset-[1px] rounded-lg overflow-hidden bg-[#151030]">
                  {/* Starting point glow */}
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#915eff] rounded-full
                    -translate-x-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
                  
                  {/* Right-moving beam */}
                  <div className="absolute bg-gradient-to-r from-[#915eff] to-[#4d3483]
                    opacity-0 group-hover:opacity-100 group-hover:animate-beam-right" />
                  
                  {/* Left-moving beam */}
                  <div className="absolute bg-gradient-to-l from-[#915eff] to-[#4d3483]
                    opacity-0 group-hover:opacity-100 group-hover:animate-beam-left" />
                </div>
                
                <div className="relative bg-[#151030] rounded-lg overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 
                        group-hover:scale-110 group-hover:rotate-2"
                    />
                    {project.status && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs 
                        font-semibold bg-[#915eff] text-white z-20">
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300
                      group-hover:text-[#915eff]">
                      {project.title}
                    </h3>
                    <p className="text-secondary text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-[#915eff]/10 text-[#915eff] 
                            border border-[#915eff]/20 transition-all duration-300
                            hover:bg-[#915eff]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary transition-all duration-300
                          hover:text-[#915eff] hover:translate-x-1 cursor-pointer"
                      >
                        <FaGithub className="text-xl" />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary transition-all duration-300
                          hover:text-[#915eff] hover:translate-x-1 cursor-pointer"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#915eff] rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#4d3483] rounded-full filter blur-[120px]" />
      </div>
    </section>
  );
};

export default Projects;
