import { useState } from "react";
import { motion as Motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import FeaturedProject from "../components/FeaturedProject";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const reduceMotion = useReducedMotion();

  const projectData = [
    {
      title: "CampusAid",
      caseStudy: {
        role: "Full-stack development",
        problem: "Students with disabilities need a way to request support while keeping eligibility documents private.",
        solution: "Built request submission, administrator verification, approved public campaigns and contribution records for students, administrators and donors.",
        decision: "Kept authorization, eligibility checks and private-file access in the FastAPI backend, with PostgreSQL and SQLAlchemy for relational data. Contributions record external payments rather than executing transfers.",
      },
      status: "Completed",
      image: "/campus-aid-preview.png",
      github: "https://github.com/Nstrange18/CampusAid",
      live: "https://campus-aid-psi.vercel.app/",
      description: "A student support platform connecting students with disabilities, university administrators, and donors through verified fundraising requests.",
      tech: ["React", "Tailwind", "FastAPI", "SQLAlchemy", "PostgreSQL"],
      category: "Full-Stack",
    },
    {
      title: "HostelAssess",
      caseStudy: {
        role: "Full-stack development",
        problem: "Hostel feedback and complaints need a consistent submission process and a clear route for administrator follow-up.",
        solution: "Built student assessment and complaint flows, submission history, and administrator dashboards for reviewing feedback and updating complaint status.",
        decision: "Enforced one assessment per student, hostel and academic session through a compound MongoDB index, with the API assigning identity and session values.",
      },
      status: "Completed",
      image: "/hostelassess-preview.png",
      github: "https://github.com/Nstrange18/HostelAssess",
      live: "https://hostel-assess.vercel.app/",
      description: "A hostel feedback platform where students submit assessments and complaints, and administrators review feedback and manage follow-up across the institution.",
      tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
      category: "Full-Stack",
    },
    {
      title: "SmartTask",
      description:
        "Task & project management app with authentication and dashboards.",
      tech: ["React", "Node", "MongoDB"],
      image: "/smarttask-preview.webp",
      github: "https://github.com/Nstrange18/Smarttask",
      live: "https://smarttask-nu.vercel.app/",
      category: "Full-Stack",
      status: "Completed",
    },
    {
      title: "CampusSpot",
      description:
        "Student housing platform with listings and search functionality.",
      tech: ["React", "Node", "MongoDB"],
      image: "/campusspot-preview.webp",
      github: "https://github.com/Nstrange18/CampusSpot",
      live: "https://campus-spot-lac.vercel.app/",
      category: "Full-Stack",
      status: "Pending",
    },
    {
      title: "Biru",
      description:
        "Responsive website with working contact flow using EmailJS.",
      tech: ["React", "Tailwind", "EmailJS"],
      image: "/biru-preview.webp",
      github: "https://github.com/Nstrange18/Biru-app",
      live: "https://biru-app.vercel.app/",
      category: "Front-End",
      status: "Completed",
    },
    {
      title: "COFFLAVOUR",
      description:
        "Responsive website for a coffee shop.",
      tech: ["React", "Vanilla", "MOCK API"],
      image: "/Cofflavour.webp",
      github: "http://github.com/Nstrange18/Cofflavour",
      live: "https://cofflavour-q6sj.vercel.app/",
      category: "Front-End",
      status: "Completed",
    },
    {
      title: "VowLink",
      caseStudy: {
        role: "Full-stack development",
        problem: "Couples need to coordinate invitations, guest responses and seating without scattering the work across separate tools.",
        solution: "Built customisable invitations, guest management, RSVP tracking, seating and check-in, with couple dashboards and manual reminders.",
        decision: "Used a React interface with an Express API and MongoDB. Transaction-backed event creation keeps related records consistent when setting up an event.",
      },
      description:
        "A wedding planning application bringing invitations, guest management, RSVP tracking and seating plans into one workspace.",
      tech: ["React", "Tailwind", "Node", "MongoDB"],
      image: "/vow-link-preview.png",
      github: "https://github.com/Nstrange18/VowLink",
      live: "https://vow-link-dxj5.vercel.app/",
      category: "Full-Stack",
      status: "Pending",
    },
    {
      title: "Delobie",
      image: "/delobie-preview.png",
      description:
        "An event discovery and management platform in development, with authenticated accounts, location-based event search, interest filters, and recently viewed events.",
      tech: ["React", "TypeScript", "NestJS", "MongoDB", "Clerk"],
      category: "Full-Stack",
      status: "Pending",
    },
    {
      title: "DearScene",
      image: "/dearscene-preview.png",
      description:
        "A celebration story builder in development, with customisable templates, photo and video editing, saved drafts, creator accounts, and shareable stories.",
      tech: ["React", "TypeScript", "Tailwind", "Supabase", "Cloudinary"],
      category: "Full-Stack",
      status: "Pending",
    },
  ];

  const filters = ["All", "Full-Stack", "Front-End", "Completed", "Pending"];

  const featuredProjects = ["CampusAid", "VowLink", "HostelAssess"].map(
    (title) => projectData.find((project) => project.title === title)
  );
  const otherProjects = projectData.filter((project) => !project.caseStudy);
  const filteredProjects = otherProjects.filter((project) =>
    activeFilter === "All" || project.category === activeFilter || project.status === activeFilter
  );

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-[#0b0b10]/80" />

      <div className="pointer-events-none absolute -right-40 top-10 h-130 w-130 rounded-full  blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-55 h-130 w-130 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium text-blue-200">Selected work</p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Selected projects, built end to end.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/65">Three applications that show how I approach interfaces, backend systems and the workflows between them.</p>
        </div>

        <div className="mt-10 space-y-8">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.title} project={project} number={index + 1} />
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-12">
          <h3 className="text-2xl font-semibold tracking-tight text-white">More work & projects in development</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">A wider collection of applications and websites. Pending projects are still in development; their screenshots show work in progress.</p>
        </div>
        {/* Filter the wider collection without hiding the featured case studies. */}
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter more projects">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`min-h-11 cursor-pointer rounded-lg px-5 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 ${
                activeFilter === filter
                  ? "bg-white text-black"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <p className="mt-5 text-sm text-white/50" role="status">{filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} in this collection</p>
        <Motion.div
          layout={!reduceMotion}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
        >
          {filteredProjects.length === 0 && <p className="py-8 text-sm text-white/60">No projects in this collection match this filter.</p>}
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <Motion.div
                key={project.title}
                layout={!reduceMotion}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
              >
                <ProjectCard {...project} />
              </Motion.div>
            ))}
          </AnimatePresence>
        </Motion.div>
      </div>
    </section>
  );
};

export default Projects;
