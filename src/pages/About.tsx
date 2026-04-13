import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Truck, Mountain, Users, Lightbulb, TrendingUp } from "lucide-react";

const team = [
  { name: "MountainLink Team", role: "University of Calgary — ENGG 683", desc: "Innovation & Entrepreneurship capstone project developing a relay freight platform for Western Canada's toughest corridor." },
];

const advantages = [
  { icon: Mountain, title: "Mountain Corridor Expertise", desc: "Purpose-built for the Rockies — our algorithm accounts for elevation, weather, and pass closures." },
  { icon: Truck, title: "Home-Daily Model", desc: "The only relay network guaranteeing every driver returns home nightly on the Calgary–Vancouver run." },
  { icon: Lightbulb, title: "Adaptive Segmentation", desc: "AI-driven route splitting: 3 legs in good weather, up to 5 when passes close." },
  { icon: Users, title: "Driver-First Culture", desc: "Addressing the 55,000+ driver shortage by making trucking family-compatible." },
  { icon: Target, title: "$450–560M TAM", desc: "Capturing share in Canada's busiest freight corridor with a differentiated service." },
  { icon: TrendingUp, title: "Capital-Light Launch", desc: "Platform-first model with $385K startup cost — leveraging existing owner-operators." },
];

const About = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="gradient-hero py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-primary-foreground sm:text-5xl">
          About <span className="text-gradient">MountainLink</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          Reimagining mountain corridor freight with relay logistics that put drivers first.
        </p>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          To eliminate the forced choice between efficiency and quality of life in long-haul trucking.
          MountainLink's relay model delivers same-day freight across the Canadian Rockies while ensuring
          every driver sleeps in their own bed every night.
        </p>
      </div>
    </section>

    {/* Competitive Advantages */}
    <section className="py-16 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground text-center mb-12">Competitive Advantages</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <a.icon className="h-8 w-8 text-secondary mb-3" />
                  <h3 className="font-semibold text-foreground">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Market Opportunity */}
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground text-center mb-8">Market Opportunity</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-extrabold text-gradient">$450–560M</p>
              <p className="mt-2 text-sm text-muted-foreground">Total Addressable Market</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-extrabold text-gradient">$45–84M</p>
              <p className="mt-2 text-sm text-muted-foreground">Serviceable Addressable Market</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-extrabold text-gradient">$4.5–8.4M</p>
              <p className="mt-2 text-sm text-muted-foreground">Year 1 Target (SOM)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
