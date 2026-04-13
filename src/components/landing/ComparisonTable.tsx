import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X, Minus } from "lucide-react";

const rows = [
  {
    metric: "Transit Time (Calgary→Vancouver)",
    solo: "16–20 hrs",
    team: "12–14 hrs",
    ml: "Sub-12 hrs",
    mlBest: true,
  },
  {
    metric: "Driver Home Daily",
    solo: false,
    team: false,
    ml: true,
    mlBest: true,
  },
  {
    metric: "Cost per Mile",
    solo: "$2.50–3.00",
    team: "$3.00–3.50",
    ml: "$2.80–3.20",
    mlBest: false,
  },
  {
    metric: "Freight Idle Time",
    solo: "8–12 hrs",
    team: "2–4 hrs",
    ml: "~0 hrs",
    mlBest: true,
  },
  {
    metric: "Winter Resilience",
    solo: "Low",
    team: "Low",
    ml: "High (adaptive legs)",
    mlBest: true,
  },
  {
    metric: "Driver Fatigue Risk",
    solo: "High",
    team: "Medium",
    ml: "Minimal",
    mlBest: true,
  },
  {
    metric: "Equipment Type",
    solo: "Sleeper cab",
    team: "Sleeper cab",
    ml: "Day cab ($40–80K savings)",
    mlBest: true,
  },
];

const renderValue = (val: string | boolean) => {
  if (val === true) return <Check className="mx-auto h-5 w-5 text-green-500" />;
  if (val === false) return <X className="mx-auto h-5 w-5 text-destructive/60" />;
  return val;
};

const ComparisonTable = () => (
  <section className="py-20 bg-muted/50">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why Relay Wins</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Head-to-head comparison: Solo Driver vs Team vs MountainLink Relay
        </p>
      </div>

      <motion.div
        className="overflow-hidden rounded-xl border bg-card shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Table>
          <TableHeader>
            <TableRow className="bg-primary text-primary-foreground hover:bg-primary">
              <TableHead className="text-primary-foreground font-semibold">Metric</TableHead>
              <TableHead className="text-center text-primary-foreground font-semibold">Solo Driver</TableHead>
              <TableHead className="text-center text-primary-foreground font-semibold">Team Driver</TableHead>
              <TableHead className="text-center text-primary-foreground font-semibold">
                <span className="text-secondary">MountainLink</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.metric}>
                <TableCell className="font-medium">{row.metric}</TableCell>
                <TableCell className="text-center text-muted-foreground">{renderValue(row.solo)}</TableCell>
                <TableCell className="text-center text-muted-foreground">{renderValue(row.team)}</TableCell>
                <TableCell className={`text-center font-semibold ${row.mlBest ? "text-secondary" : "text-foreground"}`}>
                  {renderValue(row.ml)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  </section>
);

export default ComparisonTable;
