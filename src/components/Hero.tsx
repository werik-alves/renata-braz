"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F5] bg-gradient-to-br from-primary/10 via-accent/10 to-highlight/10 p-6 sm:p-8 md:p-12 lg:p-16 min-h-[420px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[640px] xl:min-h-[720px] flex items-center">
      {/* Fundo absoluto atrás (acima do background da seção, atrás do conteúdo) */}
      <div
        className="absolute inset-0 bg-[url('/assets/heroFundo.png')] bg-cover bg-center z-0"
        aria-hidden="true"
      />

      {/* Conteúdo na frente, centralizado */}
      <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 md:px-8 flex flex-col items-center text-center gap-4">
        <Image
          src="/assets/hero.png"
          alt="Logo"
          width={440}
          height={330}
          className="h-auto object-contain w-[220px] sm:w-[300px] md:w-[360px] lg:w-[440px]"
          sizes="(min-width: 1024px) 440px, (min-width: 768px) 360px, 220px"
          priority
        />

        <h1 className="mt-2 text-base sm:text-lg md:text-xl lg:text-xl text-[#F1EDE4]">
          Para profissionais que querem legalizar seus sonhos e{" "}
          <br className="hidden md:block" />
          economizar impostos.
        </h1>
      </div>
    </section>
  );
}
