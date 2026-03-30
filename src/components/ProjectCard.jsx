import { Icon } from "@iconify/react";

const ProjectCard = ({
  title,
  description,
  tech,
  image,
  github,
  live,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition duration-600 ease-in-out hover:border-white/20 hover:scale-105">
      
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover transition"
      />

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        <p className="mt-2 text-sm text-white/60">{description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4">
          <a href={github} target="_blank">
            <Icon icon="tabler:brand-github" className="text-xl text-white/70 hover:text-white" />
          </a>

          <a href={live} target="_blank">
            <Icon icon="tabler:external-link" className="text-xl text-white/70 hover:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;