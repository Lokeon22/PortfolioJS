import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllProjects } from "../services/apiCMS";
import { motion } from "framer-motion";
import github from "../assets/icons/github.svg";
import live from "../assets/icons/live.svg";

export function Card() {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    getAllProjects(setProjetos);
  }, []);

  return (
    <motion.div className="max-w-[1440px] sm:h-[600px] h-[450px] max-[346px]:h-[350px] scrollbar-hide lg:scrollbar-default font-medium overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-[#660000] scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <motion.div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center">
        {projetos &&
          projetos.map((projeto) => (
            <motion.div
              key={projeto.id}
              className="text-slate-200 bg-gray-900 rounded-2xl bg-opacity-10 px-2 py-2 md:px-4 md:py-4 w-full h-full"
            >
              <Link to={`/project/${projeto.id}`}>
                <motion.img
                  src={projeto.cardImage.url}
                  className="rounded-xl mb-1 w-full xl:h-[220px] h-auto hover:scale-105 duration-200 cursor-pointer"
                />
              </Link>
              <h2 className="text-lg md:text-xl">{projeto.cardTitle}</h2>
              <p className="text-slate-300 mt-1 mb-2 sm:text-sm text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                {projeto.cardDescription}
              </p>
              <label className="mt-2 text-sm sm:text-base">
                <ul className="flex items-center flex-wrap gap-2">
                  <li className="text-slate-300 sm:text-sm text-xs font-mono bg-slate-700 rounded-md px-2 py-[2px]">
                    {projeto.stackPreview}
                  </li>

                  <a href={projeto.githubPreview} target="_blank">
                    <img
                      src={github}
                      className="md:w-[22px] md:h-[22px] w-[19px] h-[19px] bg-slate-200 rounded-full opacity-95 hover:bg-slate-300"
                    />
                  </a>
                  <a href={projeto.livePreview} target="_blank">
                    <img
                      src={live}
                      className="md:w-[22px] md:h-[22px] w-[19px] h-[19px] bg-slate-200 rounded-full opacity-95 hover:bg-slate-300"
                    />
                  </a>
                </ul>
              </label>
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
}
