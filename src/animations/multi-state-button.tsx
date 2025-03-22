import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { useState } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";
import { AlertTriangle, CheckCheckIcon, Loader2Icon } from "lucide-react";

const buttonStates = {
  idle: {
    text: "Idle",
    icon: <AlertTriangle />,
  },
  loading: {
    text: "Loading...",
    icon: <Loader2Icon className="animate-spin" />,
  },
  success: {
    text: "Success",
    icon: <CheckCheckIcon />,
  },
};

const animateVariants: Variants = {
  initial: {
    opacity: 0,
    y: -25,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 25,
  },
};

const MultiStateButton = () => {
  const [buttonState, setButtonState] =
    useState<keyof typeof buttonStates>("idle");

  const buttonStyleVariants = cva(
    "w-[150px] overflow-hidden rounded-2xl bg-zinc-900 shadow-[inset_0px_0.5px_0px_1px_#65656522] drop-shadow-md transition-colors disabled:opacity-100 py-4",
    {
      variants: {
        variant: {
          idle: "text-black bg-zinc-400/10 hover:bg-zinc-400/30",
          loading: "text-sky-500 bg-sky-400/10",
          success: "text-green-500 bg-green-300/10",
        },
      },
      defaultVariants: {
        variant: "idle",
      },
    }
  );

  return (
    <Card className="flex w-full min-w-[300px] items-center justify-center p-6">
      <Button
        className={cn(buttonStyleVariants({ variant: buttonState }))}
        disabled={buttonState !== "idle"}
        onClick={() => {
          setButtonState("loading");
          setTimeout(() => setButtonState("success"), 2500);
          setTimeout(() => setButtonState("idle"), 6000);
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={buttonState}
            variants={animateVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              type: "spring",
              duration: 0.3,
              bounce: 0,
            }}
            className="flex gap-2 items-center"
          >
            {buttonStates[buttonState].text}
            {buttonStates[buttonState].icon}
          </motion.span>
        </AnimatePresence>
      </Button>
    </Card>
  );
};

export default MultiStateButton;
