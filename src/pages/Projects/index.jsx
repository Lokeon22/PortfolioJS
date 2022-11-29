import { Menu } from "../../components/Menu";
import { Overlay } from "../../components/Overlay";
import { Card } from "../../components/Card";

import { motion } from "framer-motion";
import { DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

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
      <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Card />
        <section className="max-w-[1200px] text-white mx-auto my-0 px-2 mb-1">
          <div className="flex flex-row flex-wrap gap-1 items-center">
            <p className="text-slate-500 text-xs">
              {"{ "}Esse portifólio foi criado com
            </p>
            <DiReact size={19} className="text-blue-400 opacity-70" />
            <SiTailwindcss size={19} className="text-blue-400 opacity-70" />
          </div>
          <div>
            <p className="text-slate-500 text-xs">
              Para ver o repositório{" "}
              <a
                href="https://github.com/Lokeon22/Portfolio"
                target="_blank"
                className="text-blue-400 opacity-80 hover:text-blue-500"
              >
                clique aqui
              </a>
              {" }"}
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
