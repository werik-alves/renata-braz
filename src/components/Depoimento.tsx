"use client";
import { useEffect, useRef, useState, useCallback } from "react";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      '"Nada melhor que uma contadora com um profissionalismo refinado e um olhar atencioso para o seu negócio. A Renata me ajuda a organizar e deixar as coisas da minha empresa mais fluídas. Tira dúvidas e está sempre disposta a ajudar. Obrigada, Renata, por estar comigo nessa. Profissional excelente, eu recomendo com orgulho."',
    author: "Cris",
    role: "Dona da Barbershop Art",
  },
  {
    quote:
      '"Ter a Renata como parceira tem sido essencial para manter minha empresa organizada e em conformidade com todas as obrigações burocráticas. Desde que comecei minha jornada como MEI, ela me apoia em todas as etapas com profissionalismo e atenção aos detalhes, sempre orientando sobre prazos, tributações e mudanças legais que impactam o meu negócio. Recomendo seu trabalho a qualquer empreendedor que busca tranquilidade e eficiência em sua contabilidade!"',
    author: "Ravena Souza",
    role: "Dona da Ravena Design",
  },
  {
    quote:
      '"Ter a Renata como parceira tem sido essencial para manter minha empresa organizada e em conformidade com todas as obrigações burocráticas. Desde que comecei minha jornada como MEI, ela me apoia em todas as etapas com profissionalismo e atenção aos detalhes, sempre orientando sobre prazos, tributações e mudanças legais que impactam o meu negócio. Recomendo seu trabalho a qualquer empreendedor que busca tranquilidade e eficiência em sua contabilidade!"',
    author: "Ravena Souza",
    role: "Dona da Ravena Design",
  },
  // Adicione novos depoimentos aqui, basta incluir objetos no array
];

export default function Depoimento() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const update = () => setItemsPerPage(window.innerWidth >= 768 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pages = Math.ceil(testimonials.length / itemsPerPage);

  const scrollToPage = useCallback(
    (target: number) => {
      const el = trackRef.current;
      if (!el) return;
      const next = Math.max(0, Math.min(target, pages - 1));
      el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
      setPage(next);
    },
    [pages]
  );

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const p = Math.round(el.scrollLeft / el.clientWidth);
      setPage(p);
    };
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [itemsPerPage]);

  useEffect(() => {
    const id = setInterval(() => {
      if (paused || pages === 0) return;
      scrollToPage((page + 1) % pages);
    }, 5000);
    return () => clearInterval(id);
  }, [page, pages, paused, scrollToPage]);

  return (
    <section id="depoimentos" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#383330] text-center">
          Depoimentos
        </h2>
        <p className="mt-2 text-center text-[#383330] text-base md:text-lg">
          Saiba o que nossos clientes estão dizendo sobre nossa empresa
        </p>
        {/* setas */}
        <div className="relative mt-8">
          <button
            aria-label="Anterior"
            onClick={() => scrollToPage(page - 1)}
            className="absolute -left-6 md:-left-8 top-1/2 -translate-y-1/2 z-10 bg-[#383330] text-[#F1EDE4] w-9 h-9 md:w-10 md:h-10 rounded-full shadow flex items-center justify-center"
          >
            ‹
          </button>

          <div
            ref={trackRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            className="flex gap-0 md:gap-6 overflow-x-auto md:overflow-hidden scroll-smooth snap-x snap-mandatory no-scrollbar px-4 md:px-10"
          >
            {testimonials.map((t, i) => (
              <div key={i} className="snap-center flex-none w-full md:w-1/2">
                <div className="bg-[#383330] text-[#F1EDE4] rounded-2xl p-5 md:p-8 mr-4 shadow-lg ring-1 ring-black/10 flex flex-col justify-center h-[400px] md:h-[340px]">
                  <p className="text-sm md:text-base leading-relaxed">
                    {t.quote}
                  </p>
                  <div className="mt-6 text-center">
                    <p className="font-semibold">{t.author}</p>
                    <p className="text-sm opacity-90">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            aria-label="Próximo"
            onClick={() => scrollToPage(page + 1)}
            className="absolute -right-6 md:-right-8 top-1/2 -translate-y-1/2 z-10 bg-[#383330] text-[#F1EDE4] w-9 h-9 md:w-10 md:h-10 rounded-full shadow flex items-center justify-center"
          >
            ›
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para página ${i + 1}`}
              onClick={() => scrollToPage(i)}
              className={`w-3 h-3 rounded-full ${
                i === page ? "bg-[#383330]" : "bg-[#383330]/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
