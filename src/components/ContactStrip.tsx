import Image from "next/image";
import { assets, byNodeId } from "../lib/assets";

export default function ContactStrip() {
  return (
    <section className="relative z-20 -mt-12 md:-mt-16 py-6">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-1 bg-[#B3A79B]">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <Image src={assets.users} alt="Usuários" width={40} height={40} className="object-contain" />
            </div>
            <div>
              <p className="text-base font-bold text-[#50341F]">+ de 300 clientes satisfeito</p>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-[#F1EDE4]">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <Image src={assets.world} alt="Usuários" width={40} height={40} className="object-contain" />
            </div>
            <div>
              <p className="text-base font-bold text-[#50341F]">Atendimento em todo Território Nacional</p>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-[#B3A79B]">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <Image src={assets.time} alt="Usuários" width={40} height={40} className="object-contain" />
            </div>
            <div>
              <p className="text-base font-bold text-[#50341F]">Das 08:00 às 17:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}