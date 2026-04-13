import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { motion, AnimatePresence } from "framer-motion";
import { Play, CloudSnow, Sun, User, Clock, MapPin, Truck, Gauge } from "lucide-react";

interface Hub {
  name: string;
  km: number;
}

interface Leg {
  from: string;
  to: string;
  distance: number;
  time: string;
  driver: { name: string; exp: number; hos: number; equipment: string };
}

const allHubs: Hub[] = [
  { name: "Calgary", km: 0 },
  { name: "Golden", km: 270 },
  { name: "Revelstoke", km: 415 },
  { name: "Kamloops", km: 600 },
  { name: "Hope", km: 830 },
  { name: "Vancouver", km: 1050 },
];

const drivers = [
  { name: "Raj P.", exp: 8, hos: 11, equipment: "Day Cab – Dry Van" },
  { name: "Mike T.", exp: 12, hos: 10, equipment: "Day Cab – Reefer" },
  { name: "Sarah K.", exp: 5, hos: 11, equipment: "Day Cab – Flatbed" },
  { name: "Jaspreet S.", exp: 15, hos: 9, equipment: "Day Cab – Dry Van" },
  { name: "Chen W.", exp: 7, hos: 11, equipment: "Day Cab – Livestock" },
  { name: "Dave M.", exp: 10, hos: 10, equipment: "Day Cab – Dry Van" },
];

const freightTypes = ["Dry Van", "Reefer", "Flatbed", "Livestock"];

