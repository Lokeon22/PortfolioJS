import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* animate initial content projetos */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: "spring", stiffness: 30, delay: 1.25 },
  },
};

export function ProjectsLink() {
  return (
    <Link
      to="/projects"
      className="absolute max-[331px]:top-[80%] top-[58%] left-[81%] xl:left-[93%] md:left-[89%] text-xl xl:text-[35px] md:text-3xl text-white font-semibold rotate-90 hover:scale-110 cursor-pointer"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        Projetos
      </motion.div>
    </Link>
  );
}
