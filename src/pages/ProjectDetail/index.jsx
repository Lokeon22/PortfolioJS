import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { AiOutlineDoubleRight } from "react-icons/ai";
import { motion } from "framer-motion";

import { getAllProjects } from "../../services/apiCMS";
import { Menu } from "../../components/Menu";
import { CardDetail } from "../../components/CardDetail";

export const ProjectDetail = () => {
  const [projetos, setProjetos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getAllProjects(setProjetos);
  }, []);

  const projectFiltered = projetos.filter((project) => project.id == id);

  const arrowAnimate = {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section className="w-full h-full text-white">
      <Menu />
      <Link to="/projects" className="ml-4 sm:ml-12">
        <p className="inline-block mt-4 sm:mt-10 text-base sm:text-xl hover:opacity-70">
          Voltar
        </p>
      </Link>
      {projectFiltered.length > 0
        ? projectFiltered.map((project) => (
            <CardDetail key={project.id} data={project} />
          ))
        : null}
      <motion.div
        className="md:hidden flex justify-center items-center mt-2"
        variants={arrowAnimate}
        initial="initial"
        animate="animate"
        transition={{ ease: "easeOut", duration: 2, repeat: Infinity }}
      >
        <AiOutlineDoubleRight size={22} />
      </motion.div>
    </section>
  );
};
