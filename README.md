# FG Design System

> **"Uma interface consistente em mobile e web — porque seu usuário merece mais do que aquele botão azul genérico do Bootstrap 2012."**

Monorepo que unifica o design da FullGauge nos dois mundos: o selvagem React Native e o civilizado React Web. Dois pacotes. Uma linguagem visual. Zero desculpas para UI inconsistente.

---

## O Que Tem Aqui

| Pacote | Mundo | Stack |
|--------|-------|-------|
| `@fg-design-system/mobile-ui` | 📱 React Native / Expo | Gluestack UI v3 + NativeWind v4 |
| `@fg-design-system/web-ui` | 🌐 React Web | Radix UI + CVA + Tailwind |

Ambos são bundlados com **tsup** (ESM, `.d.ts`, sourcemap, treeshaking, ES2020). Ambos usam **TypeScript 6**. Ambos sabem o que estão fazendo.

---

## Requisitos

> Se você não tiver esses, pare tudo agora.

```
Node.js  ^24.12.0   ← nvm install 24.12.0
pnpm     ^10.0.0    ← npm i -g pnpm (e nunca mais olhe pra trás)
```

npm e yarn não são bem-vindos aqui. Não por preconceito — por sanidade.

---

## Instalação

```sh
pnpm install
```

Sim, só isso. O `postinstall` cuida do build automaticamente. Café é opcional mas recomendado.

---

## 📱 Mobile UI

### Instalando no seu app Expo

Escolha o seu package manager:

```sh
# pnpm (recomendado)
pnpm add @fg-design-system/mobile-ui

# npm
npm install @fg-design-system/mobile-ui

# yarn
yarn add @fg-design-system/mobile-ui

# bun
bun add @fg-design-system/mobile-ui
```

Ou direto do GitHub, sem passar pelo npm registry:

```sh
# pnpm
pnpm add "github:psilva1982/fg-design-system#main&path:/packages/mobile-ui"

# npm
npm install "github:psilva1982/fg-design-system#main"

# yarn
yarn add "psilva1982/fg-design-system#main"

# bun
bun add "github:psilva1982/fg-design-system#main"
```

### Setup automático (o jeito certo)

Na raiz do seu app Expo, rode uma vez:

```sh
npx fg-mobile-ui-init
```

Esse comando é basicamente um mordomo digital. Ele vai:

1. **Detectar seu package manager** — lê o lockfile, não pergunta
2. **Instalar apenas os peers que faltam** — não duplica o que você já tem
3. **Gerar 5 arquivos de config** — cada um com 1–3 linhas, delegando tudo ao pacote

| Arquivo | Responsabilidade |
|---------|-----------------|
| `tailwind.config.js` | Estende `@fg-design-system/mobile-ui/tailwind` |
| `global.css` | Importa `@fg-design-system/mobile-ui/global.css` |
| `metro.config.js` | Usa `withFGDesignSystem(config)` |
| `babel.config.js` | Aplica o preset `@fg-design-system/mobile-ui/babel` |
| `nativewind-env.d.ts` | Tipos do NativeWind (o TypeScript agradece) |

Se algum desses já existir, o init faz skip. Sem destruição de configs. Se quiser forçar:

```sh
npx fg-mobile-ui-init --force       # sobrescreve tudo
npx fg-mobile-ui-init --no-install  # só gera arquivos, sem instalar peers
```

### Importe o CSS uma vez

No seu layout raiz (`app/_layout.tsx` ou equivalente):

```tsx
import "../global.css";
```

Reinicie o Metro com `npx expo start -c` e os tokens (`bg-primary-500`, `text-background-light`…) estão prontos.

---

### Componentes Mobile

#### `FGUIProvider` — o guardião do tema

**Obrigatório.** Sem ele, os tokens de cor e tema simplesmente não existem. É como tentar ligar uma TV sem tomada.

```tsx
import { FGUIProvider } from "@fg-design-system/mobile-ui";

export default function RootLayout() {
  return (
    <FGUIProvider mode="light">
      {/* todo o seu app aqui */}
    </FGUIProvider>
  );
}
```

| Prop | Tipo | Descrição |
|------|------|-----------|
| `mode` | `"light" \| "dark"` | Tema da aplicação |

---

#### `FGButton` — o botão que já sabe o que quer da vida

```tsx
import { FGButton, FGUIProvider } from "@fg-design-system/mobile-ui";

<FGUIProvider mode="light">
  <FGButton action="primary" variant="solid" size="md">
    Apertar aqui
  </FGButton>

  <FGButton action="negative" variant="outline" isLoading>
    Deletando...
  </FGButton>

  <FGButton label="Bloco total" block />
</FGUIProvider>
```

| Prop | Valores | Padrão |
|------|---------|--------|
| `action` | `primary` · `secondary` · `positive` · `negative` · `default` | — |
| `variant` | `solid` · `outline` · `link` | `solid` |
| `size` | `xs` · `sm` · `md` · `lg` · `xl` | — |
| `label` | `string` | — |
| `isLoading` | `boolean` | `false` |
| `block` | `boolean` | `false` |

> `children` e `label` são equivalentes. Use o que fizer mais sentido no contexto.

---

## 🌐 Web UI

### Instalando

