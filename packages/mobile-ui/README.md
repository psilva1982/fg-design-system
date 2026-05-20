# @fg-design-system/mobile-ui

FG Design System for React Native / Expo apps. Built on Gluestack UI v3 + NativeWind v4.

## Install

```sh
pnpm add @fg-design-system/mobile-ui
```

Install peer dependencies:

```sh
pnpm add @gluestack-ui/core @legendapp/motion nativewind \
  react-native-reanimated react-native-safe-area-context \
  react-native-svg react-native-worklets
pnpm add -D tailwindcss@^3.4 prettier-plugin-tailwindcss
```

## Setup (one command)

From the root of your Expo app:

```sh
npx fg-mobile-ui-init
```

This creates the following files (re-exporting everything from the package):

- `tailwind.config.js` — extends the package preset
- `global.css` — imports tokens from the package
- `metro.config.js` — wraps Metro with NativeWind
- `babel.config.js` — applies the package's Babel preset
- `nativewind-env.d.ts` — TypeScript ambient types

Existing files are **skipped** by default. Pass `--force` to overwrite:

```sh
npx fg-mobile-ui-init --force
```

## Usage

Add the CSS import once in your root layout (e.g. `app/_layout.tsx`):

```tsx
import "../global.css";
```

Then anywhere in your app:

```tsx
import { FGButton, FGUIProvider } from "@fg-design-system/mobile-ui";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <FGUIProvider mode="light">
      <SafeAreaView className="flex-1 bg-background-light">
        <FGButton label="Teste" action="primary" variant="solid" size="md" />
      </SafeAreaView>
    </FGUIProvider>
  );
}
```

`FGUIProvider` injects the theme tokens (CSS variables) for `light` / `dark` / `system`. All theme classes (`bg-primary-500`, `bg-background-light`, `text-typography-900`, etc.) are pre-configured by the Tailwind preset.

## Why these files still exist

NativeWind v4 compiles Tailwind at the consumer app's build time — the Metro bundler, Babel transform and `content: []` scanning all need to run inside your project, not inside the package. The generated files are intentionally one or two lines each, delegating all configuration back to this package.
