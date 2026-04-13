import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jagjeet S.",
    role: "Owner-Operator, 3 trucks",
    quote: "I can't afford sleeper cabs for every truck. If I could run day cabs on relay legs and be home every night? That changes everything for my family and my business.",
  },
  {
    name: "Dave M.",
    role: "Livestock Transporter",
    quote: "Livestock can't wait in a parking lot for 10 hours. Relay freight means my loads keep moving and the animals arrive healthy. That's worth paying a premium for.",
  },
  {
    name: "Vivek R.",
    role: "Fleet Manager, Large Carrier",
    quote: "Driver retention is my biggest problem. Offering home-daily runs on the busiest corridor in Western Canada would be a game-changer for recruitment.",
  },
];

const Testimonials = () => (
  <section className="py-20 bg-muted/50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">From the Industry</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Real insights from operators on the Calgary–Vancouver corridor
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-secondary/30 mb-4" />
                <p className="text-sm text-foreground italic leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 border-t pt-4">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
