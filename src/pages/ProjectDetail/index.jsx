import { useParams } from "react-router-dom";

import projetos from "../../data";
import { Menu } from "../../components/Menu";
import { CardDetail } from "../../components/CardDetail";

export const ProjectDetail = () => {
  const { id } = useParams();
  const projectFiltered = projetos.filter((project) => project.id == id);

  return (
    <section className="w-full h-full text-white">
      <Menu />
      {projectFiltered.map((project) => (
        <CardDetail key={project.id} data={project} />
      ))}
    </section>
  );
};
