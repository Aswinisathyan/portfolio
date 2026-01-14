export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-background/70 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-primary">AS</span>
        <div className="hidden md:flex gap-6 text-muted">
          {["About","Skills","Projects","Education","Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
