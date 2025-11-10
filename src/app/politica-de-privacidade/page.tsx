import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade e Cookies",
  description:
    "Como coletamos, usamos, divulgamos e protegemos seus dados pessoais e cookies.",
};

export default function PoliticaPrivacidadePage() {
  const hoje = new Date();
  const dataHoje = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(hoje);
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://confluicontabilidade.com.br";

  return (
    <section className="container mx-auto px-4 py-10 max-w-3xl bg-[#f8f9fa] text-[#343a40]">
      <h1 className="text-3xl font-semibold mb-6">
        Política de Privacidade e Cookies
      </h1>

      <p className="mb-4">
        Última atualização: <span className="font-medium">{dataHoje}</span>
      </p>

      <p className="mb-4">
        Bem-vindo ao nosso site. A sua privacidade é importante para nós. Esta
        Política de Privacidade e Cookies explica como coletamos, usamos,
        divulgamos e protegemos os seus dados pessoais quando você acessa e
        utiliza o site{" "}
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {siteUrl}
        </a>{" "}
        (o “Site”), mantido por Conflui Contabilidade Digital LTDA, CNPJ
        54.151.365/0001-46, com sede na Rua Nogueira Acioli, 1505 – Centro,
        Fortaleza/CE, CEP 60110-140 (“Nós”, “Nosso”, “Conflui”).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        1. Quais dados coletamos
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-medium">
            Dados que você nos fornece diretamente:
          </span>{" "}
          por exemplo, nome, e-mail, telefone, empresa, cargo quando solicita
          serviços ou orçamento.
        </li>
        <li>
          <span className="font-medium">
            Dados gerados pela utilização do Site:
          </span>{" "}
          como endereço IP, tipo de dispositivo, sistema operacional, navegador,
          páginas visitadas, data e hora do acesso.
        </li>
        <li>
          <span className="font-medium">Cookies</span> ou tecnologias
          semelhantes para rastrear e lembrar as suas preferências e interações
          no Site.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        2. Para que finalidades usamos os seus dados
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Processar sua solicitação de orçamento ou contato, prestar nossos
          serviços de contabilidade, assessoramento e demais atividades
          correlatas.
        </li>
        <li>
          Melhorar o Site, entendendo o uso que você faz, para aprimorar nossos
          serviços, conteúdo e experiência dos usuários.
        </li>
        <li>
          Cumprir obrigações legais ou regulatórias a que estivermos submetidos.
        </li>
        <li>
          Enviar comunicações informativas ou promocionais (mediante seu
          consentimento quando necessário).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        3. Base legal para tratamento
      </h2>
      <p className="mb-2">
        Conforme a LGPD, os dados pessoais são tratados com base em uma ou mais
        das bases legais, tais como:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Consentimento do titular, quando exigido.</li>
        <li>Cumprimento de obrigação legal ou regulatória.</li>
        <li>Execução de contrato ou pré-contrato do qual você seja parte.</li>
        <li>
          Legítimo interesse do controlador, desde que não prevaleçam os seus
          direitos e liberdades fundamentais.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        4. Cookies e tecnologias semelhantes
      </h2>
      <h3 className="text-lg font-semibold mt-4 mb-2">4.1 O que são cookies</h3>
      <p className="mb-4">
        Cookies são pequenos arquivos de texto enviados e armazenados no seu
        dispositivo quando você acessa o Site. Eles ajudam a lembrar
        preferências, a facilitar a navegação e a oferecer uma experiência
        personalizada.
      </p>
      <h3 className="text-lg font-semibold mt-4 mb-2">
        4.2 Que tipos de cookies usamos
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-medium">Cookies essenciais:</span> necessários
          para funcionamento do Site.
        </li>
        <li>
          <span className="font-medium">Cookies de preferência:</span> para
          lembrar suas escolhas, como idioma ou regiões.
        </li>
        <li>
          <span className="font-medium">Cookies de estatísticas:</span> para
          entender como o Site é usado e melhorar nosso conteúdo.
        </li>
        <li>
          <span className="font-medium">Cookies de marketing:</span> para
          rastrear visitantes no Site e exibir anúncios relevantes.
        </li>
      </ul>
      <h3 className="text-lg font-semibold mt-4 mb-2">
        4.3 Seu controle sobre cookies
      </h3>
      <p className="mb-4">
        Você pode controlar ou deletar os cookies conforme desejar — via
        configurações do seu navegador ou usando nosso banner de cookies (quando
        disponível). Note que desabilitar cookies essenciais pode afetar a
        funcionalidade do Site. Para mais detalhes, consulte nossa{" "}
        <Link href="/politica-de-cookies" className="underline font-medium">
          Política de Cookies
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        5. Compartilhamento de dados
      </h2>
      <p className="mb-4">
        Não vendemos seus dados pessoais. Podemos compartilhar seus dados com:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Prestadores de serviços contratados para suporte técnico, hospedagem,
          envio de e-mail/SMS, etc. Esses prestadores estão contratualmente
          obrigados a manter a confidencialidade e adequar-se à LGPD.
        </li>
        <li>
          Autoridades ou entidades regulatórias, se exigido por lei ou por
          processo legal.
        </li>
        <li>
          Em casos de fusão, aquisição ou reorganização societária, seus dados
          poderão ser transferidos como parte do negócio, sempre respeitando os
          mesmos níveis de proteção.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        6. Segurança dos dados
      </h2>
      <p className="mb-4">
        Implementamos medidas técnicas e organizacionais razoáveis para proteger
        seus dados contra acesso não autorizado, divulgação, alteração ou
        destruição. Apesar disso, nenhuma transmissão de dados via internet é
        completamente segura — não podemos garantir 100% de segurança.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        7. Prazo de armazenamento
      </h2>
      <p className="mb-4">
        Reteremos seus dados pessoais pelo tempo necessário para cumprir as
        finalidades descritas nesta Política, respeitando os prazos legais
        aplicáveis. Quando não forem mais necessários, os dados serão
        descartados ou anonimizados.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        8. Direitos dos titulares
      </h2>
      <p className="mb-4">
        Como titular dos dados, você tem os seguintes direitos, conforme a LGPD:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Solicitar confirmação da existência de tratamento de seus dados
          pessoais.
        </li>
        <li>Acessar seus dados pessoais que tratamos.</li>
        <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
        <li>
          Solicitar anonimização, bloqueio ou eliminação de dados
          desnecessários, excessivos ou tratados em desconformidade.
        </li>
        <li>
          Opor-se ao tratamento de dados, enquanto estiverem sob nossa
          responsabilidade e tratamento.
        </li>
        <li>
          Requerer portabilidade dos dados a outro fornecedor, se tecnicamente
          viável.
        </li>
        <li>Retirar o consentimento dado, quando aplicável.</li>
        <li>
          Requerer informação sobre entidades públicas ou privadas com as quais
          compartilhamos seus dados.
        </li>
        <li>
          Requerer revogação do consentimento ou exercer outro direito previsto
          na LGPD.
        </li>
      </ul>
      <p className="mb-4">
        Para exercer qualquer desses direitos, entre em contato conosco pelo
        e-mail{" "}
        <a
          href="mailto:contato@confluicontabilidade.com.br"
          className="underline"
        >
          contato@confluicontabilidade.com.br
        </a>{" "}
        ou WhatsApp no número disponível no Site. Responderemos em até 15 dias,
        salvo prazo diferente definido pela lei/regulamento aplicável.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        9. Alterações nesta Política
      </h2>
      <p className="mb-4">
        Podemos revisar esta Política de Privacidade de tempos em tempos. Quando
        mudanças significativas ocorrerem, notificaremos você via banner,
        pop-up, ou link destacado no Site. Recomendamos que você verifique esta
        Política periodicamente.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">10. Contato</h2>
      <address className="not-italic mb-4">
        Conflui Contabilidade Digital LTDA
        <br />
        E-mail:{" "}
        <a
          href="mailto:contato@confluicontabilidade.com.br"
          className="underline"
        >
          contato@confluicontabilidade.com.br
        </a>
        <br />
        WhatsApp: [número disponível no Site]
        <br />
        Endereço: Rua Nogueira Acioli, 1505 – Centro, Fortaleza/CE, CEP
        60110-140
      </address>

      <p className="text-sm text-muted mt-8">Última atualização: {dataHoje}</p>
    </section>
  );
}
