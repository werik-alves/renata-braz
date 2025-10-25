import Image from "next/image";
import { buildWhatsappLink } from "../lib/links";

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappHref = buildWhatsappLink();

  return (
    <footer className="w-full bg-[#383330] text-[#F1EDE4] py-10 mt-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 justify-center items-center">
        {/* Logo acima das duas colunas (todas as larguras) */}
        <div className="flex justify-center items-center mb-6 md:mb-8">
          <Image
            src="/assets/hero.png"
            alt="Logo"
            width={400}
            height={300}
            className="w-50 h-24 object-contain md:w-40 md:h-24"
          />
        </div>

        {/* Duas colunas abaixo do logo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Fale conosco */}
          <div>
            <h3 className="font-semibold text-2xl md:text-3xl">Fale conosco</h3>
            <ul className="mt-4 space-y-3 text-sm md:text-base">
              <li className="flex items-center gap-3">
                <Image
                  src="/assets/wapp.png"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                {whatsappHref ? (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    aria-label="Abrir conversa no WhatsApp"
                  >
                    WhatsApp
                  </a>
                ) : (
                  <span>WhatsApp</span>
                )}
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src="/assets/instagram.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span>Instagram</span>
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src="/assets/email.png"
                  alt="E-mail"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <a
                  href="mailto:contato@escritoriorenatabraz.com.br"
                  className="hover:underline"
                >
                  contato@confluicontabilidade.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-bold text-2xl md:text-3xl">Empresa</h3>
            <div className="mt-4 space-y-2 text-sm md:text-base">
              <p>RENATA BRAZ CONTABILIDADE DIGITAL LTDA</p>
              <p>CRCCE - 003531/O-0</p>
              <p>CNPJ: 54.151.365.0001/46</p>
              <p>
                Endereço: R. Sen. Pompeu, 834 - 60025-000 sala 415 - Centro,
                Fortaleza - CE, 60000-060
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs">
          © {year} Renata Braz. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
