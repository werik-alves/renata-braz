"use client";

import Image from "next/image";
import { assets } from "../lib/assets";
import { motion } from "framer-motion";
import { DURATION_BASE, EASE_DEFAULT, seqDelay } from "@/lib/animation";

export default function ContactStrip() {
  return (
    <section className="relative z-20 -mt-12 md:-mt-16 py-6">
      <div className="mx-auto max-w-6xl px-4 sm:mt-11 md:mt-0 mt-11">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 justify-center">
          <motion.div
            className="flex flex-col items-center justify-center text-center bg-[#B3A79B] shadow-lg rounded-md h-[120px]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: DURATION_BASE,
              ease: EASE_DEFAULT,
              delay: seqDelay(0),
            }}
          >
            <div className="relative flex items-center justify-center">
              <Image
                src={assets.users}
                alt="Clientes satisfeitos"
                width={40}
                height={40}
                className="object-contain mt-3"
              />
            </div>
            <div>
              <p className="text-base font-bold text-[#383330] text-center mb-3">
                + de 100 clientes <br /> satisfeitos
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center text-center gap-1 bg-[#F1EDE4] shadow-lg rounded-md h-[120px]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: DURATION_BASE,
              ease: EASE_DEFAULT,
              delay: seqDelay(1),
            }}
          >
            <div className="relative flex items-center justify-center">
              <Image
                src={assets.world}
                alt="Atendimento nacional"
                width={40}
                height={40}
                className="object-contain mt-3"
              />
            </div>
            <div>
              <p className="text-base font-bold text-[#383330] text-center mb-3">
                Atendimento em todo <br /> Território Nacional
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center text-center gap-1 bg-[#B3A79B] shadow-lg rounded-md h-[120px]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: DURATION_BASE,
              ease: EASE_DEFAULT,
              delay: seqDelay(2),
            }}
          >
            <div className="relative flex items-center justify-center">
              <Image
                src={assets.time}
                alt="Horário de atendimento"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-base font-bold text-[#383330] text-center">
                Das 08:00 às 17:00
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
