import { acessoria, comunicacao, emissao, relacionamento } from '@/lib/assets';
export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#383330] text-center">Diferenciais</h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <img src={acessoria} alt="" className="h-8 w-8 object-contain" />
              <h3 className="text-lg md:text-xl font-semibold text-[#383330]">Assessoria na Contratação de Sistema</h3>
            </div>
            <div className="ml-12">
              <p className="text-sm md:text-base text-[#383330] leading-relaxed">Orientamos na escolha e implementação dos melhores sistemas de gestão contábil e financeira, garantindo que a tecnologia trabalhe a favor do seu negócio.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <img src={emissao} alt="" className="h-8 w-8 object-contain" />
              <h3 className="text-lg md:text-xl font-semibold text-[#383330]">Emissão de Relatórios Extra Contábeis</h3>
            </div>
            <div className="ml-12">
              <p className="text-sm md:text-base text-[#383330] leading-relaxed">Desenvolvemos relatórios personalizados além das obrigações contábeis tradicionais, que facilitam a gestão financeira e a tomada de decisões estratégicas.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <img src={comunicacao} alt="" className="h-8 w-8 object-contain" />
              <h3 className="text-lg md:text-xl font-semibold text-[#383330]">Comunicação de Fácil Entendimento</h3>
            </div>
            <div className="ml-12">
              <p className="text-sm md:text-base text-[#383330] leading-relaxed">Nossa equipe utiliza uma linguagem clara e acessível, evitando jargões técnicos, para que você entenda cada etapa do processo contábil e possa tomar decisões informadas.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <img src={relacionamento} alt="" className="h-8 w-8 object-contain" />
              <h3 className="text-lg md:text-xl font-semibold text-[#383330]">Relacionamento Próximo com o Cliente</h3>
            </div>
            <div className="ml-12">
              <p className="text-sm md:text-base text-[#383330] leading-relaxed">Mantemos uma relação próxima e proativa com nossos clientes, oferecendo suporte contínuo e personalizado para atender às suas necessidades específicas.</p>
            </div>
          </div>
        </div>
        <p className="mt-12 text-center text-xs md:text-sm font-bold tracking-wide text-[#383330]">CONHEÇA TODOS NOSSOS DIFERENCIAIS</p>
      </div>
    </section>
  );
}