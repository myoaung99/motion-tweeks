import {
  Animation,
  AnimationButton,
  AnimationContent,
  AnimationDescription,
} from "@/components/animation";
import { motion, useMotionValue, useTransform } from "motion/react";

const UseTransform = () => {
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 150], [1, 0]);

  return (
    <Animation>
      <AnimationContent>
        <div
          className="bg-zinc-300 w-[400px] aspect-square p-4 rounded-2xl
         border-zinc-800 border grid place-items-center"
        >
          <motion.div
            onPan={(e, pInfo) => y.set(pInfo.offset.y)}
            onPanEnd={() => y.set(0)}
            style={{ y, opacity }}
            className="bg-teal-600 w-24 h-24 rounded-full hover:cursor-grab touch-none"
          />
        </div>
      </AnimationContent>
    </Animation>
  );
};

export default UseTransform;
