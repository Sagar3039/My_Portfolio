
import { useState } from "react";
import { Github, ExternalLink, Code } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

const ProjectsSection = () => {
  const [filter, setFilter] = useState<"featured" | "all">("featured");

  const projects: Project[] = [
    {
      id: 1,
      title: "MEME Application",
      description: "It's a MEME application what use reddid API to get MEME and show like insta",
      image: "/images/project-chat.png",
      tech: ["Kotlin", "XML", "API"],
      github: "https://github.com/Sagar3039/MEME_SHARE",
      // demo: "https://demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "E-commerce Web App",
      description: "A fully functional online store with product listings, shopping cart, payment gateway integration, and user authentication.",
      image: "/images/project-ecommerce.png",
      tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
      github: "https://github.com/Sagar3039/my-mart-shopping",
      demo: "https://sage-gecko-c9310a.netlify.app/",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "My old portfolio website showcasing my projects and skills.",
      image: "/images/project-portfolio.png",
      tech: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      github: "https://github.com/Sagar3039/2nd_portfolio",
      demo: "https://sagarportfolio2004.netlify.app/",
      featured: true,
    },
    {
      id: 4,
      title: "Task Management App",
      description: "A Modern UI task management application with drag and drop functionality.",
      image: "/images/project-task.png",
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "PostCSS",
        
      ],
      github: "https://github.com/Sagar3039/taskify",
      demo: "https://jazzy-lolly-edbac5.netlify.app/",
      featured: false,
    },
    {
      id: 5,
      title: "Job Ninja Web App",
      description: "A website for searching job for users and posting jobs for recruters",
      image: "/images/project-jobNinja.png",
      tech: ["React Native", "Weather API", "Geolocation"],
      github: "https://github.com/Sagar3039/JobNinja",
      demo: "https://stellular-semolina-9028db.netlify.app/",
      featured: false,
    },
    
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mx-auto hover:text-primary transition-colors duration-300">My Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300">
          Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
        </p>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
              type="button"
              onClick={() => setFilter("featured")}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border transition-all duration-300 hover:-translate-y-1 ${
                filter === "featured"
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              Featured
            </button>
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border transition-all duration-300 hover:-translate-y-1 ${
                filter === "all"
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              All Projects
            </button>
            
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group animate-fade-in">
              <div className="relative overflow-hidden aspect-video">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <div className={`bg-gradient-to-tr from-gray-800 to-gray-600 h-full flex items-center justify-center ${project.image ? 'hidden' : ''}`}>
                  <Code size={48} className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors hover:rotate-6 hover:scale-110 transition-all"
                        aria-label="View on Github"
                      >
                        <Github size={24} className="text-white" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors hover:rotate-6 hover:scale-110 transition-all"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={24} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-100 dark:border-gray-800 group-hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Remove this block
                                <div className="bg-gradient-to-tr from-gray-800 to-gray-600 h-full flex items-center justify-center">
                                  <Code size={48} className="text-gray-400 group-hover:text-primary transition-colors" />
                                </div>
                                */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
