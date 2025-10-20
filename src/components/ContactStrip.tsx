"use client";

import Image from "next/image";
import { assets } from "../lib/assets";
import { motion } from "framer-motion";

export default function ContactStrip() {
  return (
    <section className="relative z-20 -mt-12 md:-mt-16 py-6">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <motion.div
            className="flex items-center gap-1 bg-[#B3A79B]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          >
            <div className="relative w-28 h-28 flex items-center justify-center">
              <Image
                src={assets.users}
                alt="Usuários"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-base font-bold text-[#50341F]">
                + de 300 clientes satisfeito
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-1 bg-[#F1EDE4]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          >
            <div className="relative w-28 h-28 flex items-center justify-center">
              <Image
                src={assets.world}
                alt="Usuários"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-base font-bold text-[#50341F]">
                Atendimento em todo Território Nacional
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-1 bg-[#B3A79B]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          >
            <div className="relative w-28 h-28 flex items-center justify-center">
              <Image
                src={assets.time}
                alt="Usuários"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-base font-bold text-[#50341F]">
                Das 08:00 às 17:00
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
