import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-10">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-white">
                <img src={logo} alt="Logo" className="h-full w-full object-contain" />
              </div>
              <div className="font-display text-lg">Lumberio's</div>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
              Travel Inn & Beach Resort — beachfront escapes, infinity pools, and warm Filipino hospitality.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-3">Explore</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-accent transition-smooth">Home</Link>
              <Link to="/rooms" className="hover:text-accent transition-smooth">Rooms</Link>
              <Link to="/local-travel-guide" className="hover:text-accent transition-smooth">Local Travel Guide</Link>
              <Link to="/booking" className="hover:text-accent transition-smooth">Book Now</Link>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-3">Contact</div>
            <div className="flex flex-col gap-2 text-sm">
              <a
                className="flex items-center gap-2 text-primary-foreground/85 hover:text-accent transition-smooth"
                href="https://www.google.com/maps?q=Quezon%20Province%20Philippines"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="h-4 w-4 text-accent shrink-0" /> Beachfront, Quezon Province, Philippines
              </a>
              <a className="flex items-center gap-2 text-primary-foreground/85 hover:text-accent transition-smooth" href="tel:+639000000000">
                <Phone className="h-4 w-4 text-accent shrink-0" /> +63 900 000 0000
              </a>
              <a className="flex items-center gap-2 text-primary-foreground/85 hover:text-accent transition-smooth" href="mailto:hello@lumberios.com">
                <Mail className="h-4 w-4 text-accent shrink-0" /> hello@lumberios.com
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-3">Follow</div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/r/1ByCGWBJfA/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 text-xs text-primary-foreground/60 text-center">
          © {new Date().getFullYear()} Lumberio's Travel Inn & Beach Resort. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
