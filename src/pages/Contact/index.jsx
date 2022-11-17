import { Menu } from "../../components/Menu";
import { Socials } from "../../components/Socials";
import { ContactEmail } from "../../components/ContactEmail";
import { ProjectsLink } from "../../components/ProjectsLink";
import { Particle } from "../../components/Particles";

import { BsArrowLeft } from "react-icons/bs";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import onlyDesktop from "../../assets/shortVideos/japanDesktop.mp4";

export function Contact() {
  const transPageProjects = {
    initial: {
      opacity: 0.8,
    },
    animate: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      transition={{ duration: 0.4 }}
      variants={transPageProjects}
      initial="initial"
      animate="animate"
      className="absolute bg-black w-full h-full bg-cover lg:bg-center bg-no-repeat"
    >
      <Particle />
      <Menu />
      <ProjectsLink />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link to="/" className="fixed flex gap-2 -top-6">
          <BsArrowLeft size={25} className="text-white hover:text-red-900" />
          <p className="text-white cursor-pointer hover:text-red-900">Voltar</p>
        </Link>
        <ContactEmail />
      </div>

      <div className="fixed bg-black opacity-80 -z-1 hidden 2xl:block">
        <motion.video
          src={onlyDesktop}
          autoPlay
          loop
          muted
          className="-z-1 fixed opacity-80 max-[331px]:hidden w-[500px] top-1/2 left-[77%] -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <Socials />
    </motion.div>
  );
}
