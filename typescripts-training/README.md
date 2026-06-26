This folder contains a minimal TypeScript setup.

Why you might not see a "TypeScript configuration" after installing:
- Running `npm install` only installs packages. It does not create a `tsconfig.json` for you.
- To generate a `tsconfig.json` automatically run `npx tsc --init` in this folder, or use the provided `tsconfig.json`.

Quick commands (PowerShell):

cd typescripts-training
npm install
# generate tsconfig automatically (optional)
# npx tsc --init
# compile using the project tsconfig
npm run build

Notes:
- The included `tsconfig.json` compiles files under `src/` into `dist/`.
- Add your `.ts` files under `src/` (for example, `src/index.ts`) and run `npm run build` to produce `dist/` outputs.
