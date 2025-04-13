import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-secondary font-mono text-lg mb-4">Hi, my name is</h2>
          <h1 className="text-4xl sm:text-6xl font-bold text-textPrimary mb-4">
            Zeeshan Liaqat
          </h1>
          <div className="text-2xl sm:text-4xl font-bold text-textSecondary mb-8">
            I'm a{' '}
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'Full Stack Developer',
                2000,
                '.NET Developer',
                2000,
                'React Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-secondary"
            />
          </div>
          <p className="text-textSecondary max-w-2xl mx-auto mb-8 text-lg">
            A passionate software engineer specializing in building exceptional digital experiences.
            Currently focused on developing mission-critical desktop applications at Pakistan Air Force.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-secondary text-primary px-8 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors cursor-pointer"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="border border-secondary text-secondary px-8 py-3 rounded-md font-medium hover:bg-secondary/10 transition-colors cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 