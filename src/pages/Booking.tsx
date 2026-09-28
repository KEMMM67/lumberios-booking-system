import { useSearchParams } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import { useReveal } from "@/hooks/useReveal";

const Booking = () => {
  useReveal();
  const [searchParams] = useSearchParams();
  const defaultRoom = searchParams.get("room") ?? undefined;

  return (
    <main className="bg-primary text-primary-foreground pt-32 pb-24">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 reveal">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">Get in Touch</div>
            <h1 className="font-display text-4xl md:text-5xl leading-tight">
              Ready for your <span className="italic text-accent">escape?</span>
            </h1>
            <p className="mt-4 text-primary-foreground/75 max-w-lg">
              Send us a message or visit us by the shore. Our team is ready to plan your perfect stay.
            </p>

            <div className="mt-10 rounded-2xl overflow-hidden shadow-elegant border border-white/10 h-72">
              <iframe
                title="Lumberio's location"
                src="https://www.google.com/maps?q=Quezon%20Province%20Philippines&output=embed"
                className="h-full w-full grayscale-[30%]"
                loading="lazy"
              />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 text-sm">
              <a
                className="flex items-center gap-3 text-primary-foreground/85 hover:text-accent transition-smooth"
                href="https://www.google.com/maps?q=Quezon%20Province%20Philippines"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="h-4 w-4 text-accent" /> Beachfront, Quezon Province, Philippines
              </a>
              <a className="flex items-center gap-3 text-primary-foreground/85 hover:text-accent transition-smooth" href="tel:+639000000000">
                <Phone className="h-4 w-4 text-accent" /> +63 900 000 0000
              </a>
              <a className="flex items-center gap-3 text-primary-foreground/85 hover:text-accent transition-smooth" href="mailto:hello@lumberios.com">
                <Mail className="h-4 w-4 text-accent" /> hello@lumberios.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <BookingForm defaultRoom={defaultRoom} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Booking;
