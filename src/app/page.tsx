import Hero from "../components/Hero";
import ContactStrip from "../components/ContactStrip";
import Plans from "../components/Plans";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

export default function Page() {
  return (
    <main>
      <Hero />
      <ContactStrip />
      <Plans />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </main>
  );
}