<p align="center">
  <img src="https://raw.githubusercontent.com/brenopolanski/phaser-es6-starter/gh-assets/phaser-es6-starter.png">
</p>

![div](https://raw.githubusercontent.com/brenopolanski/phaser-es6-starter/gh-assets/div.png)

<br />

[![Phaser](https://raw.githubusercontent.com/brenopolanski/phaser-es6-starter/gh-assets/icon-phaser.png)](http://phaser.io/)
[![ES6](https://raw.githubusercontent.com/brenopolanski/phaser-es6-starter/gh-assets/icon-js.png)](https://www.ecma-international.org/ecma-262/6.0/)
[![Webpack](https://raw.githubusercontent.com/brenopolanski/phaser-es6-starter/gh-assets/icon-webpack.png)](https://webpack.github.io/)
[![ESLint](https://raw.githubusercontent.com/brenopolanski/phaser-es6-starter/gh-assets/icon-eslint.png)](http://eslint.org/)
[![Yarn](https://raw.githubusercontent.com/brenopolanski/phaser-es6-starter/gh-assets/icon-yarn.png)](https://yarnpkg.com/)
[![PWA](https://raw.githubusercontent.com/brenopolanski/phaser-es6-starter/gh-assets/icon-pwa.png)](https://developers.google.com/web/progressive-web-apps/)

A template for writing [Phaser](http://phaser.io/) Games based on [ECMAScript 2015 (ES6)](https://www.ecma-international.org/ecma-262/6.0/) + [Webpack](https://webpack.github.io/) + [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) for rapid game development.

Invite me to a coffee [![donate-paypal](https://raw.githubusercontent.com/brenopolanski/phaser-es6-starter/gh-assets/btn_donate_paypal.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WNXA4YYGQCJZG)

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)

```bash
# Clone this repository
$ git clone git@github.com:brenopolanski/phaser-es6-starter.git my-game
$ cd my-game

# install dependencies
$ yarn (or npm i)
# run game
$ yarn start (or npm start)
```

### Game Demo

[![game-demo](https://raw.githubusercontent.com/brenopolanski/phaser-es6-starter/gh-assets/game-demo.png)](http://brenopolanski.com/phaser-es6-starter/)

> [Check it live](http://brenopolanski.com/phaser-es6-starter/) or see the tutorial: [Advanced Phaser and TypeScript Projects](http://www.photonstorm.com/phaser/advanced-phaser-and-typescript-projects) by [Richard Davey](https://github.com/photonstorm) at [www.photonstorm.com](http://www.photonstorm.com/).

### :heart: Found this project useful?

If you found this project useful, then please consider giving it a :star: on Github and sharing it with your friends via social media.

## Scripts

- `yarn dev (or npm run dev)`: Starts the game on development mode;
- `yarn build (or npm run build)`: Build game to production;
- `yarn build:analyzer (or npm run build:analyzer)`: Build game to production and open bundle analyzer on `8888` port;
- `yarn start (or npm start)`: Special script reserved to run production code. Change as you wish. For now, it is the same as `yarn dev`.

## Tasks

- `gulp template:empty`: Call to create an empty game project template in `src/` folder;
- `gulp vscode`: Call [VSCode Intellisense for Phaser](http://www.html5gamedevs.com/topic/27418-visual-studio-code-intellisense-for-phaserjs/);
- `gulp deploy`: Deploy compiled files at `game` folder to `github` on branch `gh-pages`.

## Editor Configuration

**Atom**

```bash
apm install editorconfig es6-javascript atom-ternjs javascript-snippets linter linter-eslint language-babel autocomplete-modules file-icons
```

**VSCode**

- [Editorconfig](https://github.com/editorconfig/editorconfig-vscode)
- [ESLint](https://github.com/Microsoft/vscode-eslint)
- [Babel](https://github.com/dzannotti/vscode-babel)
- [ES6 Snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)

**Sublime**

- [Editorconfig Integration](https://github.com/sindresorhus/editorconfig-sublime#readme)
- [Linting](https://github.com/SublimeLinter/SublimeLinter3)
- [ESLint Integration](https://github.com/roadhump/SublimeLinter-eslint)
- [Syntax Highlighting](https://github.com/babel/babel-sublime)
- [Autocompletion](https://github.com/ternjs/tern_for_sublime)
- [Node Snippets](https://packagecontrol.io/packages/JavaScript%20%26%20NodeJS%20Snippets)
- [ES6 Snippets](https://packagecontrol.io/packages/ES6-Toolkit)

**Others**

- [Editorconfig](http://editorconfig.org/#download)
- [ESLint](http://eslint.org/docs/user-guide/integrations#editors)
- [Babel Syntax Plugin](https://babeljs.io/docs/plugins/)

## Technologies

Phaser ES6 Starter offers a rich development experience using the following technologies:

| **Tech** | **Description** |**Learn More**|
|----------|-----------------|--------------|
| [Phaser](http://phaser.io/) | A fast, fun and free open source HTML5 game framework. | [Learn Phaser](http://phaser.io/learn) |
| [Babel](http://babeljs.io) | Compiles ES6 to ES5. Enjoy the new version of JavaScript today. | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org) |
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) |
| [Browsersync](https://www.browsersync.io/) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices. | [Intro vid](https://www.youtube.com/watch?time_continue=1&v=heNWfzc7ufQ) |
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [PostCSS](https://github.com/postcss/postcss) | Transform styles with JS plugins. Used to autoprefix CSS | |
| [Stats.js](https://github.com/mrdoob/stats.js) | For displaying FPS/MS. | |
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. | [Why not Gulp?](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n) |

## Contributing

If you want to help, please read the [Contributing](https://github.com/brenopolanski/phaser-es6-starter/blob/master/CONTRIBUTING.md) guide.

## History

For detailed changelog, see [Releases](https://github.com/brenopolanski/phaser-es6-starter/releases).

## Credits

Phaser is a free and open source software developed and owned by [Richard Davey](https://github.com/photonstorm) at [www.photonstorm.com](http://www.photonstorm.com/). You can visit [their funding page](http://phaser.io/community/donate) and help them to make Phaser even better.

## Donations

Donations would be more than welcome :)

[![donate-paypal](https://raw.githubusercontent.com/brenopolanski/phaser-es6-starter/gh-assets/btn_donate_paypal.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WNXA4YYGQCJZG)

## License

[MIT License](https://brenopolanski.mit-license.org/) © Breno Polanski
