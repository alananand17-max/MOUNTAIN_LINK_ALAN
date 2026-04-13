import { motion } from "framer-motion";

const stats = [
  { value: "$450–560M", label: "Total Addressable Market", sub: "Calgary–Vancouver corridor" },
  { value: "55,000+", label: "Driver Shortage", sub: "Across Canada by 2024" },
  { value: "<12 hrs", label: "Transit Time", sub: "Same-day delivery" },
  { value: "4", label: "Relay Hubs", sub: "Golden, Revelstoke, Kamloops, Hope" },
];

const KeyStats = () => (
  <section className="py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="text-4xl font-extrabold text-gradient">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default KeyStats;
