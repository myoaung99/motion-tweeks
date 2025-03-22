import { motion } from "motion/react";
import { useState } from "react";

export default function Task1() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <motion.div
        layout
        onClick={() => setOpen((o) => !o)}
        className="bg-teal-500"
        style={
          open ? { position: "fixed", inset: 0 } : { height: 48, width: 48 }
        }
      />
    </div>
  );
}
