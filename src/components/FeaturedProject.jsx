import { Icon } from "@iconify/react";

export default function FeaturedProject({ project, number }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="flex items-center border-b border-white/10 bg-white/5 p-4 sm:p-6 lg:border-r lg:border-b-0">
          <img src={project.image} alt={project.title + " application preview"} loading="lazy" width="1440" height="900" className="aspect-[16/10] w-full rounded-lg object-contain" />
        </div>
        <div className="flex flex-col p-6 sm:p-9">
          <p className="text-xs font-medium tracking-[0.16em] text-blue-200">0{number} / FEATURED PROJECT</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{project.title}</h3>
          <p className="mt-4 max-w-prose text-sm leading-7 text-white/70">{project.description}</p>
          <p className="mt-5 text-sm text-white/50">{project.caseStudy.role}</p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={project.title + " technologies"}>
            {project.tech.map((tech) => <li key={tech} className="rounded-md bg-white/5 px-3 py-1.5 text-xs text-white/65">{tech}</li>)}
          </ul>
          <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-6">
            {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-blue-200 hover:text-white">Live demo <Icon icon="tabler:arrow-up-right" aria-hidden="true" /></a>}
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-white/65 hover:text-white"><Icon icon="tabler:brand-github" aria-hidden="true" /> Source code</a>
          </div>
        </div>
      </div>
      <details className="group border-t border-white/10">
        <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-sm font-medium text-white/80 hover:bg-white/5 sm:px-9">
          Project case study <Icon icon="tabler:plus" className="shrink-0 transition-transform group-open:rotate-45" aria-hidden="true" />
        </summary>
        <dl className="grid gap-7 px-6 pt-2 pb-8 sm:px-9 lg:grid-cols-3">
          {[["The problem", project.caseStudy.problem], ["What I built", project.caseStudy.solution], ["Technical decision", project.caseStudy.decision]].map(([label, value]) => (
            <div key={label}><dt className="text-sm font-medium text-blue-200">{label}</dt><dd className="mt-3 text-sm leading-7 text-white/65">{value}</dd></div>
          ))}
        </dl>
      </details>
    </article>
  );
}
