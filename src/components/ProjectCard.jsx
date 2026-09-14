import { Icon } from "@iconify/react";

const ProjectCard = ({
  title,
  description,
  tech,
  image,
  github,
  live,
  status,
}) => {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition-colors duration-300 hover:border-white/25">
      
      <div className="relative">
        {image ? <img
          src={image}
          alt={title}
          loading="lazy"
          className="aspect-video w-full object-cover object-top transition-opacity group-hover:opacity-90"
        /> : <div className="flex aspect-video flex-col justify-end bg-[#182638] p-8 sm:p-10"><span className="text-sm font-medium text-blue-200">Selected project</span><span className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</span></div>}
        {status && (
          <span
            className={`absolute right-3 top-3 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md transition-all ${
              status === "Completed"
                ? "border-emerald-500/30 bg-black/60 text-emerald-400"
                : "border-orange-500/30 bg-black/60 text-orange-400"
            }`}
          >
            {status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>

        <p className="mt-3 max-w-prose text-sm leading-7 text-white/70">{description}</p>

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

        <div className="mt-auto flex flex-wrap items-center gap-6 pt-7">
          {live && <a href={live} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${title}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-blue-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
            Live demo <Icon icon="tabler:arrow-up-right" className="text-lg" />
          </a>}
          {github && <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`Source code for ${title}`} className="inline-flex min-h-11 items-center gap-2 text-sm text-white/70 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
            <Icon icon="tabler:brand-github" className="text-lg" /> Source code
          </a>}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
