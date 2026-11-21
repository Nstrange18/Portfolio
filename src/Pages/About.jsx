const skills = [
  { title: "Interface development", tools: "React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query" },
  { title: "APIs and data", tools: "Node.js, Express, NestJS, MongoDB, Supabase" },
  { title: "Delivery and collaboration", tools: "Git, GitHub, Vercel, Render, Cloudflare, API documentation" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/10 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
        <div>
          <img src="/Me.webp" alt="Nwuba Allen" width="112" height="112" loading="lazy" className="h-28 w-28 rounded-2xl object-cover ring-1 ring-white/15" />
          <p className="mt-7 text-sm font-medium text-blue-200">About & skills</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">A developer who sees the whole product.</h2>
        </div>
        <div>
          <p className="max-w-prose text-base leading-8 text-white/70">I'm Allen, a Computer Science graduate and full-stack developer. I own development of Delobie at FocusGrid and teach frontend development through Grid Academy. My work spans student support platforms, wedding planning tools and storytelling experiences.</p>
          <p className="mt-4 max-w-prose text-base leading-8 text-white/60">I work across UI development, authentication, backend APIs and deployment, with attention to how people use the finished application.</p>
          <dl className="mt-8 divide-y divide-white/10 border-t border-white/10">
            {skills.map(({ title, tools }) => <div key={title} className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr]"><dt className="text-sm font-medium text-white/90">{title}</dt><dd className="text-sm leading-7 text-white/55">{tools}</dd></div>)}
          </dl>
        </div>
      </div>
    </section>
  );
}
