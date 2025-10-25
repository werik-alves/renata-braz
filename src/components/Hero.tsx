import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F5F5F5] bg-gradient-to-br from-primary/10 via-accent/10 to-highlight/10 p-8 md:p-12 min-h-[420px] md:min-h-[520px] flex items-center">
      {/* Fundo absoluto atrás */}
      <Image
        src="/assets/heroFundo.png"
        alt="Fundo"
        fill
        priority
        className="absolute inset-0 object-cover -z-10"
        sizes="100vw"
      />

      {/* Conteúdo na frente, centralizado */}
      <div className="relative z-10 mx-auto max-w-6xl w-full flex flex-col items-center text-center gap-4">
        <Image
          src="/assets/hero.png"
          alt="Logo"
          width={400}
          height={300}
          className="object-contain"
        />

        <h1 className="mt-2 text-lg text-[#F1EDE4]">
          Para profissionais que querem legalizar seus sonhos e <br />
          economizar impostos.
        </h1>
      </div>
    </section>
  );
}
