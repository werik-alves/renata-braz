export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold">Galeria</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="aspect-[4/3] bg-foreground/10 rounded-md" />
          <div className="aspect-[4/3] bg-foreground/10 rounded-md" />
          <div className="aspect-[4/3] bg-foreground/10 rounded-md" />
          <div className="aspect-[4/3] bg-foreground/10 rounded-md" />
          <div className="aspect-[4/3] bg-foreground/10 rounded-md" />
          <div className="aspect-[4/3] bg-foreground/10 rounded-md" />
        </div>
      </div>
    </section>
  );
}