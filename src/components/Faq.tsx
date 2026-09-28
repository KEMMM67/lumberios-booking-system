import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What time is check-in and check-out?", a: "[Insert check-in and check-out times]" },
  { q: "Are pets allowed?", a: "[Insert pet policy]" },
  {
    q: "What is your cancellation and refund policy?",
    a: "All payments are non-refundable, and we do not offer cancellations or refunds. If you're unable to make it, rebooking is allowed at least 2 weeks before your scheduled date.",
  },
  {
    q: "Is a deposit required to confirm a booking?",
    a: "Yes — a 50% deposit is required to secure your reservation. Please note that a no-show will result in forfeiture of the deposit.",
  },
  { q: "What is the minimum length of stay?", a: "[Insert minimum stay policy, if any]" },
  {
    q: "What payment methods do you accept?",
    a: "We accept GCash and BPI bank transfer. Please send a screenshot of your payment receipt for verification and confirmation.",
  },
  { q: "Is parking available on-site?", a: "[Insert parking details]" },
  { q: "Can I bring outside food and drinks?", a: "[Insert outside food & drink policy]" },
];

const Faq = () => {
  return (
    <section id="faq" className="py-24 bg-muted/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">Good to Know</div>
          <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">
            Frequently Asked <span className="italic">Questions.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know before you book. Still curious?{" "}
            <Link to="/booking" className="text-accent font-medium hover:underline">
              Reach out
            </Link>{" "}
            and we'll help.
          </p>
        </div>

        <div className="max-w-3xl mx-auto reveal">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="rounded-2xl border border-border bg-card px-6 md:px-8"
          >
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border last:border-b-0">
                <AccordionTrigger className="text-left font-display text-lg text-primary hover:no-underline hover:text-accent">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
