import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-textPrimary mb-8">
            About <span className="text-secondary">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-textSecondary">
              <p className="mb-4">
                I am a passionate Software Engineer with a strong foundation in computer science and
                a drive for creating efficient, scalable solutions. Currently working at the Pakistan
                Air Force, I specialize in developing mission-critical desktop applications using
                .NET WPF and modern software development practices.
              </p>
              <p className="mb-4">
                My journey in software development has equipped me with expertise in both frontend
                and backend technologies, allowing me to build comprehensive solutions that meet
                complex requirements while maintaining high standards of code quality and performance.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-tertiary p-6 rounded-lg">
                <h3 className="text-xl font-bold text-textPrimary mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-secondary font-medium">Bachelor of Science in Computer Science</h4>
                    <p className="text-textSecondary">Comsats University Attock Campus</p>
                    <p className="text-textSecondary text-sm">Sep. 2019 - June 2023</p>
                  </div>
                  <div>
                    <h4 className="text-secondary font-medium">F.Sc Pre-Engineering</h4>
                    <p className="text-textSecondary">Punjab College Jand, Attock</p>
                    <p className="text-textSecondary text-sm">Aug. 2016 - May 2018</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-tertiary p-6 rounded-lg">
                <h3 className="text-xl font-bold text-textPrimary mb-4">Current Focus</h3>
                <ul className="list-disc list-inside text-textSecondary space-y-2">
                  <li>Developing mission-critical desktop applications</li>
                  <li>Working with asynchronous programming patterns</li>
                  <li>Implementing real-time communication systems</li>
                  <li>Building scalable frontend solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 