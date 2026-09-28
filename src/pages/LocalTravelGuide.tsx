import { Plane, Car, Utensils, ShoppingBag, Landmark, Info } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const gettingThere = [
  {
    icon: Plane,
    title: "By Air",
    text: "Fly into [Insert nearest airport name], then continue by land transport to the resort — about [Insert travel time] from the airport.",
  },
  {
    icon: Car,
    title: "By Land",
    text: "From [Insert nearest major city/terminal], buses and vans bound for Quezon Province depart regularly. The resort is roughly [Insert travel time] from the terminal.",
  },
];

const attractions = [
  { title: "[Insert nearby attraction #1]", text: "[Insert short description and distance from the resort]" },
  { title: "[Insert nearby attraction #2]", text: "[Insert short description and distance from the resort]" },
  { title: "[Insert nearby attraction #3]", text: "[Insert short description and distance from the resort]" },
];

const eats = [
  { title: "[Insert local restaurant/eatery #1]", text: "[Insert cuisine type and distance from the resort]" },
  { title: "[Insert local restaurant/eatery #2]", text: "[Insert cuisine type and distance from the resort]" },
  { title: "[Insert public market or grocery]", text: "[Insert distance and what's available there]" },
];

const tips = [
  "[Insert guidance on local transport options, e.g. tricycle or habal-habal rates]",
  "[Insert best time of year to visit]",
  "[Insert what to pack or bring]",
  "[Insert nearest ATM or currency exchange location]",
];

const LocalTravelGuide = () => {
  useReveal();

  return (
    <main className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container">
        <div className="max-w-2xl mb-16 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">Plan Your Trip</div>
          <h1 className="font-display text-4xl md:text-5xl text-primary leading-tight">
            Your local <span className="italic">travel guide.</span>
          </h1>
          <p className="mt-5 text-muted-foreground text-lg">
            Everything you need to plan your journey to Lumberio's — how to get here, what's nearby, and a few
            tips for making the most of your visit.
          </p>
        </div>

        <section className="mb-16 reveal">
          <h2 className="font-display text-2xl md:text-3xl text-primary mb-6">Getting There</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {gettingThere.map((g) => (
              <div key={g.title} className="p-6 rounded-2xl border border-border bg-card">
                <div className="h-11 w-11 rounded-xl gradient-ocean flex items-center justify-center mb-4">
                  <g.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-display text-lg text-primary">{g.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{g.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-6">
            <Landmark className="h-5 w-5 text-accent" />
            <h2 className="font-display text-2xl md:text-3xl text-primary">Nearby Attractions</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {attractions.map((a) => (
              <div key={a.title} className="p-6 rounded-2xl border border-border bg-card">
                <h3 className="font-display text-lg text-primary">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{a.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-6">
            <Utensils className="h-5 w-5 text-accent" />
            <h2 className="font-display text-2xl md:text-3xl text-primary">Local Eats & Markets</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {eats.map((e) => (
              <div key={e.title} className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex items-start gap-2">
                  <ShoppingBag className="h-4 w-4 text-accent mt-1 shrink-0" />
                  <div>
                    <h3 className="font-display text-lg text-primary">{e.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{e.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <Info className="h-5 w-5 text-accent" />
            <h2 className="font-display text-2xl md:text-3xl text-primary">Good to Know</h2>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <ul className="space-y-3 text-sm text-muted-foreground">
              {tips.map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LocalTravelGuide;
