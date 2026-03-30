import { Icon } from "@iconify/react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Work Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0b0b10]/40 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a
          href="#"
          className="text-white font-bold text-lg sm:text-xl tracking-tight flex items-center gap-1"
        >
          <span className="text-blue-500">&lt;</span>
          Allen
          <span className="text-blue-500">/&gt;</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen((a) => !a)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          <Icon icon={open ? "mdi:close" : "mdi:menu"}/>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b0b10]/70 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 sm:px-8 lg:px-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
