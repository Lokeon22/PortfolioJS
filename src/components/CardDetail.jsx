import { Carousel } from "./Carousel";
import github from "../assets/icons/github.svg";
import live from "../assets/icons/live.svg";

export const CardDetail = ({ data }) => {
  return (
    <>
      <div className="max-w-[500px] flex flex-col items-start mx-auto my-0  px-2 py-2 text-white">
        <div className="flex flex-wrap items-center sm:gap-4 gap-2 mb-2 sm:mt-12 mt-14 max-[340px]:mt-4">
          <h2 className="sm:text-4xl text-3xl font-Noto-Sans">
            {data.cardTitle}
          </h2>
          <a href={data.githubPreview} target="_blank">
            <img
              src={github}
              className="sm:w-[22px] sm:h-[22px] w-[19px] h-[19px] bg-slate-200 rounded-full opacity-95 hover:bg-slate-300"
            />
          </a>
          <a href={data.livePreview} target="_blank">
            <img
              src={live}
              className="sm:w-[22px] sm:h-[22px] w-[19px] h-[19px] bg-slate-200 rounded-full opacity-95 hover:bg-slate-300"
            />
          </a>
        </div>
        <p className="max-w-[500px] sm:text-base text-sm text-gray-300">
          {data.cardDescription}
        </p>
        <footer className="flex flex-wrap items-center mt-4 mb-4">
          <h2 className="font-Noto-Sans sm:text-base text-sm">Tech Stack:</h2>
          <span className="text-slate-300 sm:text-sm text-xs font-mono bg-slate-700 rounded-md px-2 py-[2px] sm:ml-2 ml-1">
            {data.stackPreview}
          </span>
        </footer>
      </div>
      <Carousel>
        {data.galeryProjects.map((foto, index) => (
          <div
            key={index}
            className="px-2 py-2 flex-none md:max-w-[800px] w-full"
          >
            <img
              src={foto.url}
              className="w-full rounded shadow-md shadow-red-500/30"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};
