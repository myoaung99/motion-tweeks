"use client";

import { useState } from "react";
import SectionWrap from "../components/section-wrap";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import {
  Animation,
  AnimationButton,
  AnimationContent,
  AnimationDescription,
} from "../components/animation";

const LayoutAnimate = () => {
  const [justifyContent, setJustifyContent] = useState("flex-start");

  return (
    <Animation>
      <AnimationButton
        onClick={() =>
          setJustifyContent((e) =>
            e === "flex-end" ? "flex-start" : "flex-end"
          )
        }
      >
        Animate
      </AnimationButton>

      <AnimationContent
        className="flex"
        style={{
          justifyContent: justifyContent,
        }}
      >
        <motion.div layout className="rounded-full bg-yellow-600 w-32 h-32" />
      </AnimationContent>

      <AnimationDescription>
        The most powerful feature of this library is the <strong>layout</strong>
        . They allow us to animate any layout changes from the{" "}
        <strong>flex parent</strong> element, like{" "}
        <strong>flex-direction</strong> or <strong>justify-content</strong>
      </AnimationDescription>
    </Animation>
  );
};

export default LayoutAnimate;
