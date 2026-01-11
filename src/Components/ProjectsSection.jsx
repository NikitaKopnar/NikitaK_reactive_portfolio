import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Tic-Tac-Toe Game Development",
    description:
      "Developed a web-based Tic-Tac-Toe game with interactive UI, turn-based logic, and win/draw detection using JavaScript and React.",
    image: "/projects/tic-tac-toe.jpg",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "https://tic-tac-toe-react-project-wine.vercel.app/",
    githubUrl: "https://github.com/NikitaKopnar/tic-tac-toe-react-project",
  },
  {
    id: 2,
    title: "Portfolio Development in HTML and CSS",
    description:
      "An elegant and minimal portfolio to highlight my frontend work. Includes projects, skills, and resume for easy access.",
    image: "/projects/portfolio_latest_img.jpeg",
    tags: ["HTML", "JavaScript", "CSS3"],
    demoUrl: "https://portfolio-mu-six-48.vercel.app/",
    githubUrl: "https://github.com/NikitaKopnar/portfolio",
  },
];

export const ProjectSection = () => {
  return (
    <section id="Projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Project Image - use aspectRatio so images are not cropped */}
              <div
                className="w-full overflow-hidden bg-muted"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Github Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/NikitaKopnar"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
