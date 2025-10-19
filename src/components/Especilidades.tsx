/* eslint-disable react/no-unescaped-entities */
import { linkAcessoriaMei } from "@/lib/links";
import { linkAcessoriaMensal } from "@/lib/links";
import { linkRegularizacao } from "@/lib/links";
import { linkAberturaCnpj } from "@/lib/links";
export default function Especilidades() {
  return (
    <section id="especilidades" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-[#2F2926] p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#F1EDE4]">
            Especialidades
          </h2>

          <div className="mx-auto mt-4 w-full max-w-[640px] rounded-md bg-[#F1EDE4] px-4 py-3 text-center">
            <p className="text-sm md:text-base text-[#383330] px-8 md:px-14">
              "Soluções contábeis personalizadas para atender às necessidades
              específicas do seu negócio"
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            <div className="relative pb-1 cursor-pointer">
              <div className="bg-[#F1EDE4] rounded-2xl p-6 inset-shadow-sm inset-shadow-black hover:bg-[#ffffff]">
                <h3 className="text-[#383330] text-base md:text-lg font-semibold text-center">
                  Assessoria Mensal
                  <br />
                  Simples Nacional
                </h3>
              </div>
              <button className="cursor-pointer absolute sm:-bottom-5 md:-bottom-0.5 -bottom-5 left-1/2 -translate-x-1/2 inline-flex items-center justify-center rounded-md bg-[#B3A79B] text-[#50341F] px-4 py-2 text-sm font-semibold shadow ring-1 ring-black/10">
                {linkAcessoriaMensal() && (
                  <a
                    href={linkAcessoriaMensal() ?? undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Saiba mais
                  </a>
                )}
              </button>
            </div>

            <div className="relative pb-6 cursor-pointer">
              <div className="bg-[#F1EDE4] rounded-2xl p-9.5 inset-shadow-sm inset-shadow-black hover:bg-[#ffffff]">
                <h3 className="text-[#383330] text-base md:text-lg font-semibold text-center">
                  Assessoria MEI
                </h3>
              </div>
              <button className="cursor-pointer  absolute -bottom-0 left-1/2 -translate-x-1/2 inline-flex items-center justify-center rounded-md bg-[#B3A79B] text-[#50341F] px-4 py-2 text-sm font-semibold shadow ring-1 ring-black/10">
                {linkAcessoriaMei() && (
                  <a
                    href={linkAcessoriaMei() ?? undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Saiba mais
                  </a>
                )}
              </button>
            </div>

            <div className="relative pb-1 cursor-pointer">
              <div className="bg-[#F1EDE4] rounded-2xl p-6 inset-shadow-sm inset-shadow-black hover:bg-[#ffffff]">
                <h3 className="text-[#383330] text-base md:text-lg font-semibold text-center">
                  Regularizações de
                  <br />
                  Empresas
                </h3>
              </div>
              <button className=" cursor-pointer absolute sm:-bottom-5 md:-bottom-0.5 -bottom-5 left-1/2 -translate-x-1/2 inline-flex items-center justify-center rounded-md bg-[#B3A79B] text-[#50341F] px-4 py-2 text-sm font-semibold shadow ring-1 ring-black/10">
                {linkRegularizacao() && (
                  <a
                    href={linkRegularizacao() ?? undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Saiba mais
                  </a>
                )}
              </button>
            </div>

            <div className="relative pb-6 cursor-pointer">
              <div className="bg-[#F1EDE4] rounded-2xl p-9.5 inset-shadow-sm inset-shadow-black hover:bg-[#ffffff]">
                <h3 className="text-[#383330] text-base md:text-lg font-semibold text-center">
                  Abertura de CNPJ
                </h3>
              </div>
              <button className="cursor-pointer absolute -bottom-0.5 left-1/2 -translate-x-1/2 inline-flex items-center justify-center rounded-md bg-[#B3A79B] text-[#50341F] px-4 py-2 text-sm font-semibold shadow ring-1 ring-black/10">
                {linkAberturaCnpj() && (
                  <a
                    href={linkAberturaCnpj() ?? undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Saiba mais
                  </a>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
