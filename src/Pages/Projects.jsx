import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const reduceMotion = useReducedMotion();

  const projectData = [
    {
      title: "Campus Aid",
      status: "Completed",
      image: "/campus-aid-preview.png",
      github: "https://github.com/Nstrange18/CampusAid",
      description: "A student support platform connecting students with disabilities, university administrators, and donors through verified fundraising requests.",
      tech: ["React", "Tailwind", "Python", "FastAPI", "SQLAlchemy"],
      category: "Full-Stack",
    },
    {
      title: "HostelAssess",
      status: "Completed",
      image: "/hostelassess-preview.png",
      github: "https://github.com/Nstrange18/HostelAssess",
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
      title: "VOWLINK",
      description:
        "Wedding planning app with guest list and RSVP management features.",
      tech: ["React", "Tailwind", "Node", "MongoDB"],
      image: "/vow-link-preview.png",
      github: "https://github.com/Nstrange18/VowLink",
      live: "https://vow-link-dxj5.vercel.app/",
      category: "Full-Stack",
      status: "Pending",
    }
  ];

  const filters = ["All", "Full-Stack", "Front-End", "Completed", "Pending"];

  const filteredProjects = projectData.filter((project) => 
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
            Ideas built into working products.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/65">From student support to everyday tools, a selection of applications I've built for real tasks.</p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
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

        <motion.div 
          layout={!reduceMotion}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout={!reduceMotion}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
