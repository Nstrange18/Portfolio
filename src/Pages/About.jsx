import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 sm:py-10"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-130 w-70 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              About Me
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              I'm <span className="font-semibold text-white">NWUBA ALLEN</span>, a
              passionate Full-Stack MERN Developer. I specialize in creating clean, responsive user
              interfaces and building scalable backend APIs using Node.js and
              Express. My goal is to deliver seamless digital experiences that
              combine aesthetic design with robust functionality.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["React", "Tailwind", "Node.js", "Express", "MongoDB"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-full blur-2xl" />

              <img
                src="/Me.webp"
                alt="Nwuba Allen"
                className="relative h-56 w-56 rounded-full object-cover ring-1 ring-white/15 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
