import { motion } from "framer-motion";
import { Package, GitBranch, Home } from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "Load Enters Network",
    description: "Shipper submits a load from Calgary or Vancouver. Our system captures freight type, weight, dimensions, and delivery deadline.",
  },
  {
    icon: GitBranch,
    title: "Algorithm Splits Into Legs",
    description: "Our segmentation engine analyzes weather, HOS, and driver availability to divide the 1,050 km route into optimal relay legs through mountain hubs.",
  },
  {
    icon: Home,
    title: "Drivers Relay Home-Daily",
    description: "Each driver covers their local leg and returns home nightly. Freight keeps moving. No layovers, no fatigue, no idle time.",
  },
];

const HowItWorks = () => (
  <section className="py-20 bg-muted/50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">How MountainLink Works</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A simple 3-step relay that revolutionizes mountain corridor freight
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            className="relative rounded-xl border bg-card p-8 text-center shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
              <step.icon className="h-7 w-7 text-secondary" />
            </div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
              Step {i + 1}
            </div>
            <h3 className="mt-2 text-xl font-semibold text-foreground">{step.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Connecting arrows on desktop */}
      <div className="mt-4 hidden items-center justify-center gap-2 md:flex">
        <div className="h-0.5 w-32 bg-secondary/30" />
        <span className="text-secondary">→</span>
        <div className="h-0.5 w-32 bg-secondary/30" />
        <span className="text-secondary">→</span>
        <div className="h-0.5 w-32 bg-secondary/30" />
      </div>
    </div>
  </section>
);

export default HowItWorks;
