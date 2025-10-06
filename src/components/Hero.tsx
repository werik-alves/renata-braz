import Image from 'next/image';

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
          src="/assets/logoMaior.png"
          alt="Logo"
          width={160}
          height={100}
          className="object-contain"
        />
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Contabilidade Digital</h1>
        <p className="mt-2 text-lg text-[#FFFFFF]">Para profissionais que querem legalizar seus sonhos e economizar impostos.</p>
      </div>
    </section>
  );
}