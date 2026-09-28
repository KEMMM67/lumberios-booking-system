import RoomCard from "@/components/RoomCard";
import { roomGroups } from "@/data/rooms";
import { useReveal } from "@/hooks/useReveal";

const Rooms = () => {
  useReveal();

  return (
    <main className="pt-32 pb-24 bg-muted/40 min-h-screen">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14 reveal">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">Stay With Us</div>
            <h1 className="font-display text-4xl md:text-5xl text-primary leading-tight">
              Rooms & rates <span className="italic">for every group.</span>
            </h1>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Every room is steps from the shore — choose the perfect space for your escape.
          </p>
        </div>

        <div className="space-y-16">
          {roomGroups.map((group, gi) => (
            <div key={group.id} className="reveal" style={{ transitionDelay: `${gi * 100}ms` }}>
              <div className="mb-6">
                <h2 className="font-display text-2xl md:text-3xl text-primary">{group.title}</h2>
                <p className="text-muted-foreground mt-1 max-w-2xl">{group.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.amenities.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-medium text-primary"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                {group.note && <p className="mt-3 text-xs text-muted-foreground italic">{group.note}</p>}
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {group.rooms.map((r) => (
                  <RoomCard key={r.name} room={r} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Rooms;
