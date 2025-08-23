import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 lg:py-32">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out to
            me.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/AlokKulkarni-11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            
            
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
