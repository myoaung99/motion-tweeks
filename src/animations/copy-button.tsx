import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const CopyButton = () => {
  const [copied, setCopied] = useState(false);

  const copy = () => setCopied((p) => !p);

  return (
    <Button variant={"outline"} aria-label="Copy code snippet" onClick={copy}>
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="checkmark"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <CheckIcon />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <CopyIcon />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
};

export default CopyButton;
