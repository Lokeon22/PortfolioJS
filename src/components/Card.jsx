import projetos from "../data";
import { motion } from "framer-motion";

export function Card() {
  return (
    <motion.div className="max-w-[1440px] sm:h-[600px] h-[450px] max-[346px]:h-[350px] scrollbar-hide lg:scrollbar-default font-medium overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-[#660000] scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <motion.div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center">
        {projetos.map((projeto) => (
          <motion.div
            key={projeto.id}
            className="text-slate-200 bg-gray-900 rounded-2xl bg-opacity-10 px-2 py-2 md:px-4 md:py-4 w-full h-full"
          >
            <motion.img
              src={projeto.imgURL}
              className="rounded-xl mb-1 w-full xl:h-[220px] h-auto hover:scale-105 duration-200"
            />
            <h2 className="text-lg md:text-xl">{projeto.title}</h2>
            <p className="text-slate-300 mt-1 mb-2 sm:text-sm text-xs">
              {projeto.description}
            </p>
            <label className="mt-2 text-sm sm:text-base">
              <ul className="flex items-center flex-wrap gap-2">
                {projeto.stack.map((stack, index) => (
                  <li
                    key={index}
                    className="text-slate-300 sm:text-sm text-xs font-mono bg-slate-700 rounded-md px-2 py-[2px]"
                  >
                    {stack}
                  </li>
                ))}
                <a href={projeto.link} target="_blank">
                  <img
                    src={projeto.github}
                    className="md:w-[22px] md:h-[22px] w-[19px] h-[19px] bg-slate-200 rounded-full opacity-95 hover:bg-slate-300"
                  />
                </a>
                <a href={projeto.linkrepo} target="_blank">
                  <img
                    src={projeto.live}
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
