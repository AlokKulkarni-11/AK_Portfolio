import { motion } from "framer-motion";
import ProfileCard from './ProfileCard';
import { PROFILE_IMAGE } from "../lib/profile-config";


const About = () => {
  return (
    <section id="about" className="w-full py-20 lg:py-32">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative group flex justify-center items-center"
        >
          <ProfileCard
            name="Alok Kulkarni"
            title="Full Stack Developer"
            handle="ig.alokkulkarni"
            status="Online"
            contactText="Contact Me"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() => window.open("https://www.linkedin.com/in/alok-kulkarni-499259296/", "_blank")}
            avatarUrl={PROFILE_IMAGE.src}
            miniAvatarUrl="/AK.png"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">
            I am a passionate{" "}
            <span className="text-primary font-semibold">Developer</span> pursuing a degree in Computer Science and Engineering (CSE) at WCE Sangli.
            I am in the learning phase, actively expanding my knowledge and skills in various areas of technology and software development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
