import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projectData = [
    {
      title: "SmartTask",
      description:
        "Task & project management app with authentication and dashboards.",
      tech: ["React", "Node", "MongoDB"],
      image: "/smarttask-preview.png",
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
      image: "/campusspot-preview.png",
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
      image: "/biru-preview.png",
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
      image: "/Cofflavour.png",
      github: "http://github.com/Nstrange18/Cofflavour",
      live: "https://cofflavour-q6sj.vercel.app/",
      category: "Front-End",
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
      className="relative overflow-hidden py-16 sm:py-20"
    >
      <div className="absolute inset-0 bg-[#0b0b10]/80" />

      <div className="pointer-events-none absolute -right-40 top-10 h-130 w-130 rounded-full  blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-55 h-130 w-130 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-white/15" />
          <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Projects
          </h2>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`cursor-pointer rounded-full px-6 py-2 text-sm font-medium transition duration-300 ${
                activeFilter === filter
                  ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
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