const Demo = () => {
  const [freightType, setFreightType] = useState("Dry Van");
  const [weight, setWeight] = useState("42000");
  const [rogersPass, setRogersPass] = useState(false);
  const [coquihalla, setCoquihalla] = useState(false);
  const [kickingHorse, setKickingHorse] = useState(false);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<Leg[] | null>(null);

  const weatherClosed = rogersPass || coquihalla || kickingHorse;

  const computeLegs = useMemo(() => {
    return () => {
      // Determine which hubs to use based on weather
      let activeHubs = [...allHubs];

      // In bad weather, add intermediate stops (simulate 5-leg vs 3-leg)
      if (kickingHorse) {
        // Add Field between Calgary and Golden
        if (!activeHubs.find(h => h.name === "Field"))
          activeHubs.push({ name: "Field", km: 200 });
      }
      if (rogersPass) {
        // Already have Revelstoke, but route becomes longer
      }
      if (coquihalla) {
        // Add Merritt as alternate
        if (!activeHubs.find(h => h.name === "Merritt"))
          activeHubs.push({ name: "Merritt", km: 720 });
      }

      activeHubs.sort((a, b) => a.km - b.km);

      const legs: Leg[] = [];
      for (let i = 0; i < activeHubs.length - 1; i++) {
        const dist = activeHubs[i + 1].km - activeHubs[i].km;
        const speedKmh = weatherClosed ? 60 : 80;
        const hours = dist / speedKmh;
        const mins = Math.round(hours * 60);
        legs.push({
          from: activeHubs[i].name,
          to: activeHubs[i + 1].name,
          distance: dist,
          time: `${Math.floor(mins / 60)}h ${mins % 60}m`,
          driver: drivers[i % drivers.length],
        });
      }
      return legs;
    };
  }, [rogersPass, coquihalla, kickingHorse, weatherClosed]);

  const handleRun = () => {
    setRunning(true);
    setResult(null);
    setTimeout(() => {
      setResult(computeLegs());
      setRunning(false);
    }, 1500);
  };

  const totalDistance = result?.reduce((s, l) => s + l.distance, 0) ?? 0;
  const totalMinutes = result?.reduce((s, l) => {
    const parts = l.time.match(/(\d+)h\s*(\d+)m/);
    return s + (parts ? parseInt(parts[1]) * 60 + parseInt(parts[2]) : 0);
  }, 0) ?? 0;

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="gradient-hero py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            Interactive Relay <span className="text-gradient">Demo</span>
          </h1>
          <p className="mt-3 text-primary-foreground/80">
            See how MountainLink's segmentation algorithm splits loads across relay hubs in real-time
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Input Panel */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Truck className="h-5 w-5 text-secondary" /> Load Configuration
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Origin</label>
                    <Input value="Calgary, AB" readOnly className="bg-muted" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Destination</label>
                    <Input value="Vancouver, BC" readOnly className="bg-muted" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Freight Type</label>
                    <select
                      value={freightType}
                      onChange={(e) => setFreightType(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      {freightTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Weight (lbs)</label>
                    <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                  </div>

                  {/* Weather Toggles */}
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CloudSnow className="h-4 w-4" /> Weather Simulation
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Kicking Horse Pass Closed</span>
                        <Switch checked={kickingHorse} onCheckedChange={setKickingHorse} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Rogers Pass Closed</span>
                        <Switch checked={rogersPass} onCheckedChange={setRogersPass} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Coquihalla Closed</span>
                        <Switch checked={coquihalla} onCheckedChange={setCoquihalla} />
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs">
                      {weatherClosed ? (
                        <><CloudSnow className="h-3 w-3 text-blue-500" /><span className="text-blue-600 font-medium">Adverse conditions — adaptive routing active</span></>
                      ) : (
                        <><Sun className="h-3 w-3 text-secondary" /><span className="text-secondary font-medium">Clear conditions — standard 3-leg routing</span></>
                      )}
                    </div>
                  </div>

                  <Button
                    onClick={handleRun}
                    disabled={running}
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2"
                  >
                    {running ? "Computing..." : <><Play className="h-4 w-4" /> Run Segmentation</>}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Visualization */}
            <div className="lg:col-span-2 space-y-6">
              {/* Route visualization */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-6">Relay Route Visualization</h3>
                  <div className="relative">
                    {/* Route line */}
                    <div className="relative h-20 mb-8">
                      <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 rounded-full bg-border" />
                      {result && (
                        <motion.div
                          className="absolute top-1/2 left-0 h-1 -translate-y-1/2 rounded-full bg-secondary"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                      )}

                      {/* Hub dots */}
                      {(result
                        ? (() => {
                            const hubs: Hub[] = [];
                            result.forEach((leg, i) => {
                              if (i === 0) hubs.push({ name: leg.from, km: 0 });
                              const prevKm = hubs[hubs.length - 1].km;
                              hubs.push({ name: leg.to, km: prevKm + leg.distance });
                            });
                            return hubs;
                          })()
                        : allHubs
                      ).map((hub, i, arr) => {
                        const pct = arr.length > 1 ? (i / (arr.length - 1)) * 100 : 0;
                        return (
                          <motion.div
                            key={hub.name}
                            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                            style={{ left: `${pct}%` }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: result ? 0.3 + i * 0.2 : 0 }}
                          >
                            <span className="mb-2 text-xs font-semibold text-foreground whitespace-nowrap">{hub.name}</span>
                            <div className={`h-4 w-4 rounded-full border-2 shadow-md ${result ? "border-secondary bg-secondary/20" : "border-muted-foreground/30 bg-background"}`} />
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Summary */}
                  {result && (
                    <motion.div
                      className="grid grid-cols-3 gap-4 mt-6 rounded-lg bg-muted/50 p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gradient">{result.length}</p>
                        <p className="text-xs text-muted-foreground">Relay Legs</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gradient">{totalDistance} km</p>
                        <p className="text-xs text-muted-foreground">Total Distance</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gradient">
                          {Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m
                        </p>
                        <p className="text-xs text-muted-foreground">Total Transit</p>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>

              {/* Leg Details & Driver Matching */}
              <AnimatePresence>
                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold text-foreground">Leg Breakdown & Driver Assignment</h3>
                    {result.map((leg, i) => (
                      <motion.div
                        key={`${leg.from}-${leg.to}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 }}
                      >
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-sm font-bold">
                                  {i + 1}
                                </div>
                                <div>
                                  <p className="font-semibold text-foreground flex items-center gap-1">
                                    <MapPin className="h-3 w-3 text-secondary" />
                                    {leg.from} → {leg.to}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {leg.distance} km · {leg.time}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1.5">
                                  <User className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-foreground font-medium">{leg.driver.name}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <Gauge className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-xs text-muted-foreground">{leg.driver.exp}yr exp</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <Clock className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-xs text-muted-foreground">{leg.driver.hos}h HOS left</span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {!result && !running && (
                <Card className="border-dashed">
                  <CardContent className="p-12 text-center">
                    <Truck className="mx-auto h-12 w-12 text-muted-foreground/30 mb-4" />
                    <p className="text-muted-foreground">
                      Configure your load and click "Run Segmentation" to see the relay algorithm in action
                    </p>
                  </CardContent>
                </Card>
              )}

              {running && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="mx-auto h-8 w-8 rounded-full border-2 border-secondary border-t-transparent"
                    />
                    <p className="mt-4 text-muted-foreground">Running segmentation algorithm...</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;
