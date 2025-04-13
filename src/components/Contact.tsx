
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-textPrimary mb-12 text-center">
            Get In <span className="text-secondary">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-textPrimary mb-4">
                Let's Connect
              </h3>
              <p className="text-textSecondary mb-8">
                I'm currently open to new opportunities and would love to hear from you.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:zeeshanliaqat595@gmail.com"
                  className="flex items-center space-x-3 text-textSecondary hover:text-secondary transition-colors"
                >
                  <FaEnvelope className="w-5 h-5" />
                  <span>zeeshanliaqat595@gmail.com</span>
                </a>
                <a
                  href="tel:0348-5032295"
                  className="flex items-center space-x-3 text-textSecondary hover:text-secondary transition-colors"
                >
                  <FaPhone className="w-5 h-5" />
                  <span>0348-5032295</span>
                </a>
                <a
                  href="https://linkedin.com/in/zeeshan-liaqat-165381199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-textSecondary hover:text-secondary transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-textPrimary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-tertiary border border-textSecondary/20 rounded-md text-textPrimary focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-textPrimary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-tertiary border border-textSecondary/20 rounded-md text-textPrimary focus:outline-none focus:border-secondary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-textPrimary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-tertiary border border-textSecondary/20 rounded-md text-textPrimary focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-primary font-medium py-2 px-4 rounded-md hover:bg-secondary/80 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 