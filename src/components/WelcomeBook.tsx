import { Link } from "react-router-dom";
import { Sparkles, Sun, Heart, Users, MapPin, Waves, ArrowRight } from "lucide-react";
import sunset from "@/assets/sunset.jpg";

const WelcomeBook = () => {
  const highlights = [
    { icon: Sparkles, title: "Slow Down", text: "Barefoot mornings, ocean breeze, and nowhere you need to be." },
    { icon: Sun, title: "Golden Hour, Every Day", text: "Sunset views that turn an ordinary evening into a memory." },
    { icon: Heart, title: "Warm Filipino Hospitality", text: "Genuine, attentive service that makes you feel like family." },
    { icon: Users, title: "Made for Togetherness", text: "The perfect backdrop for reunions, celebrations, and quiet escapes." },
  ];

  const chips = [
    { icon: MapPin, text: "Beachfront, Quezon" },
    { icon: Waves, text: "Infinity Pools" },
    { icon: Sun, text: "Golden Sunsets" },
  ];

  return (
    <section id="welcome-book" className="py-24 bg-gradient-to-br from-secondary/40 via-background to-muted/40 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: phone mockup */}
          <div className="lg:col-span-5 reveal">
            <div className="relative mx-auto max-w-[320px]">
              <div className="relative rounded-[2.5rem] border-[8px] border-primary/90 bg-primary/90 p-3 shadow-elegant">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-primary/90 rounded-b-xl z-10" />
                <div className="relative rounded-[2rem] overflow-hidden bg-white aspect-[9/16]">
                  <img
                    src={sunset}
                    alt="Sunset view at Lumberio's Travel Inn & Beach Resort"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-5">
                    <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">Beachfront Escape</div>
                    <h3 className="font-display text-2xl text-white leading-tight mb-2">Lumberio's</h3>
                    <div className="space-y-2">
                      {chips.map((c) => (
                        <div key={c.text} className="flex items-center gap-2 text-white/90 text-sm bg-white/10 backdrop-blur rounded-lg px-3 py-2">
                          <c.icon className="h-3.5 w-3.5 text-accent" />
                          {c.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-accent/20 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
            </div>
          </div>

          {/* Right: content */}
          <div className="lg:col-span-7 reveal" style={{ transitionDelay: "100ms" }}>
            <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">The Experience</div>
            <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
              Every stay starts with a <span className="italic">warm welcome.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-xl">
              From the moment you arrive, Lumberio's is built around one idea — helping you slow down.
              Ocean breezes, golden sunsets, and genuine Filipino hospitality make every visit feel less
              like a getaway and more like coming home.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border hover:border-accent hover:-translate-y-1 transition-smooth"
                >
                  <div className="h-10 w-10 rounded-xl gradient-ocean flex items-center justify-center shrink-0">
                    <h.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground leading-snug">{h.title}</div>
                    <p className="text-sm text-muted-foreground mt-0.5 leading-snug">{h.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Whether it's a weekend escape, a family reunion, or your next celebration — we'll make sure it's unforgettable.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/rooms"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold shadow-glow hover:scale-105 transition-bounce"
              >
                Explore Rooms
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Link>
              <Link
                to="/booking"
                className="px-7 py-3.5 rounded-full border border-primary/20 text-primary hover:bg-primary/5 transition-smooth"
              >
                Plan Your Stay
              </Link>
            </div>
          </div>
        </div>

        {/* Reservation & Payment Policies */}
        <div className="mt-20 reveal">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">
              Reservation & Payment
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-primary leading-tight">
              How to <span className="italic">book your stay.</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Booking Policy */}
            <div className="rounded-2xl bg-card border border-border p-7">
              <h4 className="font-display text-xl text-primary mb-4">Booking Policy</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>A 50% deposit is required to secure your booking.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>All payments are non-refundable.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>No cancellations and no refunds.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>Rebooking is allowed at least 2 weeks before your scheduled date.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>A no-show will result in forfeiture of your deposit.</span>
                </li>
              </ul>
            </div>

            {/* Mode of Payment */}
            <div className="rounded-2xl bg-card border border-border p-7">
              <h4 className="font-display text-xl text-primary mb-4">Mode of Payment</h4>
              <div className="space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-accent font-semibold">GCash</div>
                  <div className="text-sm text-foreground mt-1">Elmer E. Lumberio</div>
                  <div className="text-sm text-muted-foreground">0948-5436-177</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-accent font-semibold">BPI</div>
                  <div className="text-sm text-foreground mt-1">Evelyn E. Lumberio</div>
                  <div className="text-sm text-muted-foreground">0649-1351-48</div>
                </div>
              </div>
              <p className="mt-5 text-xs text-muted-foreground italic">
                Kindly send a screenshot of your payment receipt for verification and confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBook;
