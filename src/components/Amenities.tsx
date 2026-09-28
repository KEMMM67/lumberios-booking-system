import { Waves, Home, UtensilsCrossed, PartyPopper, Sun, Wifi } from "lucide-react";
import infinityPool from "@/assets/infinity-pool.jpg";
import poolRelax from "@/assets/pool-relax.jpg";
import poolSign from "@/assets/pool-signage.jpg";

const amenities = [
  { icon: Waves, title: "Infinity Pools", desc: "Beachfront pools that blend with the horizon." },
  { icon: Home, title: "Cozy Cottages", desc: "Private cottages just steps from the sand." },
  { icon: PartyPopper, title: "Event Halls", desc: "Perfect venues for weddings and gatherings." },
  { icon: UtensilsCrossed, title: "Seaside Dining", desc: "Fresh local seafood with an ocean view." },
  { icon: Sun, title: "Sunset Decks", desc: "Curated viewing spots for golden hour." },
  { icon: Wifi, title: "Modern Comfort", desc: "Wi-Fi, AC, and amenities throughout." },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">The Resort</div>
          <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
            Everything you need for an <span className="italic">unforgettable</span> stay.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From oceanfront infinity pools to sunset cocktails, Lumberio's blends comfort,
            nature, and authentic Filipino hospitality.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Feature image - [AUTO_ASSIGN: "Infinity pool overlooking the sea"] */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden h-[460px] reveal group">
            <img src={infinityPool} alt="Infinity pool" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
            <div className="absolute inset-0 gradient-overlay" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="text-xs uppercase tracking-[0.25em] text-accent">Signature</div>
              <h3 className="font-display text-3xl mt-2">Beachfront Infinity Pool</h3>
              <p className="mt-2 text-white/85 max-w-md">Where the pool's edge dissolves into the open sea.</p>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* [AUTO_ASSIGN: "Resort signage with pool"] */}
            <div className="relative rounded-3xl overflow-hidden h-56 reveal group">
              <img src={poolSign} alt="Resort pool" className="h-full w-full object-cover transition-smooth group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-smooth" />
            </div>
            {/* [AUTO_ASSIGN: "Guest relaxing by the pool"] */}
            <div className="relative rounded-3xl overflow-hidden h-56 reveal group">
              <img src={poolRelax} alt="Pool relaxation" className="h-full w-full object-cover transition-smooth group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-smooth" />
            </div>
          </div>
        </div>

        {/* Icon grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {amenities.map((a, i) => (
            <div
              key={a.title}
              className="reveal group p-7 rounded-2xl border border-border bg-card hover:border-accent hover:-translate-y-1 hover:shadow-elegant transition-smooth"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="h-12 w-12 rounded-xl gradient-ocean flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                <a.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display text-xl text-primary">{a.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
