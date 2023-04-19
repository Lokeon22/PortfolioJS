import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Loading() {
  return (
    <div className="flex items-center justify-center gap-4 text-white">
      <AiOutlineLoading3Quarters className="w-8 h-8 animate-spin" />
      <h2 className="text-lg">Carregando projetos...</h2>
    </div>
  );
}
