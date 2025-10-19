import { buildWhatsappLink } from "../lib/links";
import NavbarClient from "./NavbarClient";

export default function Navbar() {
  const whatsappHref = buildWhatsappLink();
  return <NavbarClient whatsappHref={whatsappHref} />;
}
