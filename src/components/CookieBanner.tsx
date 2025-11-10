"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ConsentState = "accepted" | "rejected" | null;

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cookie-consent");
      const parsed: ConsentState = stored as ConsentState;
      if (!parsed) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  // Reserve space under the banner to avoid overlay blocking clicks
  useEffect(() => {
    if (visible && barRef.current) {
      const h = barRef.current.getBoundingClientRect().height;
      document.body.style.paddingBottom = `${Math.ceil(h + 8)}px`;
    } else {
      document.body.style.paddingBottom = "";
    }
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [visible]);

  const handleAccept = () => {
    try {
      localStorage.setItem("cookie-consent", "accepted");
    } catch {}
    setVisible(false);
    window.dispatchEvent(
      new CustomEvent("cookie-consent", { detail: { status: "accepted" } })
    );
  };

  const handleReject = () => {
    try {
      localStorage.setItem("cookie-consent", "rejected");
    } catch {}
    setVisible(false);
    window.dispatchEvent(
      new CustomEvent("cookie-consent", { detail: { status: "rejected" } })
    );
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div
        ref={barRef}
        className="mx-auto max-w-6xl px-4 py-4 rounded-xl shadow-lg ring-1 ring-black/10 bg-[#383330] text-[#F1EDE4]"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm md:text-base">
            <p>
              Usamos cookies essenciais e tecnologias semelhantes para operar o
              site e melhorar sua experiência. Saiba mais em nossa{" "}
              <Link
                href="/politica-de-privacidade"
                className="underline font-medium"
              >
                Política de Privacidade
              </Link>{" "}
              e{" "}
              <Link
                href="/politica-de-cookies"
                className="underline font-medium"
              >
                Política de Cookies
              </Link>
              . Você pode aceitar todos os cookies ou recusar os não essenciais.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleReject}
              className="px-4 py-2 rounded-md border border-white/20 hover:bg-white/10"
            >
              Recusar
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="px-4 py-2 rounded-md bg-[#F1EDE4] text-[#383330] font-semibold hover:opacity-90 whitespace-nowrap"
            >
              Aceitar todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
