const links = [
  { href: "https://github.com/Nstrange18", label: "GitHub" },
  { href: "https://www.linkedin.com/in/nwuba-allen-96941230b/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p className="text-sm text-white/45">© {new Date().getFullYear()} Nwuba Allen</p>
        <div className="flex flex-wrap items-center gap-6 text-sm text-white/65">
          {links.map(({ href, label }) => <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center hover:text-white">{label}</a>)}
          <a href="#home" className="inline-flex min-h-11 items-center hover:text-white">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
