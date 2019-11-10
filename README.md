# A sample project to demonstrate how to configure ts-jest with babel in a React app

This project is created with `React` 16 and `TypeScript` 3.7

## Overview in this project
This project contains:
- `babel.config.js`: a base config for babel and to test out optional chaining in ts 3.7 with `@babel/plugin-proposal-optional-chaining`.
- `jest.config.js`: contains jest config with jsx is processed by `babel` and `tsx` is processed by `ts-jest`.
- A test with React Fragment in `App.test.tsx`
- A test with ts 3.7 optional chaining in `foo.spec.ts` 
