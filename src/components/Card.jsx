import projetos from "../data";
import { motion } from "framer-motion";

export function Card() {
  return (
    <motion.div className="overflow-x-auto mx-[7%] my-[33%] max-[331px]:mx-[12%] max-[331px]:my-[25%] md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:mx-0 md:my-0">
      <motion.div className="flex items-center grid-cols-1 xl:grid xl:grid-cols-2 md:max-w-[1200px] md:h-[550px] md:overflow-x-auto md:scrollbar-thin md:scrollbar-thumb-[#e4d6d6] md:scrollbar-thumb-rounded-full md:scrollbar-track-rounded-full">
        {projetos.map((projeto) => (
          <motion.div
            key={projeto.id}
            className="text-slate-200 bg-violet-800 rounded-2xl bg-opacity-30 md:px-4 md:py-2 md:min-w-full md:min-h-[auto] min-w-[370px] min-h-[300px] px-4 py-4 max-[380px]:min-w-[330px] max-[380px]:px-2 max-[380px]:py-2 "
          >
            <img src={projeto.imgURL} alt="Pokemons" className="rounded mb-1" />
            <h2 className="text-lg md:text-xl">{projeto.title}</h2>
            <p className="mb-3 text-sm sm:text-base border-b-[1px] py-2">
              {projeto.description}
            </p>
            <label className="mt-2 text-sm sm:text-base">
              <ul className="flex gap-2">
                {projeto.stack.map((stack, index) => (
                  <li key={index} className="text-slate-300">
                    {stack}
                  </li>
                ))}
                <a href={projeto.link} target="_blank" className="ml-20">
                  <img
                    src={projeto.github}
                    className="md:w-[28px] md:h-[28px] w-[26px] h-[26px] bg-slate-200 rounded-full opacity-95"
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
