
import { useState } from "react";
import { Code, Server, Database, Smartphone, Languages } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    proficiency: number;
  }[];
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: <Code className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />,
      skills: [
        { name: "React", proficiency: 90 },
        { name: "JSX", proficiency: 95 },
        { name: "HTML/CSS", proficiency: 95 },
        { name: "JavaScript", proficiency: 90 },
        { name: "TypeScript", proficiency: 85 },
      ],
    },
    {
      name: "Backend",
      icon: <Server className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />,
      skills: [
        { name: "Node.js", proficiency: 85 },
        { name: "Express.js", proficiency: 90 },
        { name: "MERN Stack", proficiency: 85 },
        { name: "APIs", proficiency: 90 },
        { name: "RESTful Services", proficiency: 90 },
      ],
    },
    {
      name: "Database",
      icon: <Database className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />,
      skills: [
        { name: "MongoDB", proficiency: 90 },
        { name: "SQL", proficiency: 85 },
        { name: "Database Design", proficiency: 85 },
        { name: "Data Modeling", proficiency: 80 },
      ],
    },
    {
      name: "Android",
      icon: <Smartphone className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />,
      skills: [
        { name: "Java", proficiency: 90 },
        { name: "Kotlin", proficiency: 85 },
        { name: "Android Studio", proficiency: 90 },
        { name: "XML Layouts", proficiency: 90 },
        { name: "Material Design", proficiency: 85 },
      ],
    },
    {
      name: "Languages",
      icon: <Languages className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />,
      skills: [
        { name: "Java", proficiency: 95 },
        { name: "Kotlin", proficiency: 85 },
        { name: "C", proficiency: 80 },
        { name: "C++", proficiency: 85 },
        { name: "Golang", proficiency: 75 },
      ],
    },
  ];

  const activeSkills = skillCategories.find(
    (category) => category.name === activeCategory
  )?.skills;

  return (
    <section id="skills" className="py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mx-auto  text-black dark:text-white  transition-colors duration-300">My Skills</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300">
          I've developed expertise across various technologies and platforms, with a focus on creating efficient and elegant solutions.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              className={`skill-card group ${
                activeCategory === category.name
                  ? "border-2 border-primary animate-pulse-border"
                  : "border border-border hover:border-primary/50"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <div className="mb-2">{category.icon}</div>
              <h3 className="font-medium group-hover:text-primary transition-colors">{category.name}</h3>
            </button>
          ))}
        </div>

        <div className="animate-fade-in">
          <h3 className="text-xl font-semibold mb-6 text-center hover:text-primary transition-colors">
            {activeCategory} Technologies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeSkills?.map((skill) => (
              <div
                key={skill.name}
                className="bg-card p-6 rounded-lg shadow-sm animate-scale-in hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 border-2 border-transparent transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium hover:text-primary transition-colors">{skill.name}</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full transition-all duration-1000 hover:from-accent hover:to-primary"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
