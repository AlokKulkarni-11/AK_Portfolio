import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../lib/skills-data";
import { iconMap } from "../lib/icon-map";
import { Button } from "./ui/button";

type SkillCategory = "frontend" | "backend" | "rest" | "database" | "tools" | "course_work";

const Skills = () => {
  const [category, setCategory] = useState<SkillCategory>("frontend");

  return (
    <section id="skills" className="w-full py-20 lg:py-32">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <Button
            variant={category === "frontend" ? "default" : "secondary"}
            onClick={() => setCategory("frontend")}
          >
            Frontend
          </Button>
          <Button
            variant={category === "backend" ? "default" : "secondary"}
            onClick={() => setCategory("backend")}
          >
            Backend
          </Button>
          
          <Button
            variant={category === "database" ? "default" : "secondary"}
            onClick={() => setCategory("database")}
          >
            Database
          </Button>
          <Button
            variant={category === "tools" ? "default" : "secondary"}
            onClick={() => setCategory("tools")}
          >
            Tools
          </Button>
          <Button
            variant={category === "course_work" ? "default" : "secondary"}
            onClick={() => setCategory("course_work")}
          >
            Course Work
          </Button>
        </div>
        <motion.div
          key={category} // Add key to re-trigger animation on category change
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {skills[category].map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center justify-center gap-2 p-6 bg-card rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 skill-card"
              >
                <Icon className="w-16 h-16" />
                <p className="text-lg font-semibold">{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
