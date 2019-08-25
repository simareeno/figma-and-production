# Syncing Figma & production

That's an example of how you can sync your Figma styles and icons with production using design tokens.

1. [**Tokens**](https://github.com/simareeno/figma-and-production/tree/master/tokens) — source of icons and styles for Figma and production.
2. [**React app**](https://github.com/simareeno/figma-and-production/tree/master/production-app) - An example app, which uses icons and colors from `Tokens`.
3. [**Figma plugin**](https://github.com/simareeno/figma-and-production/tree/master/figma-plugin) - Syncs icons and colors from `Tokens` with Figma page.

### Quick start

Clone this repository
```bash
git clone git@github.com:simareeno/figma-and-production.git
cd figma-and-production
```

Install all the stuff
```bash
npm i
lerna bootstrap
```

### How does it work

**Tokens**

You have a single source of truth — tokens. Styles are stored in json files. Icons as svgs. Once you build this package, styles are converted to css and icons to json.

You are welcome to convert them to whatever you like — scss, js or swift. And other concepts (desktop / phone, themes e t. c.).

**Production app**

Imports tokens as a package. Now you have pure svgs — import them however you like. Import `.css` file with variables and use it in css. If you don't want them in your final bundle, use [post-css plugin](https://github.com/MadLittleMods/postcss-css-variables).

**Figma plugin**

Source files are in `src` folder. Webpack converts Typescript to Javascript, resolves modules and other stuff. And creates a `dist` directory with final file — `code.js`. Once you run a plugin, it executes this file.

Main process goes at `src/code.ts`. It creates styles and icons tokens at seclected frame. So, first we execute `sync-colors.ts` and then `sync-icons.ts`.

Their process is described in comments inside theese files.

### How to run a plugin

1. Open Figma
2. Go to `Menu` > `Plugins` > `Development` > `New plugin`
3. Select `manifest.json` from the `figma-plugin` folder
4. Go to `Menu` > `Plugins` > `Development` > `Sync tokens`

### How to run a React app

1. Go `production-app` folder
2. Run `npm start`

### How to develop
Same command for tokens, plugin and app — `npm start`

> This repository is just to deliver the concept. Code is not optimized for production.
