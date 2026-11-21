import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-36 pb-20 sm:px-8 sm:pt-44 sm:pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10">
        <div>
          <p className="text-sm font-medium text-blue-200">Nwuba Allen / Full-stack developer</p>
          <h1 className="mt-6 max-w-3xl text-5xl leading-[1.08] font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">Thoughtful interfaces.<br /><span className="text-white/50">Working products.</span></h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-white/65 sm:text-lg">I build web applications from the interface to the API, using React, TypeScript, Node.js and NestJS. Based in Enugu, Nigeria.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500">Explore my work <Icon icon="tabler:arrow-down-right" aria-hidden="true" /></a>
            <a href="/Nwuba_Allen_Full_Stack_Developer_CV.pdf" download className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5">Download CV <Icon icon="tabler:download" aria-hidden="true" /></a>
          </div>
          <a href="#contact" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-white/55 hover:text-blue-200">Have a role or project in mind? Let's talk <Icon icon="tabler:arrow-up-right" aria-hidden="true" /></a>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-8">
            <img src="/laptop.webp" alt="A preview of my web development work on a laptop" width="800" height="600" fetchPriority="high" className="w-full object-contain" />
            <div className="mt-5 border-t border-white/10 pt-5"><p className="text-sm font-medium text-white/85">From idea to implementation</p><p className="mt-2 text-sm leading-6 text-white/50">Interfaces, authentication, APIs and deployment.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
