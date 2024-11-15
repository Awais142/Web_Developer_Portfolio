import { motion } from 'framer-motion';
import { FaCode, FaShoppingCart, FaLaptopCode, FaMobileAlt, FaDatabase, FaCloud } from 'react-icons/fa';

const services = [
  {
    title: "Full Stack Development",
    icon: FaCode,
    description: "End-to-end web application development using modern technologies like MERN stack, ensuring scalable and maintainable solutions.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "REST APIs"]
  },
  {
    title: "E-commerce Development",
    icon: FaShoppingCart,
    description: "Custom e-commerce solutions with secure payment integration, inventory management, and optimized user experience.",
    technologies: ["Stripe", "PayPal", "Redux", "JWT Auth", "MongoDB"]
  },
  {
    title: "Frontend Development",
    icon: FaLaptopCode,
    description: "Responsive and interactive user interfaces with modern frameworks and libraries, focusing on performance and accessibility.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Mobile Development",
    icon: FaMobileAlt,
    description: "Cross-platform mobile applications using React Native, delivering native-like experience on both iOS and Android.",
    technologies: ["React Native", "Expo", "Firebase", "Native APIs"]
  },
  {
    title: "Database Architecture",
    icon: FaDatabase,
    description: "Designing and implementing efficient database structures, ensuring data integrity and optimal performance.",
    technologies: ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
  },
  {
    title: "Cloud Solutions",
    icon: FaCloud,
    description: "Cloud infrastructure setup and deployment, with focus on scalability, security, and cost optimization.",
    technologies: ["AWS", "Firebase", "Docker", "CI/CD"]
  }
];

const ServiceCard = ({ title, icon: Icon, description, technologies, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Card container with hover effects */}
      <div className="relative bg-[#151030] rounded-2xl p-6 h-full
        hover:shadow-[0_0_30px_rgba(145,94,255,0.3)] transition-shadow duration-300">
        
        {/* Icon with gradient background */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#915eff] to-[#4d3483]
          flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-white text-2xl" />
        </div>

        {/* Content */}
        <h3 className="text-white text-xl font-bold mb-4 group-hover:text-[#915eff] transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-secondary text-sm mb-6">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-[#915eff]/10 text-[#915eff]
                border border-[#915eff]/20 transition-all duration-300
                hover:bg-[#915eff]/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="relative min-h-screen bg-primary py-20 px-8" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Services</h2>
          <div className="w-20 h-1 bg-[#915eff] rounded-full mb-8"></div>
          
          <p className="text-secondary text-lg max-w-3xl text-center mb-16">
            I offer a comprehensive range of development services, leveraging cutting-edge
            technologies to bring your ideas to life. Each service is tailored to meet
            your specific needs and industry standards.
          </p>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
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

export default Services;
