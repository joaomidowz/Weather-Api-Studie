// app/routes/teste.tsx
import type { Route } from "./+types/home"; // Tipagem do React Router

import { Teste } from "../pages/teste"; // Importando a página Teste

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Página Teste" },
    { name: "description", content: "Esta é a página de teste." },
  ];
}

export default function TesteRoute() {
  return <Teste />;
}
