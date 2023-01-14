import { Carousel } from "./Carousel";

export const CardDetail = ({ data }) => {
  return (
    <>
      <div className="max-w-[500px] flex flex-col items-start mx-auto my-0  px-2 py-2 text-white">
        <div className="flex flex-wrap items-center sm:gap-4 gap-2 mb-2 sm:mt-12 mt-14 max-[340px]:mt-4">
          <h2 className="sm:text-4xl text-3xl font-Noto-Sans">{data.title}</h2>
          <a href={data.link} target="_blank">
            <img
              src={data.github}
              className="sm:w-[22px] sm:h-[22px] w-[19px] h-[19px] bg-slate-200 rounded-full opacity-95 hover:bg-slate-300"
            />
          </a>
          <a href={data.linkrepo} target="_blank">
            <img
              src={data.live}
              className="sm:w-[22px] sm:h-[22px] w-[19px] h-[19px] bg-slate-200 rounded-full opacity-95 hover:bg-slate-300"
            />
          </a>
        </div>
        <p className="max-w-[500px]">{data.description}</p>
        <footer className="flex flex-wrap items-center mt-4 mb-4">
          <h2 className="font-Noto-Sans">Tech Stack:</h2>
          {data.stack.map((stack, index) => (
            <span
              key={index}
              className="text-slate-300 sm:text-sm text-xs font-mono bg-slate-700 rounded-md px-2 py-[2px] sm:ml-2 ml-1"
            >
              {stack}
            </span>
          ))}
        </footer>
      </div>
      <Carousel>
        {data.fotosProjetos.map((fotos, index) => (
          <div
            key={index}
            className="px-2 py-2 flex-none md:max-w-[800px] w-full"
          >
            <img
              src={fotos}
              alt={data.title}
              className="w-full rounded shadow-md shadow-red-500/30"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};
