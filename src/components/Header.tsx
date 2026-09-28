import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Rooms", to: "/rooms" },
  { label: "Local Travel Guide", to: "/local-travel-guide" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className={`rounded-full overflow-hidden bg-background transition-smooth ${scrolled ? "h-10 w-10" : "h-12 w-12"}`}>
            <img src={logo} alt="Lumberio's logo" className="h-full w-full object-contain" />
          </div>
          <div className="leading-tight hidden sm:block">
            <div className={`font-display font-semibold transition-smooth ${scrolled ? "text-foreground text-base" : "text-white text-lg"}`}>
              Lumberio's
            </div>
            <div className={`text-[10px] uppercase tracking-[0.18em] ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>
              Travel Inn & Beach Resort
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative text-sm font-medium tracking-wide transition-smooth hover:text-accent ${
                  scrolled ? "text-foreground" : "text-white"
                } after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-accent after:transition-all ${
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/booking"
            className="px-5 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:shadow-glow transition-smooth"
          >
            Book Now
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 text-foreground hover:text-accent">
                {l.label}
              </Link>
            ))}
            <Link to="/booking" onClick={() => setOpen(false)} className="px-5 py-2 rounded-full bg-accent text-accent-foreground text-center font-semibold">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
