import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Pakistan Air Force',
      duration: 'Nov. 2023 - Present',
      responsibilities: [
        'Collaborated with cross-functional teams to design and implement advanced features in mission-critical desktop applications using .NET WPF.',
        'Utilized asynchronous programming, including async/await patterns and Task Parallel Library (TPL), to improve application responsiveness.',
        'Engineered multithreaded solutions to handle high-concurrency tasks and improve application reliability.',
        'Optimized TCP/IP, UDP communication protocols, and integrated RTP for secure real-time data transmission.',
        'Developed dynamic 2D and 3D mapping solutions for mission-critical operations.',
        'Designed real-time communication interfaces using serial communication and integrated with LabVIEW.',
        'Successfully integrated LabVIEW applications with C# for real-time data acquisition.',
        'Refactored legacy codebases into modular, object-oriented structures.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-textPrimary mb-12">
            Professional <span className="text-secondary">Experience</span>
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-32 pb-12 border-l-2 border-secondary"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary" />
                
                <div className="md:absolute md:left-8 md:top-0 mb-4 md:mb-0">
                  <span className="text-secondary font-mono">{exp.duration}</span>
                </div>

                <div className="bg-tertiary p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <BriefcaseIcon className="w-6 h-6 text-secondary mr-2" />
                    <h3 className="text-xl font-bold text-textPrimary">{exp.title}</h3>
                  </div>
                  <p className="text-secondary font-medium mb-4">{exp.company}</p>
                  
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-textSecondary flex items-start">
                        <span className="text-secondary mr-2">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 