import { projects } from "../lib/project-data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 lg:py-32">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
