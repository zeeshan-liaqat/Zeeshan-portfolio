import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'SQL', 'JavaScript', 'HTML/CSS', 'C#'],
    },
    {
      title: 'Frameworks',
      skills: ['React', 'Node.js', 'React Native', '.NET Core'],
    },
    {
      title: 'Developer Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'PyCharm', 'IntelliJ', 'Visual Studio'],
    },
    {
      title: 'Technologies',
      skills: ['RTP', 'TCP/IP', 'UDP', 'Serial Communication', '2D/3D Mapping'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-textPrimary mb-12">
            Technical <span className="text-secondary">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-tertiary rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-textPrimary mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-textSecondary hover:text-secondary transition-colors duration-300"
                    >
                      <span className="text-secondary">▹</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-textSecondary max-w-2xl mx-auto">
              I'm always eager to learn new technologies and frameworks to stay current with industry trends and best practices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 