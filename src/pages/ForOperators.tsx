import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Home, DollarSign, Fuel, Shield, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const benefits = [
  { icon: Home, title: "Home Every Night", desc: "No more weeks on the road. Run your local relay leg and return to your family daily." },
  { icon: DollarSign, title: "Day Cab Savings", desc: "Save $40,000–$80,000 by using a day cab instead of a sleeper. Lower insurance, maintenance, and fuel costs." },
  { icon: Fuel, title: "Full Support Package", desc: "GPS tracking, fuel cards, insurance, compliance support, and guaranteed 48-hour payment." },
  { icon: Shield, title: "Steady, Reliable Work", desc: "Consistent daily runs on Canada's busiest freight corridor. No empty miles, no deadhead." },
];

const terminals = ["Calgary, AB", "Golden, BC", "Revelstoke, BC", "Kamloops, BC", "Hope, BC", "Vancouver, BC"];

const ForOperators = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Application submitted! We'll review and contact you within 48 hours.");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="gradient-hero py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-primary-foreground sm:text-5xl">
            Drive Local. <span className="text-gradient">Earn More. Go Home.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Join MountainLink's relay network — consistent daily runs, day cab friendly, home every night.
          </p>
        </div>
      </section>

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
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
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

      {/* Apply Form */}
      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Apply to Join Our Network</h2>
          {submitted ? (
            <Card>
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold text-foreground">Application Received!</h3>
                <p className="mt-2 text-muted-foreground">We'll review your profile and reach out within 48 hours.</p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-foreground">Full Name</label>
                      <Input placeholder="Your name" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <Input type="email" placeholder="you@email.com" required />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-foreground">Phone</label>
                      <Input type="tel" placeholder="(555) 123-4567" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Years of Experience</label>
                      <Input type="number" placeholder="e.g., 5" required />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-foreground">Preferred Home Terminal</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" required>
                        <option value="">Select terminal...</option>
                        {terminals.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">Equipment Type</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" required>
                        <option value="">Select...</option>
                        <option value="day-cab">Day Cab</option>
                        <option value="sleeper">Sleeper Cab</option>
                        <option value="none">No Equipment (Company Provided)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">CDL Number</label>
                    <Input placeholder="Your CDL/Class 1 License number" required />
                  </div>
                  <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
                    Submit Application <ArrowRight className="h-4 w-4" />
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

export default ForOperators;
