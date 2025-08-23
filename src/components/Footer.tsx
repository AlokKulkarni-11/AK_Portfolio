import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-muted-foreground text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Alok Kulkarni. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/AlokKulkarni-11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/alok-kulkarni-499259296/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
