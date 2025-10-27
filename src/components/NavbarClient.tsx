"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "../lib/assets";

export default function NavbarClient({
  whatsappHref,
}: {
  whatsappHref: string | null;
}) {
  const [open, setOpen] = useState(false);

  const NavItems = ({ onSelect }: { onSelect?: () => void }) => (
    <>
      <Link href="/" className="hover:opacity-80" onClick={onSelect}>
        Home
      </Link>
      <Link href="#sobre" className="hover:opacity-80" onClick={onSelect}>
        Sobre
      </Link>
      <Link href="#services" className="hover:opacity-80" onClick={onSelect}>
        Serviços
      </Link>
      <Link href="#valores" className="hover:opacity-80" onClick={onSelect}>
        Valores
      </Link>
      {whatsappHref ? (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium bg-[#383330] text-[#F1EDE4] px-4 py-2 rounded-md hover:opacity-90"
          onClick={onSelect}
          aria-label="Solicite um orçamento pelo WhatsApp"
        >
          Solicite um orçamento
        </a>
      ) : (
        <button
          className="font-medium bg-[#383330] text-[#F1EDE4] px-4 py-2 rounded-md opacity-60 cursor-not-allowed"
          disabled
        >
          Solicite um orçamento
        </button>
      )}
    </>
  );

  return (
    <nav className="bg-[#F8F9FA] text-[#383330] w-full sticky top-0 md:fixed md:left-0 md:right-0 z-50 pt-[env(safe-area-inset-top)]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={assets.logo}
              alt="Logo Conflui Contabilidade"
              width={40}
              height={40}
              priority
            />
            <span className="sr-only">Início</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <NavItems />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#F1EDE4] hover:bg-[#F1EDE4]/10"
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          open ? "" : "pointer-events-none"
        }`}
      >
        {/* overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        {/* panel */}
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-[#383330] text-[#F1EDE4] shadow-xl ring-1 ring-black/10 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <span className="font-semibold">Menu</span>
            <button
              aria-label="Fechar menu"
              className="rounded-md p-2 hover:bg-[#F1EDE4]/10"
              onClick={() => setOpen(false)}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l8 8M6 14L14 6" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-4 p-4 text-sm">
            <NavItems onSelect={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </nav>
  );
}
