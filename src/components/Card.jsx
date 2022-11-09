import projetos from "../data";
import { motion } from "framer-motion";

export function Card() {
  return (
    <motion.div className="max-w-[1200px] md:h-[600px] h-[470px] max-[331px]:h-[300px] mx-auto my-6 2xl:my-20 overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-[#e4d6d6] scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <motion.div className="grid md:grid-cols-2">
        {projetos.map((projeto) => (
          <motion.div
            key={projeto.id}
            className="text-slate-200 bg-violet-800 rounded-2xl bg-opacity-30 px-4 py-4"
          >
            <img src={projeto.imgURL} alt="Pokemons" className="rounded mb-1" />
            <h2 className="px-2 text-lg md:text-xl">{projeto.title}</h2>
            <p className="px-2 mb-3 text-sm sm:text-base border-b-[1px] py-2">
              {projeto.description}
            </p>
            <label className="mt-2 text-sm sm:text-base">
              <ul className="flex gap-2 px-2">
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
