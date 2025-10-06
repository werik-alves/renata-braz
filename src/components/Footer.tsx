export default function Footer() {
  return (
    <footer className="w-full bg-background/80 text-foreground py-8">
      <div className="mx-auto max-w-6xl px-4 text-sm">
        © {new Date().getFullYear()} Renata Braz. Todos os direitos reservados.
      </div>
    </footer>
  );
}