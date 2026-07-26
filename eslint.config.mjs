import coreWebVitals from "eslint-config-next/core-web-vitals"
import typescript from "eslint-config-next/typescript"

// components/ui y hooks son scaffolding generado por shadcn: se excluyen para
// que el lint hable solo del código propio del proyecto.
const config = [
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts", "components/ui/**", "hooks/**"] },
  ...coreWebVitals,
  ...typescript,
]

export default config
