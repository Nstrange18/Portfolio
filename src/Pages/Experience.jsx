import { motion as Motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Full-Stack Developer",
      company: "FocusGrid",
      duration: "August 2026 - Present",
      employment: "Six-month contract",
      description: "Own full-stack development of Delobie using React, TypeScript and NestJS. Contribute to product design, integrate Clerk and Resend, and deploy to Vercel and Render.",
    },
    {
      id: 2,
      role: "Frontend Tutor",
      company: "Grid Academy | FocusGrid",
      duration: "July 2026 - Present",
      description: "Teach four students HTML, CSS, JavaScript, React and Tailwind CSS, helping them build their frontend development skills.",
    },
    {
      id: 3,
      role: "Full-Stack Development Intern",
      company: "Tenece Professional Services",
      duration: "June - November 2025",
      employment: "Industrial training",
      description: "Applied React and full-stack development skills during an industrial training placement.",
    },
  ];
  const education = [
    { title: "B.Sc. Computer Science", institution: "University of Nigeria, Nsukka", date: "Graduated November 2026" },
    { title: "Computer Programming Coursework", institution: "Aptech Education Center", date: "Completed 2022" },
  ];

  return (
    <section id="experience" className="relative scroll-mt-24 overflow-hidden border-t border-white/10 py-20 sm:py-24">
      <div className="absolute inset-0 bg-[#0b0b10]" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-white/15" />
          <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Experience
          </h2>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-4 sm:ml-6">
          {experiences.map((exp, i) => (
            <Motion.div
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
              {exp.employment && (
                <p className="mb-3 text-sm text-blue-200">{exp.employment}</p>
              )}
              <p className="text-white/60 text-sm leading-relaxed">
                {exp.description}
              </p>
            </Motion.div>
          ))}
        </div>
        <div className="mt-16 border-t border-white/10 pt-10">
          <h3 className="text-2xl font-semibold tracking-tight text-white">Education & training</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {education.map((item) => <div key={item.title}><h4 className="font-medium text-white/90">{item.title}</h4><p className="mt-2 text-sm text-white/65">{item.institution}</p><p className="mt-2 text-sm text-white/45">{item.date}</p></div>)}
          </div>
          <p className="mt-6 text-sm leading-7 text-white/50">Additional training: Blockchain UNN Full Stack Bootcamp (2025); SoloLearn HTML, CSS and JavaScript certificates.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
