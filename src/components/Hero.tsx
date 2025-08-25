import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center justify-center">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm Alok Kulkarni
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl"
        >
        <Typewriter
          words={[
            "Student at WCE", 
            "Developer", 
            "Absolute Learner"
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={90}
          deleteSpeed={50}
          // delaySpeed={1000}
        />
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 mt-8"
        >
          <Button asChild>
            <a href="#projects">Projects</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button asChild>
            <a href="https://drive.google.com/file/d/1udDJB9URca3NiI9aXNM85oY3542nKsqk/view?usp=sharing" target="_blank" rel="noopener noreferrer">See CV</a>
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;
