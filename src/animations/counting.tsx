import { Animation, AnimationContent } from "@/components/animation";
import { animate, useMotionValue, motion, useTransform } from "motion/react"
import { useEffect } from "react";

const Counting = ()=>{
    const count = useMotionValue(0);
    const round = useTransform(()=>Math.round(count.get()))

    useEffect(() => {
       const control = animate(count, 100, {duration: 5})
       return ()=>control.stop()
    }, [])


    return (
      <Animation>
        <AnimationContent>
          <motion.pre className="text-white font-bold text-3xl text-center">
            {round}
          </motion.pre>
        </AnimationContent>
      </Animation>
    );
}

export default Counting;