import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "2026 - Present",
      description: "Building and deploying full-stack websites for various clients, managing everything from styling to database schemas.",
    },
    {
      id: 2,
      role: "Web Developer Intern",
      company: "Tenece Professional Services",
      duration: "Mid 2025 - Early 2026",
      description: "Developing scalable React applications and translating UI/UX designs into responsive, interactive code.",
    },
    {
      id: 3,
      role: "Computer Science",
      company: "University of Nsukka, Enugu",
      duration: "2022 - Present",
      description: "Currently pursuing my degree, participating in multiple hackathons, and building foundational knowledge in algorithms and software engineering.",
    },
    {
      id: 4,
      role: "Frontend developer (Student)",
      company: "Aptech Computer Education, Enugu Center",
      duration: "2021 - 2022",
      description: "Learned the fundamentals of web development, including HTML, CSS, JavaScript, and responsive design."
    }
  ];

  return (
    <section id="experience" className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-[#0b0b10]" />
      
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-white/15" />
          <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Experience & Education
          </h2>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-4 sm:ml-6">
          {experiences.map((exp, i) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-[#0b0b10] bg-white ring-4 ring-white/10" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-sm font-medium text-white/50 bg-white/5 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 border border-white/5">
                  {exp.duration}
                </span>
              </div>
              
              <h4 className="text-white/80 font-medium mb-3">{exp.company}</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;