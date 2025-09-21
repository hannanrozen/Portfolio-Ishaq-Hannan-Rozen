import { Github, ExternalLink, Figma } from "lucide-react";
import { Card, CardContent } from "../ui/Card";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const ProjectCard = ({ project }) => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <Card
      ref={ref}
      className={clsx(
        "overflow-hidden transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex gap-3">
            {project.github && (
              <LinkButton href={project.github} icon={Github} />
            )}
            {project.figma && <LinkButton href={project.figma} icon={Figma} />}
            <LinkButton href={project.demo} icon={ExternalLink} />
          </div>
        </div>
      </div>

      <CardContent>
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <TechTag key={`${project.id}-${tech}-${index}`} tech={tech} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Memoized components for performance
const LinkButton = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
  >
    <Icon size={20} />
  </a>
);

const TechTag = ({ tech }) => (
  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">
    {tech}
  </span>
);

export default ProjectCard;
