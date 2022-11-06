import projetos from "../data";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function Card() {
  const carousel = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      className="cursor-grab overflow-hidden my-[10%] mx-[15%] bg-violet-500"
      whileTap={{ cursor: "grabbing" }}
      ref={carousel}
    >
      <motion.div
        className="flex items-center bg-blue-500"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {projetos.map((projeto) => (
          <motion.div
            key={projeto.id}
            className="text-white px-6 py-6 min-w-[550px] min-h-[350px]"
          >
            <img
              src={projeto.imgURL}
              alt="Pokemons"
              className="rounded w-full h-full pointer-events-none"
            />
            <h2 className="text-xl mb-1">{projeto.title}</h2>
            <p className="mb-1">{projeto.description}</p>
            <label className="flex gap-4 mt-2">
              <span>{projeto.stack}</span>
            </label>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
