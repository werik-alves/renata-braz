export const assets = {
  logo: "/assets/logo.png",
  hero: "/assets/hero.jpg",
  logoMaior: "/assets/logoMaior.png",
  users: "/assets/users.svg",
  world: "/assets/world.png",
  time: "/assets/time.png",
  iconeValores: "/assets/iconevalores.png",
  acessoria: "/assets/acessoria.png",
  comunicacao: "/assets/comunicacao.png",
  emissao: "/assets/emissao.png",
  relacionamento: "/assets/relacionamento.png",
  img_email: "/assets/img_email.png",
};

export const iconeValores = "/assets/iconevalores.png";
export const acessoria = "/assets/acessoria.png";
export const comunicacao = "/assets/comunicacao.png";
export const emissao = "/assets/emissao.png";
export const relacionamento = "/assets/relacionamento.png";
export const img_email = "/assets/img_email.png";



export function byNodeId(nodeId: string): string {
  return `/assets/figma/${nodeId.replace(":", "_")}.png`;
}