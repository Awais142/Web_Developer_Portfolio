import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-screen h-screen mx-auto overflow-hidden" id="home">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[25%] w-[300px] h-[300px] rounded-full bg-[#915eff] filter blur-[150px] opacity-20" />
        <div className="absolute bottom-[20%] right-[25%] w-[350px] h-[350px] rounded-full bg-[#4d3483] filter blur-[150px] opacity-20" />
        <div className="absolute top-[40%] right-[45%] w-[200px] h-[200px] rounded-full bg-[#23153c] filter blur-[150px] opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-16 flex flex-col justify-center items-center h-full">
        <div className="flex flex-row items-center justify-start w-full">
          <div className="flex flex-col justify-center items-center mr-8">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915eff] to-transparent" />
          </div>

          <div className="flex flex-col z-10">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero-heading"
            >
              Hi, I'm <span className="text-[#915eff]">Awais Akbar</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hero-subtitle mt-4"
            >
              Full Stack Developer <br className="sm:block hidden" />
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-10"
            >
              <a href="#projects">
                <button className="bg-[#915eff] hover:bg-[#7d4ddb] text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
                  View Projects
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mouse Scroll Indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-16 w-fit mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a href="#about" className="inline-block">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 hover:border-white transition-colors duration-300">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary hover:bg-white mb-1"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
