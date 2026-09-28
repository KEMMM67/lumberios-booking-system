import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { Send, Calendar as CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { rooms } from "@/data/rooms";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

// TODO: replace with your real Formspree endpoint (formspree.io -> New Form -> copy the endpoint URL)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const roomOptions = [...rooms.map((r) => r.name), "Not sure yet — help me choose"];
const guestOptions = ["1-2 Guests", "3-4 Guests", "5-6 Guests", "7+ Guests"];

const fieldClass =
  "bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-2 h-auto text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-accent";
const labelClass = "text-xs uppercase tracking-wider text-primary-foreground/70";

const bookingSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  roomType: z.string().min(1, "Please select a room type"),
  guests: z.string().min(1, "Please select number of guests"),
  dateRange: z.custom<DateRange>(
    (val) => {
      const r = val as DateRange | undefined;
      return !!r?.from && !!r?.to;
    },
    { message: "Please select your check-in and check-out dates" },
  ),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  defaultRoom?: string;
}

const BookingForm = ({ defaultRoom }: BookingFormProps) => {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      roomType: defaultRoom && roomOptions.includes(defaultRoom) ? defaultRoom : "",
      guests: "",
      dateRange: undefined,
      message: "",
    },
  });

  async function onSubmit(values: BookingFormValues) {
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: values.name,
          Email: values.email,
          Phone: values.phone,
          "Room Type": values.roomType,
          Guests: values.guests,
          "Check-in": values.dateRange.from ? format(values.dateRange.from, "MMM d, yyyy") : "",
          "Check-out": values.dateRange.to ? format(values.dateRange.to, "MMM d, yyyy") : "",
          Message: values.message || "—",
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      toast.success("Inquiry sent!", {
        description: "Thanks! We'll get back to you shortly to confirm your stay.",
      });
      form.reset();
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again, or reach us directly at hello@lumberios.com.",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-7 space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Name</FormLabel>
              <FormControl>
                <Input className={fieldClass} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Email</FormLabel>
                <FormControl>
                  <Input type="email" className={fieldClass} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" className={fieldClass} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="dateRange"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className={labelClass}>Check-in — Check-out</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      type="button"
                      variant="ghost"
                      className={cn(
                        "w-full justify-start text-left font-normal hover:bg-transparent hover:text-primary-foreground",
                        fieldClass,
                        !field.value?.from && "text-primary-foreground/40",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
                      {field.value?.from ? (
                        field.value.to ? (
                          <>
                            {format(field.value.from, "MMM d, yyyy")} – {format(field.value.to, "MMM d, yyyy")}
                          </>
                        ) : (
                          format(field.value.from, "MMM d, yyyy")
                        )
                      ) : (
                        <span>Select your dates</span>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="range"
                    selected={field.value}
                    onSelect={field.onChange}
                    numberOfMonths={1}
                    disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="roomType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Room Type</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger
                      className={cn(
                        fieldClass,
                        "[&>span]:text-primary-foreground data-[placeholder]:[&>span]:text-primary-foreground/40",
                      )}
                    >
                      <SelectValue placeholder="Select a room" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {roomOptions.map((r) => (
                      <SelectItem key={r} value={r}>
                        {r}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="guests"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Guests</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger
                      className={cn(
                        fieldClass,
                        "[&>span]:text-primary-foreground data-[placeholder]:[&>span]:text-primary-foreground/40",
                      )}
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {guestOptions.map((g) => (
                      <SelectItem key={g} value={g}>
                        {g}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Message (optional)</FormLabel>
              <FormControl>
                <Textarea rows={3} className={cn(fieldClass, "resize-none min-h-0")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="group inline-flex items-center gap-2 px-6 py-3 h-auto rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent hover:shadow-glow transition-smooth disabled:opacity-60"
        >
          {form.formState.isSubmitting ? "Sending..." : "Send Inquiry"}
          <Send className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;
