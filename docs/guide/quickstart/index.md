# Quickstart

Install the package using your package manager of choice:

::: code-group

```bash [npm]
npm install essentials-utils@latest
```

```bash [yarn]
yarn add essentials-utils@latest
```

```bash [pnpm]
pnpm add essentials-utils@latest
```

```bash [bun]
bun add essentials-utils@latest
```

:::

The package works in different environments, however in some cases it is necessary to differentiate the functions that will be used, as we cannot always make use of them due to syntax differences between the libs/frameworks.

- **Core** - Functions that work in any environment.
- **React** - Functions that work in React environment.