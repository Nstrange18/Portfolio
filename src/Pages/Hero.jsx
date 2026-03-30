import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-130 w-130 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-55 top-24 h-130 w-130 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.10),transparent_55%),radial-gradient(ellipse_at_center,rgba(0,0,0,0.35),transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="mb-18 h-0.5 w-70 bg-white/60" />

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              NWUBA ALLEN
            </h1>

            <p className="mt-4 text-lg text-white/70 sm:text-xl">
              <span className="text-blue-300">Full-Stack MERN Developer</span>
            </p>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg">
              I build clean, responsive UIs and back them with scalable Node/Express APIs.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-blue-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-3 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Contact Me
              </a>
            </div>

            <p className="mt-8 text-sm text-white/45 sm:text-base">
              React • Tailwind • Node • Express • MongoDB • JWT
            </p>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="pointer-events-none absolute -bottom-10 left-0 right-0 mx-auto h-0.5 max-w-155 bg-white/10" />

            <div className="relative w-full max-w-155">
              <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-blue-500/10 blur-2xl" />
              <img
                src="/laptop.png"
                alt="Project preview on laptop"
                className="relative w-full select-none drop-shadow-2xl"
                draggable="false"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
