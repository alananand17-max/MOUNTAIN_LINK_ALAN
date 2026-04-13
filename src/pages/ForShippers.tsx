import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Clock, Snowflake, DollarSign, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const benefits = [
  { icon: Clock, title: "Sub-12 Hour Transit", desc: "Same-day Calgary to Vancouver — faster than solo or team drivers." },
  { icon: Shield, title: "Reliability Guarantee", desc: "Relay model eliminates driver fatigue delays and HOS violations." },
  { icon: Snowflake, title: "Winter Resilience", desc: "Adaptive routing through mountain passes — 3-leg or 5-leg based on conditions." },
  { icon: DollarSign, title: "Competitive Rates", desc: "$2.80–3.20/mile with zero idle time and premium SLA options." },
];

const freightTypes = ["Dry Van", "Reefer", "Flatbed", "Livestock"];

const ForShippers = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Quote request submitted! We'll be in touch within 24 hours.");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-primary-foreground sm:text-5xl">
            Ship Faster Across the <span className="text-gradient">Rockies</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Same-day relay freight from Calgary to Vancouver. No driver fatigue, no weather delays, no idle freight.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                      <b.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{b.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Request a Quote</h2>
          {submitted ? (
            <Card>
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-foreground">Quote Request Received</h3>
                <p className="mt-2 text-muted-foreground">Our team will reach out within 24 hours with a custom rate.</p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-foreground">Origin</label>
                      <Input placeholder="e.g., Calgary, AB" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Destination</label>
                      <Input placeholder="e.g., Vancouver, BC" required />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-foreground">Freight Type</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" required>
                        <option value="">Select type...</option>
                        {freightTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Weight (lbs)</label>
                      <Input type="number" placeholder="e.g., 42000" required />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-foreground">Pickup Date</label>
                      <Input type="date" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Company Name</label>
                      <Input placeholder="Your company" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="you@company.com" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Additional Notes</label>
                    <Textarea placeholder="Special requirements, recurring shipments, etc." />
                  </div>
                  <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
                    Submit Quote Request <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForShippers;
