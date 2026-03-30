import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="fixed border-t border-white/10 bg-black/10 backdrop-blur bottom-0 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-white/45 sm:px-8 lg:px-10">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Nstrange18"
            target="_blank"
            label="GitHub"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/25"
            rel="noreferrer"
          >
            <Icon icon="simple-icons:github" className="text-xl text-[gainsboro]/50" />
          </a>
          <a
            href="https://www.linkedin.com/in/nwuba-allen-96941230b/"
            target="_blank"
            label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/25"
            rel="noreferrer"
          >
            <Icon
              icon="simple-icons:linkedin"
              className="text-xl text-[gainsboro]/50"
            />
          </a>
          <a
            href="mailto:nwubachukwuemelie@gmail.com"
            target="_blank"
            label="Email"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/25"
            rel="noreferrer"
          >
            <Icon
              icon="tabler:mail"
              className="text-xl text-[gainsboro]/50"
            />
          </a>
        </div>

        <p className="hidden text-sm sm:block">
          React • Tailwind • Node • Express • MongoDB • JWT
        </p>
      </div>
    </div>
  );
};

export default Footer;
