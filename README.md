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

Sim, só isso. O `postinstall` roda o build do `web-ui` automaticamente. O `mobile-ui` é distribuído como source (TS/TSX) — quem compila são o Metro e o Babel do app consumidor, que é o que o NativeWind v4 exige para transformar `className` em `style`.

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

## Setup do Consumidor (agora em 1 comando)

Antes você precisava criar manualmente 5 arquivos (`tailwind.config.js`, `global.css`, `metro.config.js`, `babel.config.js`, `nativewind-env.d.ts`) e torcer pra não errar uma vírgula. Agora não.

### 1. Instale o pacote e os peers

```sh
pnpm add @fg-design-system/mobile-ui
pnpm add @gluestack-ui/core @legendapp/motion nativewind \
  react-native-reanimated react-native-safe-area-context \
  react-native-svg react-native-worklets
pnpm add -D tailwindcss@^3.4 prettier-plugin-tailwindcss
```

### 2. Rode o init

Na raiz do seu app Expo:

```sh
npx fg-mobile-ui-init
```

Isso cria os 5 arquivos de config — cada um com 1 a 3 linhas, delegando tudo pro pacote:

| Arquivo gerado | O que faz |
|----------------|-----------|
| `tailwind.config.js` | Estende `@fg-design-system/mobile-ui/tailwind` (cores, fontes, sombras) |
| `global.css` | Importa `@fg-design-system/mobile-ui/global.css` |
| `metro.config.js` | Usa `withFGDesignSystem(...)` de `@fg-design-system/mobile-ui/metro` |
| `babel.config.js` | Aplica `@fg-design-system/mobile-ui/babel` (expo + nativewind + worklets) |
| `nativewind-env.d.ts` | Tipos do NativeWind pro TypeScript não reclamar |

Se algum desses arquivos já existir, o init faz **skip** (não destrói config existente). Pra forçar sobrescrita:

```sh
npx fg-mobile-ui-init --force
```

### 3. Importe o CSS uma vez

No layout raiz do app (ex.: `app/_layout.tsx`):

```tsx
import "../global.css";
```

Pronto. Reinicie o Metro com cache limpo (`npx expo start -c`) e os tokens de tema (`bg-primary-500`, `bg-background-light`, etc.) já funcionam.

> **Por que esses arquivos ainda existem?** NativeWind v4 compila o Tailwind no momento do build do **app consumidor** (Metro + Babel + scan de `content`). Não dá pra empacotar tudo dentro do pacote — então a estratégia é deixar cada arquivo no mínimo possível e centralizar a lógica no pacote.

## Convenções (leia ou sofra)

- Componentes vão em `src/components/`, um diretório por componente
- Tokens compartilhados (cores, tipografia, espaçamento) em `src/tokens/` ou `src/theme/`
- Evite `.ios.tsx` / `.android.tsx` a menos que realmente precise
- Use `tsup` com `--dts` e `--external react,react-native`

## Troubleshooting

**"Deu erro no typecheck"** → provavelmente esqueceu de incluir o arquivo no `tsconfig.json`. Confira se o caminho está no `include`.

**"NativeWind não funciona"** → verificou se o `nativewind-env.d.ts` está incluído no tsconfig e o `lib` tem `"DOM"`? Pois é.

**"Ainda assim não funciona"** → rode `pnpm clean && pnpm install && pnpm build`. Se não resolver, contate um ser humano ou abra uma issue.
