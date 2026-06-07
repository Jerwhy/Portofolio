import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="flex flex-col items-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                borderColor: ["#00f0ff", "#0088ff", "#00f0ff"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="w-16 h-16 border-4 border-t-transparent rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)]"
            />
            <motion.h1
              initial={{ opacity: 0, mt: 10 }}
              animate={{ opacity: 1, mt: 20 }}
              transition={{ delay: 0.5 }}
              className="text-cyan-400 font-display tracking-widest neon-text"
            >
              INITIALIZING...
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
