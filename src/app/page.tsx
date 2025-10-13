import Hero from "../components/Hero";
import ContactStrip from "../components/ContactStrip";
import Plans from "../components/Plans";
import About from "../components/About";
import Diferenciais from "../components/Diferenciais";
import Depoimento from "../components/Depoimento";
import Contact from "../components/Contact";
import Especilidades from "@/components/Especilidades";
import Conteudo from "@/components/Conteudo";

export default function Page() {
  return (
    <main>
      <Hero />
      <ContactStrip />
      <About />
      <Especilidades />
      <Conteudo />
      <Plans />
      <Diferenciais />
      <Depoimento />
      <Contact />
    </main>
  );
}