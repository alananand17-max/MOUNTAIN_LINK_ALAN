import { motion } from "framer-motion";

const hubs = [
  { name: "Calgary", km: 0, position: "left-[2%]" },
  { name: "Golden", km: 270, position: "left-[22%]" },
  { name: "Revelstoke", km: 415, position: "left-[38%]" },
  { name: "Kamloops", km: 600, position: "left-[55%]" },
  { name: "Hope", km: 830, position: "left-[77%]" },
  { name: "Vancouver", km: 1050, position: "left-[95%]" },
];

const passes = [
  { name: "Kicking Horse Pass", position: "left-[13%]", elevation: "1,627m" },
  { name: "Rogers Pass", position: "left-[30%]", elevation: "1,330m" },
  { name: "Coquihalla", position: "left-[66%]", elevation: "1,244m" },
];

const RouteMap = () => (
  <section className="py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">The Relay Corridor</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          1,050 km from Calgary to Vancouver — split into optimized relay legs through the Canadian Rockies
        </p>
      </div>

      <motion.div
        className="relative mx-auto max-w-5xl rounded-2xl border bg-card p-8 shadow-sm overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Mountain silhouette */}
        <div className="absolute inset-x-0 bottom-20 h-32 opacity-5">
          <svg viewBox="0 0 1200 200" className="h-full w-full" preserveAspectRatio="none">
            <path d="M0,200 L100,120 L200,150 L300,60 L400,100 L500,40 L600,90 L700,30 L800,80 L900,50 L1000,110 L1100,70 L1200,200 Z" fill="currentColor" className="text-primary" />
          </svg>
        </div>

        {/* Route Container */}
        <div className="relative w-full h-48 my-8">
          {/* Route line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 rounded-full bg-secondary/20" />
          <motion.div
            className="absolute top-1/2 left-0 h-1 -translate-y-1/2 rounded-full bg-secondary"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Hub markers (Above the line) */}
          {hubs.map((hub, i) => (
            <motion.div
              key={hub.name}
              className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 ${hub.position} z-10`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.2 }}
            >
              <div className="relative flex items-center justify-center h-4 w-4 rounded-full border-2 border-secondary bg-background shadow-md">
                <div className="absolute bottom-6 w-max text-center">
                  <p className="text-xs font-bold text-foreground sm:text-sm">{hub.name}</p>
                  <p className="text-xs text-muted-foreground">{hub.km} km</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Mountain passes (Below the line) */}
          {passes.map((pass) => (
            <div
              key={pass.name}
              className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 ${pass.position} hidden sm:block z-0`}
            >
              <div className="relative flex items-center justify-center w-4 h-4">
                <div className="absolute top-6 w-max text-center flex flex-col items-center">
                  <span className="text-sm text-secondary mb-1">⛰️</span>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">{pass.name}</p>
                  <p className="text-xs text-muted-foreground/70">{pass.elevation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full border-2 border-secondary bg-background" />
            <span>Relay Hub</span>
          </div>
          <div className="flex items-center gap-2">
            <span>⛰️</span>
            <span>Mountain Pass</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-6 rounded bg-secondary" />
            <span>Active Route</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default RouteMap;
