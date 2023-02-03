import { Overlay } from "../../components/Overlay";

import { Link } from "react-router-dom";

import flower from "../../assets/bg-flower.jpg";

export function NotFound() {
  return (
    <div
      className="absolute w-full h-full bg-cover lg:bg-center bg-no-repeat z-50"
      style={{ backgroundImage: `url(${flower})` }}
    >
      <Overlay />
      <div className="text-white text-2xl w-full h-full flex flex-col justify-center items-center">
        <h2 className="mb-4">Pagina não encontrada 404</h2>
        <Link
          to="/"
          className="bg-red-600 text-slate-200 px-6 py-2 rounded hover:bg-red-800 hover:text-slate-300"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}
