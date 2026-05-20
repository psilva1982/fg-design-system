# FG Design System

> A fábrica de componentes que unifica o design da FullGauge no mobile e na web.

## Stack

| O quê | O que é |
|-------|---------|
| `@fg-design-system/mobile-ui` | React Native/Expo + Gluestack v3 |
| `@fg-design-system/web-ui` | React web + shadcn/ui |
| `pnpm` | Gerenciador de pacotes (o único, o amado, o que não quebra) |
| `Node.js` | v24.12.0 — nem tente com outra versão |

## Requisitos

- **Node.js** `^24.12.0` (se não tiver, `nvm install 24.12.0` e seja feliz)
- **pnpm** `^10.0.0` (se estiver usando npm/yarn, feche este README e se arrependa)

## Instalação

```sh
pnpm install
```

Sim, só isso. O `postinstall` já roda o build de todos os pacotes automaticamente. Você só precisa esperar o terminal terminar de pensar.

## Usando os pacotes

```sh
pnpm add @fg-design-system/mobile-ui   # componentes mobile
pnpm add @fg-design-system/web-ui      # componentes web
```

Ou via Git URL se você é do tipo aventureiro:

```sh
pnpm add "git+https://github.com/psilva1982/fg-design-system.git"
```

E se quiser instalar **apenas** o pacote mobile-ui (sem puxar o monorepo inteiro):

```sh
pnpm add "git+https://github.com/psilva1982/fg-design-system.git#main&path:/packages/mobile-ui"
```

## Comandos

| Comando | O que faz |
|---------|-----------|
| `pnpm build` | Compila tudo que precisa ser compilado |
| `pnpm typecheck` | Passa o `tsc` de xereta em todo mundo |
| `pnpm --filter @fg-design-system/mobile-ui <cmd>` | Roda comando só no pacote mobile |
| `pnpm --filter @fg-design-system/web-ui <cmd>` | Roda comando só no pacote web |

## Estrutura de pastas

```
packages/
├── mobile-ui/          # O bonitão do React Native
│   ├── src/            # Código fonte dos componentes
│   └── components/     # Componentes Gluestack (sim, fora do src, não pergunte)
└── web-ui/             # O elegante do shadcn/ui
```

## Usando os componentes

```tsx
import { FGButton, FGUIProvider } from "@fg-design-system/mobile-ui";

export function App() {
  return (
    <FGUIProvider mode="light">
      <FGButton action="primary" variant="solid" size="md">
        Aperte aqui, vai
      </FGButton>
    </FGUIProvider>
  );
}
```

O `FGUIProvider` é obrigatório — sem ele os tokens de tema e cores não funcionam. O `FGButton` aceita as props `action` (primary, secondary, positive, negative, default), `variant` (solid, outline, link) e `size` (xs, sm, md, lg, xl).

## Setup do Consumidor (ou: "meus botões estão invisíveis")

Se você está consumindo o `@fg-design-system/mobile-ui` e os componentes aparecem mas as cores parecem ter saido de férias, é porque o Tailwind do seu app não sabe da existência das cores personalizadas do pacote.

Respira, não precisa chorar. Siga os 3 passos abaixo:

### 1. Tailwind config — adote o preset

No `tailwind.config.js` do seu app, use o preset do pacote e adicione os sources no `content`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@fg-design-system/mobile-ui/tailwind')],
  content: [
    "./node_modules/@fg-design-system/mobile-ui/**/*.{js,jsx,ts,tsx}",
    // ... seus paths de sempre
  ],
};
```

Sem isso o Tailwind simplesmente ignora as classes usadas dentro do pacote. É tipo aquele amigo que não ouve você se não estiver olhando nos olhos.

### 2. Importe o CSS (se não tiver o seu)

Se o seu app **não** tem um `global.css` próprio, crie um e importe o do pacote:

```css
/* app/global.css */
@import "@fg-design-system/mobile-ui/global.css";
```

Se já tem o seu, beleza — só garanta que ele tem os `@tailwind` directives padrão.

### 3. Metro config — o NativeWind precisa saber

Certifique-se de que o `withNativeWind` está enrolando seu metro.config.js:

```js
const { withNativewind } = require("nativewind/metro");
module.exports = withNativewind(config, { input: "./global.css" });
```

O `input` deve apontar pro seu `global.css` (o do seu app, não o do pacote).

> **Resumo pra quem tem preguiça de ler:** as cores customizadas do pacote vivem no `tailwind.config.js` dele. Seu app precisa desse config pra gerar as classes. Então use `presets`, aponte o `content` pro `node_modules`, e o NativeWind faz o resto.

## Convenções (leia ou sofra)

- Componentes vão em `src/components/`, um diretório por componente
- Tokens compartilhados (cores, tipografia, espaçamento) em `src/tokens/` ou `src/theme/`
- Evite `.ios.tsx` / `.android.tsx` a menos que realmente precise
- Use `tsup` com `--dts` e `--external react,react-native`

## Troubleshooting

**"Deu erro no typecheck"** → provavelmente esqueceu de incluir o arquivo no `tsconfig.json`. Confira se o caminho está no `include`.

**"NativeWind não funciona"** → verificou se o `nativewind-env.d.ts` está incluído no tsconfig e o `lib` tem `"DOM"`? Pois é.

**"Ainda assim não funciona"** → rode `pnpm clean && pnpm install && pnpm build`. Se não resolver, contate um ser humano ou abra uma issue.
