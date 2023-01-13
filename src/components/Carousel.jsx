import { useRef } from "react";
import { ArrowLeft } from "phosphor-react";

export const Carousel = ({ children }) => {
  const divCarousel = useRef(null);

  const nextSlide = () => {
    divCarousel.current.scrollLeft += divCarousel.current.offsetWidth;
  };

  const previusSlide = () => {
    divCarousel.current.scrollLeft -= divCarousel.current.offsetWidth;
  };

  return (
    <section className="flex justify-center items-center mx-auto my-0 max-w-[900px] gap-2 px-4">
      <button className="hidden md:block" onClick={previusSlide}>
        <ArrowLeft size={32} />
      </button>
      <div
        className="flex overflow-x-auto max-w-[800px] mx-auto my-0 scroll-smooth scrollbar-hide"
        ref={divCarousel}
      >
        {children}
      </div>
      <button className="hidden md:block" onClick={nextSlide}>
        <ArrowLeft size={32} className="rotate-180" />
      </button>
    </section>
  );
};
