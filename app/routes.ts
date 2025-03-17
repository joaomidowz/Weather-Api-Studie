// app/routes/routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Mantém a Home como index
  route("teste", "routes/teste.tsx"), // Adiciona a página de teste automaticamente
] satisfies RouteConfig;
