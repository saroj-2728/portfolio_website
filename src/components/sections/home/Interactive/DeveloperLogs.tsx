'use client';
import { AnimatePresence, motion } from 'framer-motion';

const logSets = [
  [
    { message: "[12:00] npm install", type: "info" },
    { message: "[12:01] npm run build", type: "info" },
    { message: "[12:02] Checking dependencies...", type: "info" },
    { message: "[12:03] All packages are up-to-date.", type: "success" },
    { message: "[12:04] Compiling modules...", type: "info" },
    { message: "[12:05] Build successful! 🚀", type: "success" }
  ],
  [
    { message: "[13:00] Starting build process...", type: "info" },
    { message: "[13:01] Optimizing assets...", type: "info" },
    { message: "[13:02] Oops! Found a missing semicolon.", type: "error" },
    { message: "[13:03] Attempting auto-fix... ⚙️", type: "warning" },
    { message: "[13:04] Fixed the bug, rebuilding...", type: "info" },
    { message: "[13:05] Build completed with warnings.", type: "warning" }
  ],
  [
    { message: "[14:00] Running tests...", type: "info" },
    { message: "[14:01] Linting files...", type: "info" },
    { message: "[14:02] Warning: Unused variable in utils.js", type: "warning" },
    { message: "[14:03] Tests passed ✅", type: "success" },
    { message: "[14:04] Creating production bundle...", type: "info" },
    { message: "[14:05] Build successful with minor warnings.", type: "warning" }
  ],
  [
    { message: "[15:00] Initializing build pipeline...", type: "info" },
    { message: "[15:01] Coffee level: Low ☕ — consider refilling.", type: "warning" },
    { message: "[15:02] Debugging dark mode toggle...", type: "info" },
    { message: "[15:03] Memory usage spiked — optimizing build...", type: "warning" },
    { message: "[15:04] Feature added successfully!", type: "success" },
    { message: "[15:05] Build finished with minor optimizations.", type: "success" }
  ],
  [
    { message: "[16:00] Fetching latest code from GitHub...", type: "info" },
    { message: "[16:01] CI/CD pipeline running...", type: "info" },
    { message: "[16:02] Warning: Large image detected, compressing...", type: "warning" },
    { message: "[16:03] Deployment scripts initialized...", type: "info" },
    { message: "[16:04] Deployed latest version 🚀", type: "success" },
    { message: "[16:05] Everything is live and running smoothly!", type: "success" }
  ]
];

const typeColors: Record<string, string> = {
  info: "text-secondary",
  success: "text-success",
  warning: "text-warning",
  error: "text-error"
};

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.12 }
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

export default function DeveloperLogs({ logIndex }: { logIndex: number }) {
  const currentLogs = logSets[logIndex] ?? logSets[0];

  return (
    <div className="p-6 pe-0 max-w-md font-mono text-sm md:text-base">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={logIndex}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {currentLogs.map((log, i) => (
            <motion.div
              key={`${logIndex}-${i}`}
              variants={itemVariants}
              className={`mb-1 whitespace-pre-wrap ${typeColors[log.type] || typeColors.info}`}
            >
              {log.message}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}