import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Amenities from "@/components/Amenities";
import WelcomeBook from "@/components/WelcomeBook";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import { useReveal } from "@/hooks/useReveal";

const Home = () => {
  useReveal();
  return (
    <main>
      <Hero />
      <Amenities />
      <WelcomeBook />
      <Gallery />
      <Faq />

      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            Ready to plan your <span className="italic text-accent">beachfront escape?</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/rooms"
              className="px-7 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-smooth"
            >
              View Rooms
            </Link>
            <Link
              to="/booking"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold shadow-glow hover:scale-105 transition-bounce"
            >
              Book Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
