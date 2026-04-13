import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Beef, Building2 } from "lucide-react";

const segments = [
  {
    icon: Truck,
    title: "Mid-Size Carriers",
    description: "Owner-operators and small fleets looking for reliable Calgary–Vancouver runs without the fatigue of 1,050 km solo hauls.",
    example: "Like Jagjeet — runs 3 trucks on the corridor, struggles with HOS and mountain passes in winter.",
  },
  {
    icon: Beef,
    title: "Livestock Transporters",
    description: "Time-critical livestock freight requiring continuous motion with minimal idle time and animal welfare compliance.",
    example: "Like Dave — livestock loads can't sit idle. Relay means animals keep moving humanely.",
  },
  {
    icon: Building2,
    title: "Large Logistics Companies",
    description: "Enterprise shippers needing consistent, weather-resilient delivery with real-time tracking and SLA guarantees.",
    example: "Like Vivek — manages a fleet at a major carrier, values reliability and driver retention.",
  },
];

const CustomerSegments = () => (
  <section className="py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Who We Serve</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Designed for the operators who need it most
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {segments.map((seg, i) => (
          <motion.div
            key={seg.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <seg.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{seg.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{seg.description}</p>
                <p className="mt-4 text-xs italic text-muted-foreground/80 border-l-2 border-secondary/30 pl-3">
                  {seg.example}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CustomerSegments;
