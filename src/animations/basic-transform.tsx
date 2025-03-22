"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Animation,
  AnimationButton,
  AnimationContent,
  AnimationDescription,
} from "../components/animation";

const BasisTransform = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  return (
    <Animation>
      <AnimationButton onClick={() => setShouldAnimate((e) => !e)}>
        Animate
      </AnimationButton>
      <AnimationContent>
        <motion.div
          className="w-40 h-40 rounded-3xl bg-teal-500"
          animate={{
            scale: shouldAnimate ? 1.3 : 1,
            x: shouldAnimate ? 140 : 0,
          }}
        />
      </AnimationContent>

      <AnimationDescription>
        This animation animates the Y value. As you can see, the easing is
        Spring type. Motion makes Sprint as default animations for physical
        values likes X, Y, Scale.
      </AnimationDescription>
    </Animation>
  );
};

export default BasisTransform;
