import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Truck, Clock } from "lucide-react";

const HeroSection = () => (
  <section className="gradient-hero relative overflow-hidden py-20 sm:py-28 lg:py-36">
    {/* Background decorative elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-secondary blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-secondary blur-3xl" />
    </div>

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm text-secondary">
            <Truck className="h-4 w-4" />
            Calgary ↔ Vancouver Relay Freight
          </div>
        </motion.div>

        <motion.h1
          className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Same-Day Calgary to Vancouver.{" "}
          <span className="text-gradient">Every Driver Home Nightly.</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          MountainLink's relay model splits the 1,050 km corridor into optimized legs.
          Freight moves non-stop. Drivers stay local. Everyone wins.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
            <Link to="/for-shippers">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/for-operators">
              Join Our Network
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium">Sub-12 Hour Transit</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium">4 Relay Hubs</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl text-secondary">🏠</span>
            <span className="text-sm font-medium">Drivers Home Every Night</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
