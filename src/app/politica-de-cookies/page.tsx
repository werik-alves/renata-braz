import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Entenda quais cookies usamos, para quais finalidades e como gerenciá-los.",
};

export default function PoliticaCookiesPage() {
  return (
    <section className="container mx-auto px-4 py-10 max-w-3xl bg-[#f8f9fa] text-[#343a40]">
      <h1 className="text-3xl font-semibold mb-6">Política de Cookies</h1>

      <p className="mb-4">
        Utilizamos cookies e tecnologias semelhantes para oferecer, manter e
        melhorar nossos serviços e a experiência de navegação.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. O que são cookies?</h2>
      <p className="mb-4">
        Cookies são pequenos arquivos armazenados no seu dispositivo que
        permitem funcionalidades como lembrar preferências e entender como o
        site é utilizado.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        2. Tipos de cookies que usamos
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>
          <span className="font-medium">Essenciais:</span> necessários para o
          funcionamento do site.
        </li>
        <li>
          <span className="font-medium">Desempenho/Analíticos:</span> ajudam a
          entender o uso do site para melhoria contínua.
        </li>
        <li>
          <span className="font-medium">Funcionais:</span> lembram suas
          preferências.
        </li>
        <li>
          <span className="font-medium">Marketing:</span> usados para conteúdo e
          comunicação relevantes.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Gestão de cookies</h2>
      <p className="mb-4">
        Você pode gerenciar cookies pelas configurações do navegador e pelo
        banner de consentimento exibido no site.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Terceiros</h2>
      <p className="mb-4">
        Alguns cookies podem ser definidos por terceiros. Recomendamos consultar
        as políticas dos respectivos fornecedores para detalhes.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Mais informações</h2>
      <p className="mb-4">
        Para saber como tratamos seus dados pessoais, consulte nossa
        <Link
          href="/politica-de-privacidade"
          className="underline font-medium ml-1"
        >
          Política de Privacidade
        </Link>
        .
      </p>

      <p className="text-sm text-muted mt-8">
        Última atualização: {new Date().getFullYear()}
      </p>
    </section>
  );
}
