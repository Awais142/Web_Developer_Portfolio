import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      content: "awaisakbar.dev@gmail.com",
      link: "mailto:awaisakbar.dev@gmail.com"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      content: "+92-3114778901",
      link: "https://wa.me/923114778901"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      content: "Lahore, Pakistan",
      link: "https://www.google.com/maps/place/Lahore"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/Awais142",
      label: "GitHub"
    },
    {
      icon: FaLinkedin,
      link: "https://linkedin.com/in/your-profile",
      label: "LinkedIn"
    },
    {
      icon: FaTwitter,
      link: "https://twitter.com/your-profile",
      label: "Twitter"
    }
  ];

  return (
    <section className="relative min-h-screen bg-primary py-20 px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-[#915eff] rounded-full mb-8"></div>
          
          <p className="text-secondary text-lg max-w-3xl text-center mb-16">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to drop
            me a message. I'll try my best to get back to you!
          </p>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#151030] border border-[#915eff]/20
                      text-white focus:outline-none focus:border-[#915eff] transition-colors
                      placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#151030] border border-[#915eff]/20
                      text-white focus:outline-none focus:border-[#915eff] transition-colors
                      placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg bg-[#151030] border border-[#915eff]/20
                      text-white focus:outline-none focus:border-[#915eff] transition-colors
                      placeholder-gray-500 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#915eff] to-[#4d3483]
                    text-white font-medium hover:shadow-[0_0_20px_rgba(145,94,255,0.5)]
                    transition-shadow"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full space-y-8"
            >
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-lg bg-[#151030] border border-[#915eff]/20
                      hover:border-[#915eff]/40 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#915eff] to-[#4d3483]
                      flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1 group-hover:text-[#915eff] transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-secondary text-sm">
                        {info.content}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-white font-medium mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#151030] border border-[#915eff]/20
                        flex items-center justify-center hover:border-[#915eff] hover:text-[#915eff]
                        transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#915eff] rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#4d3483] rounded-full filter blur-[120px]" />
      </div>
    </section>
  );
};

export default Contact;
