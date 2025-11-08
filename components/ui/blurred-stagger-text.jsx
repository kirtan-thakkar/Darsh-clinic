"use client";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export function BlurredStagger({ 
  text, 
  className,
  delay = 0.03,
  duration = 0.5 
}) {
  const words = text.split(" ");

  return (
    <div className={cn("", className)}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            delay: index * delay,
            duration: duration,
            ease: "easeOut"
          }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}