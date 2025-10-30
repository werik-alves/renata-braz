/* eslint-disable @next/next/no-img-element */
import { buildWhatsappLinkImposto } from "../lib/links";
export default function Conteudo() {
  const whatsappLinkImposto = buildWhatsappLinkImposto();
  return (
    <section
      id="about"
      className="py-20 mx-auto max-w-6xl px-4 flex flex-col lg:flex-row gap-2"
    >
      <div className="order-2 lg:order-1 flex flex-col justify-center w-full p-4 h-full rounded-md mr-16">
        <h2 className="text-2xl font-semibold text-[#383330]">
          Faça sua Declaração de Imposto de Renda com tranquilidade e garantia!
        </h2>
        <p className="mt-4 text-base text-[#383330] leading-8">
          Sabemos que lidar com o Imposto de Renda pode gerar muitas dúvidas.
          Por isso, nossa equipe de especialistas está pronta para tornar esse
          processo mais simples e tranquilo para você. Oferecemos consultoria
          personalizada para ajudar você a economizar de forma legal e evitar a
          temida malha fina.
        </p>
        <br />
        <p className="mt-4 text-base text-[#383330]">
          Clique em “
          {whatsappLinkImposto ? (
            <a
              href={whatsappLinkImposto}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              Quero ajuda para declarar meu IRPF
            </a>
          ) : (
            <span className="underline">
              Quero ajuda para declarar meu IRPF
            </span>
          )}
          ” e deixe essa responsabilidade por nossa conta!
        </p>
        {whatsappLinkImposto ? (
          <a
            href={whatsappLinkImposto}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-[#F1EDE4] px-4 py-2 rounded-md self-center text-1xl font-bold cursor-pointer bg-[#383330] hover:opacity-80 transition-opacity"
            aria-label="Abrir WhatsApp para IRPF"
          >
            Quero ajuda para declarar meu IRPF
          </a>
        ) : (
          <button
            className="mt-4 text-[#F1EDE4] px-4 py-2 rounded-md self-center text-1xl font-bold bg-[#383330] opacity-60 cursor-not-allowed"
            disabled
            aria-label="WhatsApp não configurado"
          >
            Quero ajuda para declarar meu IRPF
          </button>
        )}
      </div>
      <div className="order-1 lg:order-2 mx-auto max-w-6xl px-4">
        <img
          src="/assets/renata.png"
          alt="Renata Braz, consultora de Imposto de Renda"
          className="sm:w-full md:w-96 lg:max-w-2xs"
        />
      </div>
    </section>
  );
}
