import { motion } from "framer-motion";
import { useState, useRef } from "react";

import { Menu } from "../../components/Menu";
import { Socials } from "../../components/Socials";
import { Overlay } from "../../components/Overlay";
import { ProjectsLink } from "../../components/ProjectsLink";
import { useIsSmall } from "../../components/MediaQuery";

import Yin from "../../assets/icons/double-dragon.svg";
import sword from "../../assets/shortVideos/sword.mp4";
import flower from "../../assets/bg-flower.jpg";

export function Home() {
  const [move, setMove] = useState(false);
  const [managerDom, setManagerDom] = useState(false);
  const doubleDragon = useRef(null);

  /* animate to move dragons-spin */
  const isSmall = useIsSmall();
  const variants = isSmall
    ? {
        animate: {
          y: move ? window.innerHeight / 2 - window.innerHeight / 12 : 0,
          width: move ? 80 : 220,
        },
      }
    : {
        animate: {
          y: move ? window.innerHeight / 2 - window.innerHeight / 8 : 0,
          width: move ? 80 : 150,
        },
      };

  /* animate to initial video */
  const videoAnimate = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: managerDom ? 0.8 : 0,
    },
  };

  /* animate to border content */
  const borderAnimate = {
    initial: {
      opacity: 0,
      width: "1%",
    },
    animate: {
      opacity: managerDom ? 0.8 : 0,
      width: managerDom ? "71%" : 0,
    },
  };

  return (
    <motion.div>
      <div
        className="absolute w-full h-full bg-cover lg:bg-center bg-no-repeat z-40"
        style={{ backgroundImage: `url(${flower})` }}
      >
        <Overlay />
        <Menu />

        <section>
          <div className="w-full">
            <ProjectsLink />
            <label style={{ display: managerDom ? "block" : "none" }}>
              <motion.div
                variants={borderAnimate}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 30,
                  delay: 0.5,
                }}
                initial="initial"
                animate="animate"
                className="w-[71%] grid grid-cols-2  md:grid-cols-3 sm:grid-cols-3 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:border-4 border-[1px] md:border-slate-200 rounded opacity-80"
              >
                <div className="px-8 text-white md:col-span-2 col-span-2">
                  <h2 className="md:text-[55px] text-3xl md:mt-0 mt-2 leading-none 2xl:text-center text-start">
                    Oi, me chamo{" "}
                    <strong className="font-Noto-Sans font-medium">
                      Gabriel Felipe
                    </strong>
                  </h2>
                  <p className="2xl:text-center text-start md:mt-4 mt-2  text-sm smal-phone:text-base md:text-base">
                    Sou um desenvolvedor web estudando frontend com React +
                    TypeScript e backend com Node.
                  </p>
                  <p className="2xl:text-center text-start md:mt-0 mt-1 md:text-base text-sm">
                    Na parte acadêmica, estou cursando o último semestre de
                    Análise e Desenvolvimento de Sistemas.
                  </p>
                </div>
                <motion.video
                  variants={videoAnimate}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 20,
                    delay: 1.3,
                  }}
                  initial="initial"
                  animate="animate"
                  src={sword}
                  autoPlay
                  playsInline
                  loop
                  muted
                  className="opacity-80 sm:mx-0 mx-[50%] max-[331px]:hidden lg:border-l-4 lg:border-slate-200 border-l-0"
                />
              </motion.div>
            </label>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.img
                src={Yin}
                variants={variants}
                animate="animate"
                transition={{
                  transition: { type: "tween", stiffness: 10, duration: 10 },
                }}
                onClick={() => {
                  setMove(!move);
                  setManagerDom(!managerDom);
                  doubleDragon.current.classList.toggle("animate-spin");
                }}
                className="sm:w-52 w-36 mb-4 cursor-pointer bg-red-900 rounded-full animate-spin"
                ref={doubleDragon}
                alt="Dois dragões"
              />

              <p
                className="text-center text-xs sm:text-sm font-Noto-Sans text-slate-200"
                style={{ display: managerDom ? "none" : "block" }}
              >
                clique aqui!
              </p>
            </div>
          </div>
        </section>
        <Socials />
      </div>
    </motion.div>
    /*--all--*/
  );
}
