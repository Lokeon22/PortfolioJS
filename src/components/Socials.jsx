import { motion } from "framer-motion";

import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";

export function Socials() {
  return (
    <section className="absolute top-[75%] left-[16px] md:left-[30px]">
      <ul className="flex flex-col gap-3 fixed text-slate-200">
        <li>
          <a href="https://github.com/lokeon22" target="_blank">
            <motion.img
              src={github}
              className="md:w-[34px] md:h-[34px] w-[30px] h-[30px] bg-white rounded-full opacity-95"
              initial={{ scale: 0, opacity: 0, y: 170 }}
              animate={{ scale: [1, 1.25, 1.5, 1], opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 30,
                duration: 1.5,
                delay: 1,
              }}
            />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <motion.img
              src={linkedin}
              className="md:w-8 md:h-8 w-7 h-7 invert opacity-90"
              initial={{ scale: 0, opacity: 0, y: 140 }}
              animate={{ scale: [1, 1.25, 1.5, 1], opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 30,
                duration: 1.3,
                delay: 1,
              }}
            />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <motion.img
              src={whatsapp}
              className="md:w-8 md:h-8 w-7 h-7 invert opacity-90"
              initial={{ scale: 0, opacity: 0, y: 110 }}
              animate={{ scale: [1, 1.25, 1.5, 1], opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 30,
                duration: 1.2,
                delay: 1,
              }}
            />
          </a>
        </li>
        <li>
          <motion.div
            className="bg-slate-200 w-[2px] h-32 mx-3 max-[331px]:hidden"
            initial={{ scale: 0, height: 0 }}
            animate={{ scale: 1, height: "120px" }}
            transition={{ type: "tween", duration: 1.5, delay: 1.5 }}
          ></motion.div>
        </li>
      </ul>
    </section>
  );
}
