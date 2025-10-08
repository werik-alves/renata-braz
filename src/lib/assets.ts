export const assets = {
  logo: "/assets/logo.png",
  hero: "/assets/hero.jpg",
  logoMaior: "/assets/logoMaior.png",
  users: "/assets/users.svg",
  world: "/assets/world.png",
  time: "/assets/time.png",
  iconeValores: "/assets/iconevalores.png",
};

export const iconeValores = "/assets/iconevalores.png";

export function byNodeId(nodeId: string): string {
  return `/assets/figma/${nodeId.replace(":", "_")}.png`;
}