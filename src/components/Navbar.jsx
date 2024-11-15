import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaCogs, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      id: "home",
      title: "Home",
      icon: FaHome
    },
    {
      id: "about",
      title: "About",
      icon: FaUser
    },
    {
      id: "services",
      title: "Services",
      icon: FaCogs
    },
    {
      id: "projects",
      title: "Projects",
      icon: FaCode
    },
    {
      id: "contact",
      title: "Contact",
      icon: FaEnvelope
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed top-0 w-full z-20 flex justify-center mt-8">
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-fit"
      >
        <div className="px-8 py-4 rounded-full backdrop-blur-lg bg-black/20 border border-white/10">
          <ul className="flex items-center gap-4 sm:gap-8">
            {navLinks.map(({ id, icon: Icon }) => (
              <motion.li
                key={id}
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection(id)}
                  className={`relative p-2 transition-all duration-300 ${
                    activeSection === id 
                    ? 'text-[#915eff]' 
                    : 'text-secondary hover:text-white'
                  }`}
                >
                  <Icon className="text-lg sm:text-2xl" />
                  {activeSection === id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-full bg-[#915eff]/10"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  {/* Neon glow effect */}
                  {activeSection === id && (
                    <div className="absolute inset-0 rounded-full shadow-[0_0_15px_#915eff] animate-pulse" />
                  )}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
