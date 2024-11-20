import { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiFirebase,
} from "react-icons/si";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const technologies = {
    description:
      "I specialize in full-stack development with expertise in modern web technologies. My tech stack is carefully chosen to build scalable, performant, and user-friendly applications.",
    stack: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  };

  const experiences = [
    {
      title: "Web Developer",
      company: "Upwork, Fiver, Freealncer",
      duration: "2023 - Present",
      description:
        "Building Web Apps using MERN stack also developed some landing pages using HTML, CSS and JavaScript",
    },
    {
      title: "Web developer",
      company: "Nooreh Fashion",
      duration: "2022 - 2023",
      description:
        "Developed and maintained multiple client websites. Worked with MERN stack and implemented responsive designs.",
    },
    {
      title: "Frontend Developer",
      company: "University of South Asia",
      duration: "2021- 2022",
      description:
        "Created responsive web interfaces using HTML, CSS, JavaScript. Collaborated with UI/UX team for optimal user experience.",
    },
    {
      title: "Front End Developer",
      company: "",
      duration: "2020 - 2021",
      description:
        "Assisted in developing website features and learned modern web development practices.",
    },
    {
      title: "Android Developer",
      company: "BSM Software solutions",
      duration: "2019 - 2020",
      description:
        "Worked on various client projects, developing websites and web applications.",
    },
  ];

  const education = [
    {
      title: "Bachelor's in Computer Science",
      institution: "Allama Iqbal Open University",
      duration: "2016 - 2020",
      description: "Specialized in Web Technologies and Cloud Computing.",
    },
    {
      title: "Web Development Certification",
      institution: "freeCodeCamp",
      duration: "2019",
      description: "Completed comprehensive web development curriculum.",
    },
    {
      title: "MERN stack Certification",
      institution: "Nexusberry Solutions",
      duration: "2022",
      description: "Advanced certification in React development.",
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section
      className="relative w-screen min-h-screen bg-primary py-20 px-8"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#915eff] rounded-full mb-8"></div>

          <p className="text-secondary text-lg max-w-3xl text-center mb-16">
            I'm a passionate web developer with expertise in building beautiful,
            functional, and user-friendly websites. With a strong foundation in
            both frontend and backend development, I create seamless web
            experiences that engage and delight users.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12 relative z-10">
            <button
              onClick={() => handleTabChange("experience")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer hover:scale-105 ${
                activeTab === "experience"
                  ? "bg-[#915eff] text-white"
                  : "bg-black/20 text-secondary hover:bg-black/30"
              }`}
            >
              <FaBriefcase className="text-xl" />
              Experience
            </button>
            <button
              onClick={() => handleTabChange("education")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer hover:scale-105 ${
                activeTab === "education"
                  ? "bg-[#915eff] text-white"
                  : "bg-black/20 text-secondary hover:bg-black/30"
              }`}
            >
              <FaGraduationCap className="text-xl" />
              Education
            </button>
            <button
              onClick={() => handleTabChange("technologies")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer hover:scale-105 ${
                activeTab === "technologies"
                  ? "bg-[#915eff] text-white"
                  : "bg-black/20 text-secondary hover:bg-black/30"
              }`}
            >
              <FaCode className="text-xl" />
              Technologies
            </button>
          </div>

          {/* Timeline and Technologies Content */}
          <div className="w-full max-w-4xl">
            {activeTab === "technologies" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-secondary text-lg mb-12">
                  {technologies.description}
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
                  {technologies.stack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div
                        className="w-16 h-16 flex items-center justify-center rounded-xl bg-black/20 backdrop-blur-sm border border-white/5 
                        group-hover:border-[#915eff]/20 transition-all duration-300 group-hover:scale-110"
                      >
                        <tech.icon
                          className="text-4xl"
                          style={{ color: tech.color }}
                        />
                      </div>
                      <span className="text-secondary text-sm">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              (activeTab === "experience" ? experiences : education).map(
                (item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 pb-12 last:pb-0"
                  >
                    {/* Timeline line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#915eff] to-transparent" />

                    {/* Timeline dot */}
                    <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-[#915eff]" />

                    {/* Content */}
                    <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm border border-white/5 hover:border-[#915eff]/20 transition-all duration-300">
                      <h3 className="text-white text-xl font-bold mb-1">
                        {item.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                        <span className="text-[#915eff]">
                          {item.company || item.institution}
                        </span>
                        <span className="text-secondary text-sm">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-secondary">{item.description}</p>
                    </div>
                  </motion.div>
                )
              )
            )}
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

export default About;
