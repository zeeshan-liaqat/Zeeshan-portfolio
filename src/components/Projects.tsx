import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Billboard/Adverts Web Portal',
      description: 'A full-stack web application for streamlining billboard and advertisement management. Features include user authentication, payment integration, and real-time updates.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      type: 'Final Year Project',
      links: {
        github: '#',
        live: '#',
      },
    },
    {
      title: 'ATM Clone',
      description: 'A Java-based ATM simulation with secure money withdrawal and balance management features. Implements robust error handling and user-friendly interface.',
      technologies: ['Java', 'OOP', 'GUI Programming'],
      type: 'Semester Project',
      links: {
        github: '#',
        live: '#',
      },
    },
    {
      title: 'Mini Compiler',
      description: 'Designed and implemented a mini compiler in C# that performs lexical analysis and syntax parsing. Demonstrates understanding of compiler design principles.',
      technologies: ['C#', 'Compiler Design', 'Parsing'],
      type: 'Semester Project',
      links: {
        github: '#',
        live: '#',
      },
    },
    {
      title: 'Salah Tracker',
      description: 'A cross-platform mobile application built with React Native to help users track daily prayers with real-time Salah timings and reminders.',
      technologies: ['React Native', 'Mobile Development', 'API Integration'],
      type: 'Semester Project',
      links: {
        github: '#',
        live: '#',
      },
    },
    {
      title: 'Netflix Clone',
      description: 'A frontend recreation of the Netflix interface using React, showcasing proficiency in modern frontend development practices.',
      technologies: ['React', 'CSS', 'API Integration'],
      type: 'Personal Project',
      links: {
        github: '#',
        live: '#',
      },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-textPrimary mb-12">
            Featured <span className="text-secondary">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-tertiary rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-textPrimary">{project.title}</h3>
                    <div className="flex space-x-4">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textSecondary hover:text-secondary transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textSecondary hover:text-secondary transition-colors"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-secondary font-mono text-sm mb-2">{project.type}</p>
                  <p className="text-textSecondary mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-secondary text-sm font-mono px-3 py-1 bg-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 