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
      "Nada melhor do que uma contadora com profissionalismo refinado e um olhar atencioso para o seu negócio. A Renata me ajuda a organizar e tornar as rotinas da minha empresa mais fluídas. Está sempre disposta a tirar dúvidas e oferecer ajuda. Obrigada, Renata, por estar comigo nessa jornada. Uma profissional excelente — recomendo com orgulho!",
    author: "Cris",
    role: "Dona da Barbershop Art",
  },
  {
    quote:
      "Ter a Renata como parceira tem sido essencial para manter minha empresa organizada e em conformidade com todas as obrigações burocráticas. Desde que comecei minha jornada como ME, ela me apoia em todas as etapas com profissionalismo e atenção aos detalhes, sempre orientando sobre prazos, tributações e mudanças legais que impactam o meu negócio. Recomendo seu trabalho a qualquer empreendedor que busca tranquilidade e eficiência em sua contabilidade!",
    author: "Ravena Souza",
    role: "Dona da Ravena Desing",
  },
  {
    quote:
      "Desde o primeiro contato com a Renata senti muito profissionalismo da parte dela, sempre foi solicita em tirar todas as minhas dúvidas, foi uma ótima escolha para contabilidade me deu segurança e ao mesmo tempo certeza que posso ficar despreocupada que não terei surpresas. Obrigada pela parceria e paciência",
    author: "Sabrina Helen",
    role: "Dona da Sabrina Design",
  },
  {
    quote:
      "Desde que a Renata Braz passou a cuidar da minha contabilidade, tenho tido paz na mente pra fazer o que preciso no dia a dia em meu trabalho, pois tenho segurança e confiança de que tem alguém cuidando de tudo pra mim. Com agilidade em tudo que pedi a ela sempre, atendimento cordial que faz toda diferença também.",
    author: "Tatiana Canestraro",
    role: "Dona da Canestraro's",
  },
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
          Veja o que nossos clientes dizem sobre nossa empresa
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
            className="flex gap-3 md:gap-6 overflow-x-auto md:overflow-hidden scroll-smooth snap-x snap-mandatory no-scrollbar px-4 md:px-10"
          >
            {testimonials.map((t, i) => (
              <div key={i} className="snap-center flex-none w-full md:w-1/2">
                <div className="bg-[#383330] text-[#F1EDE4] rounded-2xl p-5 md:p-8 sm:p-5 shadow-lg ring-1 ring-black/10 flex flex-col items-center justify-center h-[400px] md:h-[340px]">
                  <p className="text-sm md:text-base leading-relaxed text-justify">
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
