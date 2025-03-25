import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { useState } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";
import { AlertTriangle, CheckCheckIcon, Loader } from "lucide-react";
import { Animation, AnimationContent } from "@/components/animation";

const buttonStates = {
  idle: {
    text: "Idle",
    icon: <AlertTriangle />,
  },
  loading: {
    text: "Loading...",
    icon: <Loader className="animate-spin" />,
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
    "w-[150px] cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 shadow-[inset_0px_0.5px_0px_1px_#65656522] drop-shadow-md transition-colors disabled:opacity-100 py-4",
    {
      variants: {
        variant: {
          idle: "text-black bg-white hover:bg-zinc-200",
          loading: "text-sky-600 bg-sky-200",
          success: "text-green-600 bg-green-100",
        },
      },
      defaultVariants: {
        variant: "idle",
      },
    }
  );

  return (
    <Animation>
      <AnimationContent className="flex justify-center">
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
      </AnimationContent>
    </Animation>
  );
};

export default MultiStateButton;
