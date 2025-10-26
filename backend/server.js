require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { Resend } = require("resend");

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(express.json({ limit: "1mb" }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
  })
);

app.get("/health", (req, res) => {
  res.json({ ok: true, server: "backend", port: PORT });
});

function escapeHtml(input) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Campos obrigatórios ausentes." });
    }

    const TO = process.env.CONTACT_TO_EMAIL;
    const FROM = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    if (!TO) {
      return res.status(500).json({ ok: false, error: "CONTACT_TO_EMAIL não configurado." });
    }

    const subject = "Novo contato pelo site";
    const html = `
      <div style="font-family:Arial,sans-serif;color:#1f2937">
        <h2 style="margin:0 0 12px">${escapeHtml(subject)}</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Celular:</strong> ${escapeHtml(String(phone))}</p>` : ""}
        <p style="margin-top:12px"><strong>Mensagem:</strong></p>
        <pre style="white-space:pre-wrap;background:#f8fafc;padding:12px;border-radius:8px">${escapeHtml(message)}</pre>
      </div>
    `;

    // Primeiro: SMTP via Nodemailer
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
    const SMTP_SECURE = (process.env.SMTP_SECURE || "false") === "true" || SMTP_PORT === 465;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: SMTP_PORT,
          secure: SMTP_SECURE,
          auth: { user: SMTP_USER, pass: SMTP_PASS },
        });

        const info = await transporter.sendMail({
          from: FROM,
          to: TO,
          subject,
          html,
          replyTo: email,
        });

        return res.status(200).json({
          ok: true,
          transport: "smtp",
          messageId: info.messageId,
          accepted: info.accepted || [],
          rejected: info.rejected || [],
        });
      } catch (smtpError) {
        console.error("SMTP error:", smtpError);
      }
    }

    // Fallback: Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      return res.status(500).json({ ok: false, error: "Falha no SMTP e RESEND_API_KEY ausente." });
    }

    try {
      const resend = new Resend(RESEND_API_KEY);
      const data = await resend.emails.send({
        from: FROM,
        to: TO,
        subject,
        html,
        reply_to: email,
      });
      return res.status(200).json({ ok: true, transport: "resend", id: data?.id });
    } catch (resendError) {
      console.error("Resend error:", resendError);
      return res.status(500).json({ ok: false, error: resendError?.message || "Falha ao enviar e-mail." });
    }
  } catch (err) {
    return res.status(500).json({ ok: false, error: err?.message || "Erro inesperado." });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});