import { Link } from "react-router-dom";
import heroBeach from "@/assets/hero-beach.jpg";
import poolBeachview from "@/assets/pool-beachview.jpg";
import sunset from "@/assets/sunset.jpg";
import { ArrowRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image - [AUTO_ASSIGN: "Wide beach shot with palm tree and shoreline"] */}
      <div className="absolute inset-0">
        <img
          src={heroBeach}
          alt="Beachfront at Lumberio's Resort"
          className="h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-12 gap-10 items-center pt-28 pb-20">
        <div className="lg:col-span-7 text-white animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-[0.22em] mb-6">
            <MapPin className="h-3.5 w-3.5" /> Beachfront · Quezon, Philippines
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-balance">
            Where the ocean <br />
            <span className="italic text-accent">meets serenity.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 leading-relaxed">
            Wake to the sound of waves, swim in infinity pools that touch the sea,
            and end every day with a sunset worth remembering at Lumberio's
            Travel Inn & Beach Resort.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/rooms"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold shadow-glow hover:scale-105 transition-bounce"
            >
              View Rooms
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
            </Link>
            <a
              href="#amenities"
              className="px-7 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-smooth"
            >
              Explore Resort
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 max-w-md gap-6">
            {[
              ["12+", "Room Types"],
              ["3", "Infinity Pools"],
              ["★ 4.8", "Guest Rating"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-accent">{n}</div>
                <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating image cards */}
        <div className="lg:col-span-5 hidden lg:block relative h-[520px]">
          {/* [AUTO_ASSIGN: "Pool with beach view and resort signage"] */}
          <div className="absolute top-0 right-0 w-72 h-96 rounded-2xl overflow-hidden shadow-elegant animate-float">
            <img src={poolBeachview} alt="Beachfront pool" className="h-full w-full object-cover" />
          </div>
          {/* [AUTO_ASSIGN: "Golden sunset over the sea"] */}
          <div
            className="absolute bottom-0 left-0 w-64 h-80 rounded-2xl overflow-hidden shadow-elegant animate-float"
            style={{ animationDelay: "1.2s" }}
          >
            <img src={sunset} alt="Resort sunset view" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-8 right-6 px-5 py-3 rounded-xl bg-background/95 backdrop-blur shadow-elegant">
            <div className="text-xs text-muted-foreground uppercase tracking-widest">From</div>
            <div className="font-display text-2xl text-primary">₱2,500<span className="text-sm text-muted-foreground"> /night</span></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs uppercase tracking-[0.3em] animate-float">
        Scroll
      </div>
    </section>
  );
};

export default Hero;
