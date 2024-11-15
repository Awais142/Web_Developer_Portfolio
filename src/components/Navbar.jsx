import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "Home", id: "home", icon: FaHome },
    { title: "About", id: "about", icon: FaUser },
    { title: "Projects", id: "projects", icon: FaCode },
    { title: "Contact", id: "contact", icon: FaEnvelope },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full flex justify-center px-6 sm:px-16 py-5 top-0 z-20"
    >
      <motion.div 
        className="bg-black bg-opacity-20 backdrop-blur-lg rounded-full px-8 py-4 border border-white border-opacity-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              className="relative"
            >
              <a
                href={`#${item.id}`}
                className="flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="text-secondary hover:text-white transition-colors duration-300">
                  <item.icon size={24} />
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

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
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-3 nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <item.icon size={20} />
                  {item.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