```sh
# pnpm (recomendado)
pnpm add @fg-design-system/web-ui

# npm
npm install @fg-design-system/web-ui

# yarn
yarn add @fg-design-system/web-ui

# bun
bun add @fg-design-system/web-ui
```

Ou direto do GitHub:

```sh
# pnpm
pnpm add "github:psilva1982/fg-design-system#main&path:/packages/web-ui"

# npm / yarn / bun
npm install "github:psilva1982/fg-design-system#main"
```

Distribuído compilado (ESM + `.d.ts` em `dist/`). Nada de source, nada de config extra.

---

### Componentes Web

#### `Button`

Segue o padrão shadcn/ui: `cva()` para variantes, `cn()` para merging de classes, `asChild` via Radix `Slot` para polimorfismo.

```tsx
import { Button } from "@fg-design-system/web-ui";

<Button variant="primary" size="md">
  Primário
</Button>

<Button variant="secondary" size="sm">
  Secundário
</Button>

<Button variant="ghost" size="lg" asChild>
  <a href="/dashboard">Link fantasma</a>
</Button>
```

| Prop | Valores | Padrão |
|------|---------|--------|
| `variant` | `primary` · `secondary` · `ghost` | `primary` |
| `size` | `sm` · `md` · `lg` | `md` |
| `asChild` | `boolean` | `false` |

---

## Comandos do Monorepo

```sh
pnpm install          # instala deps + build automático (postinstall)
pnpm build            # build de todos os pacotes
pnpm typecheck        # tsc em todo mundo
pnpm clean            # limpa todos os dist/

# Pacote específico
pnpm --filter @fg-design-system/mobile-ui typecheck
pnpm --filter @fg-design-system/web-ui build
```

---

## Estrutura do Projeto

```
fg-design-system/
├── packages/
│   ├── mobile-ui/
│   │   ├── src/
│   │   │   ├── index.ts              # exports públicos
│   │   │   └── components/
│   │   │       ├── fg-button.tsx     # FGButton
│   │   │       └── fg-provider.tsx   # FGUIProvider
│   │   ├── components/ui/            # primitivos Gluestack (não editar)
│   │   │   ├── button/
│   │   │   └── gluestack-ui-provider/
│   │   ├── templates/                # arquivos gerados pelo init
│   │   └── bin/init.js               # CLI fg-mobile-ui-init
│   └── web-ui/
│       └── src/
│           ├── index.ts
│           ├── utils/cn.ts           # clsx + tailwind-merge
│           └── components/Button/
│               ├── Button.tsx
│               ├── variants.ts       # cva() definitions
│               ├── types.ts
│               └── index.ts
├── tsconfig.base.json
├── tsup.base.ts
└── package.json
```

---

## Adicionando Novos Componentes

### Mobile

1. Crie `packages/mobile-ui/src/components/fg-meu-componente.tsx`
2. Use `className` com NativeWind para estilização
3. Exporte em `packages/mobile-ui/src/index.ts`
4. **Não toque em `components/ui/`** — são primitivos gerados pelo Gluestack

### Web

1. Crie o diretório `packages/web-ui/src/components/MeuComponente/`
2. Crie os 4 arquivos: `MeuComponente.tsx`, `variants.ts`, `types.ts`, `index.ts`
3. Exporte em `packages/web-ui/src/index.ts`
4. Rode `pnpm --filter @fg-design-system/web-ui build`

---

## Instalando via GitHub (sem npm registry)

Se você prefere apontar direto para o repositório:

### Monorepo completo

```sh
pnpm add "git+https://github.com/psilva1982/fg-design-system.git"
npm install "git+https://github.com/psilva1982/fg-design-system.git"
yarn add "git+https://github.com/psilva1982/fg-design-system.git"
bun add "git+https://github.com/psilva1982/fg-design-system.git"
```

### Só o mobile-ui (sem puxar o monorepo inteiro)

```sh
# pnpm suporta path dentro do repositório nativo
pnpm add "git+https://github.com/psilva1982/fg-design-system.git#main&path:/packages/mobile-ui"
```

### Só o web-ui

```sh
pnpm add "git+https://github.com/psilva1982/fg-design-system.git#main&path:/packages/web-ui"
```

> **Nota:** O filtro `&path:/packages/...` é uma feature do pnpm. npm, yarn e bun instalam o monorepo raiz — use pnpm se quiser um pacote isolado.

---

## Troubleshooting

**"NativeWind não aplica as classes"**
→ Verifique se `nativewind-env.d.ts` está no `include` do `tsconfig.json` e se o `lib` tem `"DOM"`.

**"Erro de typecheck inexplicável"**
→ Algum arquivo sumiu do `include` do `tsconfig.json`. Confira os caminhos.

**"Tokens de cor não funcionam"**
→ O `FGUIProvider` está envolvendo o app? Sem ele, não há tema. Nenhuma desculpa.

**"Nada funciona e eu odeio tudo"**
→ `pnpm clean && pnpm install && pnpm build`. Resolve 90% dos casos. Para os outros 10%, abra uma issue.

---

> Feito com TypeScript, teimosia e a firme convicção de que `className="bg-primary-500"` é melhor do que um `StyleSheet.create` de 40 linhas.
