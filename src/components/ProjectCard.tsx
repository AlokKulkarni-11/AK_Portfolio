import { motion } from "framer-motion";
import { projects } from "../lib/project-data";
import { Button } from "./ui/button";

type ProjectCardProps = (typeof projects)[number];

const ProjectCard = ({ title, description, image, tags, liveDemo, github }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
    >
      <div>
        <img src={image} alt={title} className="rounded-lg mb-4" />
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-auto">
        <Button asChild>
          <a href={liveDemo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </Button>
        <Button variant="secondary" asChild>
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
