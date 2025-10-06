import Image from "next/image";
import { byNodeId } from "../lib/assets";

export default function Plans() {
  return (
    <section id="plans" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={byNodeId("151:150")}
            alt="Fundo Planos e Valores"
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
          <div className="absolute inset-0 p-8 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Planos e Valores</h2>
            <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block w-4 h-4 bg-foreground/80 rounded-sm" />
                <span>Acompanhamento Contábil (Escrituração e Elaboração Balanço Patrimonial)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block w-4 h-4 bg-foreground/80 rounded-sm" />
                <span>Elaboração de relatórios extra contábeis que facilitam a tomada de decisão</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block w-4 h-4 bg-foreground/80 rounded-sm" />
                <span>Apuração de impostos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}