export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold">Serviços</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-foreground/10 rounded-lg p-6">Serviço A</div>
          <div className="border border-foreground/10 rounded-lg p-6">Serviço B</div>
          <div className="border border-foreground/10 rounded-lg p-6">Serviço C</div>
        </div>
      </div>
    </section>
  );
}