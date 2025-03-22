import {
  Animation,
  AnimationButton,
  AnimationContent,
} from "@/components/animation";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import useMeasure from "react-use-measure";

const DynamicHeight = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [ref, bounds] = useMeasure();

  const handleShowDescription = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <>
      <Animation>
        <AnimationButton onClick={handleShowDescription}>
          Animate
        </AnimationButton>
        <AnimationContent className="font-mono">
          <motion.div
            ref={ref}
            initial={{ opacity: 0.5, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              bounce: 0,
              mass: 0.4,
            }}
            className="bg-zinc-200 max-w-[350px] p-6 pt-7 rounded-t-xl relative"
          >
            <motion.div animate={{ height: bounds.height }}>
              <div ref={ref}>
                <h2 className="text-2xl mb-2">Animation Dynamic Height</h2>
                <p>This is also short description.</p>

                {showDescription ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.1,
                    }}
                    className="mt-4"
                  >
                    This long description will open when animate. If this is
                    opened the height of the card will change. Then will this
                    dynamic height caused by content change animated?
                  </motion.p>
                ) : null}
              </div>
            </motion.div>
            <div className="h-1 bg-zinc-400 w-1/3 rounded-2xl top-2 absolute left-1/2 -translate-x-1/2" />
          </motion.div>
        </AnimationContent>
      </Animation>
    </>
  );
};
export default DynamicHeight;
