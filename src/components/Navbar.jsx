import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineMail } from 'react-icons/ai';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

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
      icon: AiOutlineHome
    },
    {
      id: "about",
      title: "About",
      icon: AiOutlineUser
    },
    {
      id: "services",
      title: "Services",
      icon: AiOutlineFundProjectionScreen
    },
    {
      id: "projects",
      title: "Projects",
      icon: AiOutlineFundProjectionScreen
    },
    {
      id: "contact",
      title: "Contact",
      icon: AiOutlineMail
    },
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
          <ul className="flex items-center gap-8">
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
                  <Icon className="text-2xl" />
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

        {/* Mobile Navigation */}
        <div className="sm:hidden fixed right-4">
          <button
            className="text-white w-[28px] h-[28px] cursor-pointer z-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`w-[28px] h-[2px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
            <div className={`w-[28px] h-[2px] bg-white my-2 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-[28px] h-[2px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </button>

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 right-0 w-[70%] h-screen bg-gradient-to-l from-primary to-black-100 p-6 ${isOpen ? 'flex' : 'hidden'}`}
          >
            <ul className="list-none flex flex-col justify-start items-start gap-4 mt-[60px]">
              {navLinks.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      scrollToSection(item.id);
                    }}
                    className={`relative p-2 transition-all duration-300 ${
                      activeSection === item.id 
                      ? 'text-[#915eff]' 
                      : 'text-secondary hover:text-white'
                    }`}
                  >
                    <item.icon size={20} />
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 rounded-full bg-[#915eff]/10"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    {/* Neon glow effect */}
                    {activeSection === item.id && (
                      <div className="absolute inset-0 rounded-full shadow-[0_0_15px_#915eff] animate-pulse" />
                    )}
                    {item.title}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
