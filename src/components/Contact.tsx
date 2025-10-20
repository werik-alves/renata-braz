"use client";

import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const nameValid = /^[A-Za-zÀ-ÿ'\s]{2,}$/.test(name.trim());
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  const phoneDigits = phone.replace(/\D/g, "");
  const phoneValid = phoneDigits.length === 10 || phoneDigits.length === 11;
  const formValid = nameValid && emailValid && phoneValid;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = String(e.target.value).replace(/[^A-Za-zÀ-ÿ'\s]/g, "");
    setName(sanitized);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(String(e.target.value));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyDigits = String(e.target.value).replace(/\D/g, "").slice(0, 11);
    let formatted = onlyDigits;
    if (onlyDigits.length <= 2) {
      formatted = `(${onlyDigits}`;
    } else if (onlyDigits.length <= 6) {
      formatted = `(${onlyDigits.slice(0, 2)}) ${onlyDigits.slice(2)}`;
    } else if (onlyDigits.length <= 10) {
      formatted = `(${onlyDigits.slice(0, 2)}) ${onlyDigits.slice(
        2,
        6
      )}-${onlyDigits.slice(6)}`;
    } else {
      formatted = `(${onlyDigits.slice(0, 2)}) ${onlyDigits.slice(
        2,
        7
      )}-${onlyDigits.slice(7)}`;
    }
    setPhone(formatted);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true });
    if (!formValid) return;
    // Aqui você pode integrar com seu backend/serviço de envio
    console.log({ name, email, phone: phoneDigits });
  };
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-[#383330] p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* Card de formulário */}
            <div className="flex justify-center md:justify-start">
              <div className="w-full max-w-md bg-[#F1EDE4] rounded-lg shadow-lg ring-1 ring-black/10 p-6 sm:p-8 md:p-10">
                <h3 className="text-[#50341F] font-semibold text-lg mb-5">
                  Faça seu orçamento
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <label className="block">
                    <div
                      className={`flex items-center gap-3 bg-white/80 rounded-md px-4 py-3 shadow-sm w-full ${
                        touched.name && !nameValid
                          ? "ring-1 ring-red-500"
                          : "ring-1 ring-black/10"
                      }`}
                    >
                      <svg
                        aria-hidden
                        className="h-5 w-5 text-[#383330]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="7" r="4" />
                        <path d="M5 21v-2a7 7 0 0114 0v2" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Seu Nome"
                        value={name}
                        onChange={handleNameChange}
                        onBlur={() => setTouched((s) => ({ ...s, name: true }))}
                        inputMode="text"
                        autoComplete="name"
                        aria-invalid={touched.name && !nameValid}
                        className="min-w-0 flex-1 bg-transparent outline-none text-[#383330] placeholder-[#383330]/70 text-base"
                      />
                    </div>
                    {touched.name && !nameValid && (
                      <p className="mt-1 text-xs text-red-600">
                        Informe um nome válido (apenas letras e espaços).
                      </p>
                    )}
                  </label>
                  <label className="block">
                    <div
                      className={`flex items-center gap-3 bg-white/80 rounded-md px-4 py-3 shadow-sm w-full ${
                        touched.email && !emailValid
                          ? "ring-1 ring-red-500"
                          : "ring-1 ring-black/10"
                      }`}
                    >
                      <svg
                        aria-hidden
                        className="h-5 w-5 text-[#383330]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                      <input
                        type="email"
                        placeholder="Seu E-mail"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={() =>
                          setTouched((s) => ({ ...s, email: true }))
                        }
                        inputMode="email"
                        autoComplete="email"
                        aria-invalid={touched.email && !emailValid}
                        className="min-w-0 flex-1 bg-transparent outline-none text-[#383330] placeholder-[#383330]/70 text-base"
                      />
                    </div>
                    {touched.email && !emailValid && (
                      <p className="mt-1 text-xs text-red-600">
                        E-mail inválido. Ex.: nome@dominio.com
                      </p>
                    )}
                  </label>
                  <label className="block">
                    <div
                      className={`flex items-center gap-3 bg-white/80 rounded-md px-4 py-3 shadow-sm w-full ${
                        touched.phone && !phoneValid
                          ? "ring-1 ring-red-500"
                          : "ring-1 ring-black/10"
                      }`}
                    >
                      <svg
                        aria-hidden
                        className="h-5 w-5 text-[#383330]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="7" y="2" width="10" height="20" rx="2" />
                        <path d="M10 18h4" />
                      </svg>
                      <input
                        type="tel"
                        placeholder="Celular"
                        value={phone}
                        onChange={handlePhoneChange}
                        onBlur={() =>
                          setTouched((s) => ({ ...s, phone: true }))
                        }
                        inputMode="numeric"
                        autoComplete="tel"
                        aria-invalid={touched.phone && !phoneValid}
                        className="min-w-0 flex-1 bg-transparent outline-none text-[#383330] placeholder-[#383330]/70 text-base"
                      />
                    </div>
                    {touched.phone && !phoneValid && (
                      <p className="mt-1 text-xs text-red-600">
                        Celular inválido. Use DDD e 10–11 dígitos.
                      </p>
                    )}
                  </label>
                  <button
                    type="submit"
                    disabled={!formValid}
                    className="w-full bg-[#50341F] hover:bg-[#4A362D] text-white rounded-md py-3 font-medium text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>

            {/* Imagem */}
            <div className="flex justify-center">
              <Image
                src="/assets/img_email.png"
                alt="Contato"
                width={520}
                height={390}
                priority
                className="select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
