"use client";

import { useState } from "react";
import { buildWhatsappLink } from "../lib/links";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const nameValid = /^[A-Za-zÀ-ÿ'\s]{2,}$/.test(name.trim());
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  const phoneDigits = phone.replace(/\D/g, "");
  const phoneValid = phoneDigits.length === 10 || phoneDigits.length === 11;
  const messageValid = message.trim().length >= 10;
  const formValid = nameValid && emailValid && phoneValid && messageValid;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

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

  // Ajuste para textarea
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(String(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    setSubmitError(null);
    if (!formValid) return;
    setIsSubmitting(true);

    try {
      const lines = [
        "Olá! Gostaria de solicitar um orçamento.",
        `Nome: ${name}`,
        `E-mail: ${email}`,
        `Celular: ${phone}`,
        `Mensagem: ${message}`,
      ];
      const text = lines.join("\n");
      const whatsappHref = buildWhatsappLink({ text });
      if (!whatsappHref) throw new Error("WhatsApp não configurado.");

      // Abre o WhatsApp com a mensagem preenchida
      window.open(whatsappHref, "_blank");

      setSubmitStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setTouched({ name: false, email: false, phone: false, message: false });
    } catch (err: unknown) {
      setSubmitStatus("error");
      const message = err instanceof Error ? err.message : String(err);
      setSubmitError(message || "Erro inesperado.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto w-full ">
        <div className="rounded-2xl w-full p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-1 items-center gap-8">
            {/* Card de formulário */}
            <div className="flex justify-center items-center md:justify-center">
              <div className="w-full max-w-[900px] bg-[#EBE6DD] rounded-lg shadow-lg ring-1 ring-black/10 p-6 sm:p-8 md:p-10 items-center">
                <h3 className="text-[#50341F] font-semibold text-lg mb-5 text-center">
                  Solicite o seu orçamento
                </h3>
                <form
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[800px] mx-auto items-center"
                  onSubmit={handleSubmit}
                >
                  <label className="block md:col-start-1 md:row-start-1">
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
                  <label className="block md:col-start-1 md:row-start-2">
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
                  {/* Mensagem ajustada para textarea e ícone adequado */}
                  <label className="block md:col-start-2 md:row-start-1 md:row-span-3">
                    <div
                      className={`flex items-start gap-3 bg-white/80 rounded-md px-4 py-3 shadow-sm w-full ${
                        touched.message && !messageValid
                          ? "ring-1 ring-red-500"
                          : "ring-1 ring-black/10"
                      }`}
                    >
                      <svg
                        aria-hidden
                        className="h-5 w-5 text-[#383330] mt-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15a4 4 0 01-4 4H8l-5 3V5a4 4 0 014-4h10a4 4 0 014 4v10z" />
                        <path d="M7 8h10M7 12h8" />
                      </svg>
                      <textarea
                        placeholder="Digite uma mensagem"
                        value={message}
                        onChange={handleMessageChange}
                        onBlur={() =>
                          setTouched((s) => ({ ...s, message: true }))
                        }
                        rows={6}
                        autoComplete="off"
                        aria-invalid={touched.message && !messageValid}
                        className="min-w-0 flex-1 bg-transparent outline-none text-[#383330] placeholder-[#383330]/70 text-base resize-y"
                      />
                    </div>
                    {touched.message && !messageValid && (
                      <p className="mt-1 text-xs text-red-600">
                        Mensagem inválida. Mínimo 10 caracteres.
                      </p>
                    )}
                  </label>
                  <label className="block md:col-start-1 md:row-start-3">
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
                    disabled={!formValid || isSubmitting}
                    className="mx-auto w-[200px] md:col-span-2  bg-[#383330] hover:bg-[#4A362D] text-white rounded-md py-3 px-6 font-medium text-base disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                  </button>
                  {submitStatus === "success" && (
                    <p className="mt-2 text-sm text-green-700 md:col-span-2 text-center">
                      Mensagem enviada com sucesso!
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="mt-2 text-sm text-red-700 md:col-span-2 text-center">
                      {submitError || "Não foi possível enviar."}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
