import projetos from "../data";
import { motion } from "framer-motion";

export function Card() {
  return (
    <motion.div className="max-w-[1200px] md:h-[700px] lg:h-[630px] h-[550px] max-[331px]:h-[400px] mx-auto my-10 2xl:my-20 overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-[#e4d6d6] scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <motion.div className="grid md:grid-cols-2 px-2 md:px-0">
        {projetos.map((projeto) => (
          <motion.div
            key={projeto.id}
            className="text-slate-200 bg-violet-800 rounded-2xl bg-opacity-30 px-2 py-2 md:px-4 md:py-4 w-full h-full"
          >
            <motion.img
              src={projeto.imgURL}
              alt="Pokemons"
              className="rounded-xl mb-1 md:w-full min-h-0- 2xl:min-h-[270px] hover:scale-105 duration-200"
            />
            <h2 className="text-lg md:text-xl">{projeto.title}</h2>
            <p className=" mb-3 text-sm sm:text-base border-b-[1px] py-2">
              {projeto.description}
            </p>
            <label className="mt-2 text-sm sm:text-base">
              <ul className="flex flex-wrap gap-2">
                {projeto.stack.map((stack, index) => (
                  <li key={index} className="text-slate-300">
                    {stack}
                  </li>
                ))}
                <a
                  href={projeto.link}
                  target="_blank"
                  className="ml-6 md:ml-10 max-[331px]:ml-0"
                >
                  <img
                    src={projeto.github}
                    className="md:w-[25px] md:h-[25px] w-[22px] h-[22px] bg-slate-200 rounded-full opacity-95 hover:bg-slate-300"
                  />
                </a>
                <a href={projeto.linkrepo} target="_blank">
                  <img
                    src={projeto.live}
                    className="md:w-[25px] md:h-[25px] w-[22px] h-[22px] bg-slate-200 rounded-full opacity-95 hover:bg-slate-300"
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
