import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Outer rotating circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 rounded-full border-t-4 border-[#915eff] border-opacity-50"
        />
        
        {/* Inner rotating circle */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-16 h-16 -mt-8 -ml-8 rounded-full border-t-4 border-[#915eff]"
        />
        
        {/* Center dot with glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-4 h-4 -mt-2 -ml-2 bg-[#915eff] rounded-full shadow-[0_0_15px_#915eff]"
        />
      </motion.div>
    </div>
  );
};

export default Loader;
