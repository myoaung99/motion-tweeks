import {
  Animation,
  AnimationContent,
  AnimationDescription,
} from "@/components/animation";
import { motion } from "motion/react";
import { useRef } from "react";

const DragBall = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <Animation>
      <AnimationContent>
        <div
          ref={ref}
          className="bg-zinc-300 w-[400px] aspect-square p-4 rounded-2xl
         border-zinc-800 border grid place-items-center"
        >
          <motion.div
            drag
            dragConstraints={ref}
            dragElastic={0}
            className="bg-teal-600 w-24 h-24 rounded-full hover:cursor-grab"
          />
        </div>
      </AnimationContent>

      <AnimationDescription>
        <p>
          Motion also has powerful gestures, one of them is{" "}
          <strong>Drag</strong>. Dragging animation in motion is simple. You
          simply need to add drag props at the desired element. You can also put{" "}
          <strong>Drag Constraints</strong> like this one.
        </p>
      </AnimationDescription>
    </Animation>
  );
};

export default DragBall;
