"use client";
/* eslint-disable @next/next/no-img-element */
import { linkSaibaMais } from "@/lib/links";
import { motion } from "framer-motion";
import { DURATION_BASE, EASE_DEFAULT, seqDelay } from "@/lib/animation";

export default function About() {
  return (
    <section
      id="sobre"
      className="py-20 mx-auto max-w-6xl px-4 grid grid-cols-1 gap-2 md:grid-cols-2"
    >
      <motion.div
        className="mx-auto max-w-6xl px-4"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: DURATION_BASE, ease: EASE_DEFAULT, delay: seqDelay(0) }}
      >
        <img src="/assets/renata.png" alt="Renata Braz, contadora" loading="lazy" />
      </motion.div>
      <motion.div
        className="flex flex-col justify-center bg-[#B3A79B] w-full p-4 h-full rounded-md"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: DURATION_BASE, ease: EASE_DEFAULT, delay: seqDelay(1) }}
      >
        <h2 className="text-2xl font-semibold text-[#50341F] self-center">
          Quem esta por trás
        </h2>
        <p className="mt-4 text-base text-[#50341F]">
          Renata Braz, contadora especializada em micro & pequenas empresas. 
          Apaixonada pelo mundo do empreendedorismo, atua como empresária
          contábil há mais de 5 anos. Meu objetivo enquanto profissional é
          proporcionar uma contabilidade comunicativa e objetiva, focada em
          simplificar processos e fornecer soluções práticas para meus clientes.
        </p>
        <button className="mt-4 text-[#50341F] px-4 py-2 rounded-md self-center text-1xl font-bold cursor-pointer">
          {linkSaibaMais() && (
            <a
              href={linkSaibaMais() ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba mais
            </a>
          )}
        </button>
      </motion.div>
    </section>
  );
}
