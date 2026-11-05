import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const DEFAULT_CV_URL =
  "https://drive.google.com/file/d/1pBBGciVsgmbqfCRz67vVHxjlU02OEmAO/view?usp=sharing";

const getDownloadUrl = (url: string) => {
  const googleDriveFileId = url.match(/drive\.google\.com\/file\/d\/([^/]+)/)?.[1];

  return googleDriveFileId
    ? `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`
    : url;
};

const Hero = () => {
  const [cvUrl, setCvUrl] = useState(DEFAULT_CV_URL);

  useEffect(() => {
    let isMounted = true;

    fetch("/portfolio-config.json", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((config: { cvUrl?: unknown } | null) => {
        if (!isMounted || typeof config?.cvUrl !== "string") return;

        const nextCvUrl = config.cvUrl.trim();
        if (nextCvUrl) {
          setCvUrl(nextCvUrl);
        }
      })
      .catch(() => {
        if (isMounted) {
          setCvUrl(DEFAULT_CV_URL);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

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
          className="text-xl"
        >
        <Typewriter
          words={[
            "Computer Engineering student building software solutions to solve real-world problems." 
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={30}
          // delaySpeed={1000}
        />
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 mt-8 flex-wrap justify-center"
        >
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href={cvUrl} target="_blank" rel="noopener noreferrer">See CV</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href={getDownloadUrl(cvUrl)}>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-5 mt-8"
        >
          <a
            href="https://github.com/AlokKulkarni-11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2.5 rounded-full hover:bg-muted/50 border border-transparent hover:border-border"
            title="GitHub"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/alokkulkarni1113/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2.5 rounded-full hover:bg-muted/50 border border-transparent hover:border-border"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://leetcode.com/u/Illuminati1113/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2.5 rounded-full hover:bg-muted/50 border border-transparent hover:border-border"
            title="LeetCode"
            aria-label="LeetCode Profile"
          >
            <SiLeetcode className="w-6 h-6" />
          </a>
          <a
            href="https://www.codechef.com/users/illuminati1311"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2.5 rounded-full hover:bg-muted/50 border border-transparent hover:border-border"
            title="CodeChef"
            aria-label="CodeChef Profile"
          >
            <SiCodechef className="w-6 h-6" />
          </a>
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
