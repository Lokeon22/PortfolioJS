import { Menu } from "../../components/Menu";
import { Overlay } from "../../components/Overlay";
import { Card } from "../../components/Card";

import { motion } from "framer-motion";

export function Projects() {
  const transPageProjects = {
    initial: {
      scaleY: 0.5,
    },
    animate: {
      scaleY: 1,
    },
    exit: {
      x: "-100%",
      overflow: "hidden",
      transition: { type: "spring", stiffness: 30, duration: 0.5 },
    },
  };

  return (
    <motion.div
      transition={{ duration: 0.8, type: "spring", stiffness: 40 }}
      variants={transPageProjects}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute w-full h-full bg-bg-flower bg-cover lg:bg-center bg-no-repeat z-40"
    >
      <Overlay />
      <Menu />
      <Card />
    </motion.div>
  );
}
