import { Users, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Room } from "@/data/rooms";

interface RoomCardProps {
  room: Room;
  style?: React.CSSProperties;
}

const RoomCard = ({ room, style }: RoomCardProps) => {
  return (
    <article
      style={style}
      className="group rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elegant hover:border-accent hover:-translate-y-1 transition-smooth"
    >
      <div className="flex items-center justify-between">
        <h4 className="font-display text-xl text-primary">{room.name}</h4>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Users className="h-3.5 w-3.5" /> {room.capacity}
        </span>
      </div>
      <div className="mt-3 text-2xl font-semibold text-primary">{room.price}</div>

      <Link
        to={`/booking?room=${encodeURIComponent(room.name)}`}
        className="mt-5 group/btn inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-smooth"
      >
        Book Now
        <ArrowUpRight className="h-4 w-4 group-hover/btn:rotate-45 transition-smooth" />
      </Link>
    </article>
  );
};

export default RoomCard;
