import Hero from "../components/Hero";
import ContactStrip from "../components/ContactStrip";
import Plans from "../components/Plans";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Especilidades from "@/components/Especilidades";

export default function Page() {
  return (
    <main>
      <Hero />
      <ContactStrip />
      <About />
      <Especilidades />
      <Plans />
      <Services />
      <Gallery />
      <Contact />
    </main>
  );
}