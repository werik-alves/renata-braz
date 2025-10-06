export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold">Contato</h2>
        <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="border border-foreground/20 rounded-md p-3 bg-background text-foreground" placeholder="Nome" />
          <input className="border border-foreground/20 rounded-md p-3 bg-background text-foreground" placeholder="Email" />
          <textarea className="sm:col-span-2 border border-foreground/20 rounded-md p-3 bg-background text-foreground" placeholder="Mensagem" rows={4} />
          <button className="sm:col-span-2 inline-flex items-center justify-center rounded-md px-4 py-2 bg-foreground text-background hover:opacity-90">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}