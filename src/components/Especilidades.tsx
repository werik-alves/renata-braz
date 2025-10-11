export default function Especilidades() {
  return (
    <section id="especilidades" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-[#2F2926] p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#F1EDE4]">Especialidades</h2>

          <div className="mx-auto mt-4 max-w-2xl rounded-md bg-[#F1EDE4] px-4 py-3 text-center">
            <p className="text-sm md:text-base text-[#383330] px-8 md:px-14">
              "Soluções contábeis personalizadas para atender às necessidades específicas do seu negócio"
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F1EDE4] rounded-2xl p-6 shadow border border-black/10">
              <h3 className="text-[#383330] text-base md:text-lg font-semibold">Assessoria Mensal<br/>Simples Nacional</h3>
              <button className="mt-4 inline-flex items-center justify-center rounded-md bg-[#B3A79B] text-[#50341F] px-4 py-2 text-sm font-semibold">Saiba mais</button>
            </div>

            <div className="bg-[#F1EDE4] rounded-2xl p-6 shadow border border-black/10">
              <h3 className="text-[#383330] text-base md:text-lg font-semibold">Assessoria MEI</h3>
              <button className="mt-4 inline-flex items-center justify-center rounded-md bg-[#B3A79B] text-[#50341F] px-4 py-2 text-sm font-semibold">Saiba mais</button>
            </div>

            <div className="bg-[#F1EDE4] rounded-2xl p-6 shadow border border-black/10">
              <h3 className="text-[#383330] text-base md:text-lg font-semibold">Regularizações de<br/>Empresas</h3>
              <button className="mt-4 inline-flex items-center justify-center rounded-md bg-[#B3A79B] text-[#50341F] px-4 py-2 text-sm font-semibold">Saiba mais</button>
            </div>

            <div className="bg-[#F1EDE4] rounded-2xl p-6 shadow border border-black/10">
              <h3 className="text-[#383330] text-base md:text-lg font-semibold">Abertura de CNPJ</h3>
              <button className="mt-4 inline-flex items-center justify-center rounded-md bg-[#B3A79B] text-[#50341F] px-4 py-2 text-sm font-semibold">Saiba mais</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
