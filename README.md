# leihs-ui

shared styles, ui components etc.

## development

- [Node.js](https://nodejs.org/) 14 LTS

```sh
git clone https://github.com/leihs/leihs-ui
cd leihs-ui
bin/build
npm run storybook
```

## contents:

- `bootstrap-theme-leihs`
- `styleguide` / example usage and standalone ui/ux dev (next.js based)

- `./src` - shared code sources
  - `./components` react components
  - `./lib/server-side.js` standalone bundle for server-side react rendering

## tests

To run the tests locally, additonal dependencies must be installed.
The changes made to `package{-lock}.json` MUST not be checked in (this is a compromise because in most apps we dont need to run tests).

```bash
npm add -D ./test
```
