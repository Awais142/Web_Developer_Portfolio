import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      title: "Senior Web Developer",
      company: "Tech Corp",
      duration: "2022 - Present",
      description: "Led development of enterprise web applications using React and Node.js. Implemented CI/CD pipelines and mentored junior developers."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions",
      duration: "2020 - 2022",
      description: "Developed and maintained multiple client websites. Worked with MERN stack and implemented responsive designs."
    },
    {
      title: "Frontend Developer",
      company: "Web Agency",
      duration: "2019 - 2020",
      description: "Created responsive web interfaces using React and Redux. Collaborated with UI/UX team for optimal user experience."
    },
    {
      title: "Web Developer Intern",
      company: "StartUp Inc",
      duration: "2018 - 2019",
      description: "Assisted in developing website features and learned modern web development practices."
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      duration: "2017 - 2018",
      description: "Worked on various client projects, developing websites and web applications."
    }
  ];

  const education = [
    {
      title: "Master's in Computer Science",
      institution: "Tech University",
      duration: "2020 - 2022",
      description: "Specialized in Web Technologies and Cloud Computing."
    },
    {
      title: "Bachelor's in Software Engineering",
      institution: "Engineering College",
      duration: "2016 - 2020",
      description: "Focused on software development and web technologies."
    },
    {
      title: "Web Development Certification",
      institution: "freeCodeCamp",
      duration: "2019",
      description: "Completed comprehensive web development curriculum."
    },
    {
      title: "AWS Cloud Practitioner",
      institution: "Amazon Web Services",
      duration: "2021",
      description: "Certified in cloud computing fundamentals."
    },
    {
      title: "React Developer Certification",
      institution: "Meta",
      duration: "2022",
      description: "Advanced certification in React development."
    }
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="relative w-screen min-h-screen bg-primary py-20 px-8" id="about">
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
            I'm a passionate web developer with expertise in building beautiful, functional, 
            and user-friendly websites. With a strong foundation in both frontend and backend 
            development, I create seamless web experiences that engage and delight users.
          </p>

          {/* Tabs */}
          <div className="flex gap-8 mb-12 relative z-10">
            <button
              onClick={() => handleTabChange('experience')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer hover:scale-105 ${
                activeTab === 'experience'
                ? 'bg-[#915eff] text-white'
                : 'bg-black/20 text-secondary hover:bg-black/30'
              }`}
            >
              <FaBriefcase className="text-xl" />
              Experience
            </button>
            <button
              onClick={() => handleTabChange('education')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer hover:scale-105 ${
                activeTab === 'education'
                ? 'bg-[#915eff] text-white'
                : 'bg-black/20 text-secondary hover:bg-black/30'
              }`}
            >
              <FaGraduationCap className="text-xl" />
              Education
            </button>
          </div>

          {/* Timeline */}
          <div className="w-full max-w-4xl">
            {(activeTab === 'experience' ? experiences : education).map((item, index) => (
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
                  <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                    <span className="text-[#915eff]">{item.company || item.institution}</span>
                    <span className="text-secondary text-sm">{item.duration}</span>
                  </div>
                  <p className="text-secondary">{item.description}</p>
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

export default About;
