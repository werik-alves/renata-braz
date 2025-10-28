/* eslint-disable @next/next/no-img-element */
"use client";
import { acessoria, comunicacao, emissao, relacionamento } from "@/lib/assets";
import { buildWhatsappLinkDiferenciais } from "@/lib/links";
import { motion } from "framer-motion";
import {
  DURATION_BASE,
  EASE_DEFAULT,
  SECTION_STAGGER,
  SECTION_DELAY_CHILDREN,
} from "@/lib/animation";
export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: DURATION_BASE,
        ease: EASE_DEFAULT,
        staggerChildren: SECTION_STAGGER,
        delayChildren: SECTION_DELAY_CHILDREN,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION_BASE, ease: EASE_DEFAULT },
    },
  };
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-[#383330] text-center"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: DURATION_BASE, ease: EASE_DEFAULT }}
        >
          Diferenciais
        </motion.h2>
        <motion.div
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="flex flex-col gap-3" variants={itemVariants}>
            <div className="flex items-start gap-3">
              <img
                src={acessoria}
                alt="Assessoria na Contratação de Sistema"
                className="h-8 w-8 object-contain"
              />
              <h3 className="text-lg md:text-xl font-semibold text-[#383330]">
                Assessoria na Contratação de Sistema
              </h3>
            </div>
            <div className="ml-12">
              <p className="text-sm md:text-base text-[#383330] leading-relaxed">
                Orientamos na escolha e implementação dos melhores sistemas de
                gestão contábil e financeira, garantindo que a tecnologia
                trabalhe a favor do seu negócio.
              </p>
            </div>
          </motion.div>
          <motion.div className="flex flex-col gap-3" variants={itemVariants}>
            <div className="flex items-start gap-3">
              <img
                src={emissao}
                alt="Emissão de Relatórios Extra Contábeis"
                className="h-8 w-8 object-contain"
              />
              <h3 className="text-lg md:text-xl font-semibold text-[#383330]">
                Emissão de Relatórios Extra Contábeis
              </h3>
            </div>
            <div className="ml-12">
              <p className="text-sm md:text-base text-[#383330] leading-relaxed">
                Desenvolvemos relatórios personalizados além das obrigações
                contábeis tradicionais, que facilitam a gestão financeira e a
                tomada de decisões estratégicas.
              </p>
            </div>
          </motion.div>
          <motion.div className="flex flex-col gap-3" variants={itemVariants}>
            <div className="flex items-start gap-3">
              <img
                src={comunicacao}
                alt="Comunicação de Fácil Entendimento"
                className="h-8 w-8 object-contain"
              />
              <h3 className="text-lg md:text-xl font-semibold text-[#383330]">
                Comunicação de Fácil Entendimento
              </h3>
            </div>
            <div className="ml-12">
              <p className="text-sm md:text-base text-[#383330] leading-relaxed">
                Nossa equipe utiliza uma linguagem clara e acessível, evitando
                jargões técnicos, para que você entenda cada etapa do processo
                contábil e possa tomar decisões informadas.
              </p>
            </div>
          </motion.div>
          <motion.div className="flex flex-col gap-3" variants={itemVariants}>
            <div className="flex items-start gap-3">
              <img
                src={relacionamento}
                alt="Relacionamento Próximo com o Cliente"
                className="h-8 w-8 object-contain"
              />
              <h3 className="text-lg md:text-xl font-semibold text-[#383330]">
                Relacionamento Próximo com o Cliente
              </h3>
            </div>
            <div className="ml-12">
              <p className="text-sm md:text-base text-[#383330] leading-relaxed">
                Mantemos uma relação próxima e proativa com nossos clientes,
                oferecendo suporte contínuo e personalizado para atender às suas
                necessidades específicas.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <div className="mt-12 flex justify-center">
          {buildWhatsappLinkDiferenciais() && (
            <motion.a
              href={buildWhatsappLinkDiferenciais() ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#383330] px-6 py-2 rounded-full text-sm md:text-base font-bold tracking-wide cursor-pointer z-40 pointer-events-auto"
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: DURATION_BASE,
                ease: EASE_DEFAULT,
                delay: SECTION_STAGGER,
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const href = buildWhatsappLinkDiferenciais();
                if (href) window.open(href, "_blank");
              }}
            >
              CONHEÇA TODOS NOSSOS DIFERENCIAIS
            </motion.a>
          )}
        </div>
      </div>
    </section>
  );
}
