import type { Route } from "../+types/root";
import { Teste } from "../pages/teste"; // Importando a página Teste

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tempo" },
    { name: "description", content: "Vendo a preivsão do tempo e o tempo!" },
  ];
}

export default function TesteRoute() {
  return <Teste />;
}
