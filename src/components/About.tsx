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
        className="flex flex-col justify-center w-full p-4 h-[400px] rounded-md order-2 md:order-1 mt-12 md:mt-0"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: DURATION_BASE,
          ease: EASE_DEFAULT,
          delay: seqDelay(1),
        }}
      >
        <h2 className="text-2xl font-semibold text-[#383330] self-start">
          Quem esta por trás
        </h2>
        <p className="mt-4 text-base text-[#383330] self-start leading-8">
          Renata Braz, contadora especializada em micro & pequenas empresas. 
          Apaixonada pelo mundo do empreendedorismo, atua como empresária
          contábil há mais de 6 anos. Meu objetivo enquanto profissional é
          proporcionar uma contabilidade comunicativa e objetiva, focada em
          simplificar processos e fornecer soluções práticas para meus clientes.
        </p>
        {linkSaibaMais() && (
          <a
            href={linkSaibaMais() ?? undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center bg-[#383330] text-[#F1EDE4] px-4 py-2 rounded-md self-center font-medium cursor-pointer hover:opacity-80 transition-opacity"
          >
            Saiba mais
          </a>
        )}
      </motion.div>
      <motion.div
        className="mx-auto max-w-6xl px-4 pb-6 mt-12 md:mt-0 order-1 md:order-2"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: DURATION_BASE,
          ease: EASE_DEFAULT,
          delay: seqDelay(0),
        }}
      >
        <img
          src="/assets/renata_braz.png"
          alt="Renata Braz, contadora"
          loading="lazy"
          className="shadow-lg rounded-br-[49px] rounded-tl-[49px]"
        />
      </motion.div>
    </section>
  );
}
