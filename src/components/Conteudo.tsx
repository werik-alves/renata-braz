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
        <h2 className="text-2xl font-semibold text-[#50341F]">
          Faça sua Declaração de Imposto de Renda com tranquilidade e garantia!
        </h2>
        <p className="mt-4 text-base text-[#50341F]">
          Sabemos que lidar com o Imposto de Renda pode gerar muitas dúvidas,
          mas nossa equipe de especialistas está pronta para simplificar esse
          momento para você. Contamos com consultoria própria para ajudar você a
          economizar legalmente e evitamos a temida malha fina.
        </p>
        <br />
        <p className="mt-4 text-base text-[#50341F]">
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
            className="mt-4 text-[#F1EDE4] px-4 py-2 rounded-md self-center text-1xl font-bold cursor-pointer bg-[#50341F]"
            aria-label="Abrir WhatsApp para IRPF"
          >
            Quero ajuda para declarar meu IRPF
          </a>
        ) : (
          <button
            className="mt-4 text-[#F1EDE4] px-4 py-2 rounded-md self-center text-1xl font-bold bg-[#50341F] opacity-60 cursor-not-allowed"
            disabled
            aria-label="WhatsApp não configurado"
          >
            Quero ajuda para declarar meu IRPF
          </button>
        )}
      </div>
      <div className="order-1 lg:order-2 mx-auto max-w-6xl px-4">
        <img
          src="/assets/renata_.png"
          alt=""
          className="sm:w-full md:w-96 lg:max-w-2xs"
        />
      </div>
    </section>
  );
}
