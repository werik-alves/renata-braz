import Image from "next/image";
import { iconeValores } from "../lib/assets";
import { buildWhatsappLinkPlanosValores } from "../lib/links";

export default function Plans() {
  const whatsappLinkPlanosValores = buildWhatsappLinkPlanosValores();
  return (
    <section id="valores" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-[#2F2926] p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-[#F1EDE4]">Planos & Valores</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-[minmax(220px,260px)_1fr] gap-4 sm:gap-6 md:gap-8 items-start">
            <div className="bg-[#F1EDE4] p-6 rounded-2xl shadow-lg border border-black/10 w-full sm:w-[260px] max-w-[320px] mx-auto sm:mx-0 flex flex-col gap-4">
              <h3 className="text-center text-[#383330] text-base sm:text-lg md:text-xl font-semibold">Assessoria Mensal</h3>
              <p className="text-[#383330] text-sm sm:text-base md:text-lg font-semibold">A partir de:</p>
              <div className="flex items-baseline gap-1">
                <span className="text-[#383330] text-base sm:text-lg font-semibold">R$</span>
                <span className="text-[#383330] text-4xl sm:text-5xl md:text-6xl leading-none font-extrabold">310</span>
                <span className="text-[#383330] text-xl sm:text-2xl md:text-3xl font-semibold">,00</span>
              </div>
              <div className="text-[#383330] text-xs sm:text-sm font-semibold text-end">/mês</div>
              {whatsappLinkPlanosValores ? (
                <a
                  href={whatsappLinkPlanosValores}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 bg-[#383330] text-white px-4 py-2 rounded-lg text-sm font-semibold text-center"
                  aria-label="Abrir WhatsApp para Planos e Valores"
                >
                  Entre em contato
                </a>
              ) : (
                <button
                  className="mt-2 bg-[#383330] text-white px-4 py-2 rounded-lg text-sm font-semibold opacity-60 cursor-not-allowed"
                  disabled
                  aria-label="WhatsApp não configurado"
                >
                  Entre em contato
                </button>
              )}
            </div>
            <div className="w-full flex flex-col gap-3 sm:gap-4">
              <div className="flex items-start gap-3">
                <Image src={iconeValores} alt="Ícone" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-[#F1EDE4] text-sm sm:text-base font-medium leading-relaxed">Acompanhamento Contábil (Escrituração e Elaboração Balanço Patrimonial);</p>
              </div>
              <div className="flex items-start gap-3">
                <Image src={iconeValores} alt="Ícone" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-[#F1EDE4] text-sm sm:text-base font-medium leading-relaxed">Elaboração de relatórios extra contábeis que facilitam a tomada de decisão;</p>
              </div>
              <div className="flex items-start gap-3">
                <Image src={iconeValores} alt="Ícone" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-[#F1EDE4] text-sm sm:text-base font-medium leading-relaxed">Apuração de impostos;</p>
              </div>
              <div className="flex items-start gap-3">
                <Image src={iconeValores} alt="Ícone" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-[#F1EDE4] text-sm sm:text-base font-medium leading-relaxed">Suporte e consultoria na emissão de NFSe/NFe;</p>
              </div>
              <div className="flex items-start gap-3">
                <Image src={iconeValores} alt="Ícone" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-[#F1EDE4] text-sm sm:text-base font-medium leading-relaxed">Parcelamentos;</p>
              </div>
              <div className="flex items-start gap-3">
                <Image src={iconeValores} alt="Ícone" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-[#F1EDE4] text-sm sm:text-base font-medium leading-relaxed">Alterações societárias;</p>
              </div>
              <div className="flex items-start gap-3">
                <Image src={iconeValores} alt="Ícone" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-[#F1EDE4] text-sm sm:text-base font-medium leading-relaxed">Emissão de folha de pagamento (1 sócio);</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}