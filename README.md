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

## Convenções (leia ou sofra)

- Componentes vão em `src/components/`, um diretório por componente
- Tokens compartilhados (cores, tipografia, espaçamento) em `src/tokens/` ou `src/theme/`
- Evite `.ios.tsx` / `.android.tsx` a menos que realmente precise
- Use `tsup` com `--dts` e `--external react,react-native`

## Troubleshooting

**"Deu erro no typecheck"** → provavelmente esqueceu de incluir o arquivo no `tsconfig.json`. Confira se o caminho está no `include`.

**"NativeWind não funciona"** → verificou se o `nativewind-env.d.ts` está incluído no tsconfig e o `lib` tem `"DOM"`? Pois é.

**"Ainda assim não funciona"** → rode `pnpm clean && pnpm install && pnpm build`. Se não resolver, contate um ser humano ou abra uma issue.
