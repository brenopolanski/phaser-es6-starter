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

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)

```sh
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

> [Check it live](http://brenopolanski.com/phaser-es6-starter/) or see the tutorial: [Advanced Phaser and TypeScript Projects](http://www.photonstorm.com/phaser/advanced-phaser-and-typescript-projects).

## Scripts

- `yarn dev (or npm run dev)`: Starts the game on development mode;
- `yarn build (or npm run build)`: Build game to production;
- `yarn build:analyzer (or npm run build:analyzer)`: Build game to production and open bundle analyzer on 8888 port;
- `yarn start (or npm start)`: Special script reserved to run production code. Change as you wish. For now, it is the same as `yarn dev`.

## Tasks Gulp

- `gulp template-empty`: Call to create an empty game project template;
- `gulp vscode`: Call [VSCode Intellisense for Phaser](http://www.html5gamedevs.com/topic/27418-visual-studio-code-intellisense-for-phaserjs/);
- `gulp deploy`: Deploy compiled files at `game` folder to `github` on branch `gh-pages`.

## Contributing

If you want to help, please read the [Contributing](https://github.com/brenopolanski/phaser-es6-starter/blob/master/CONTRIBUTING.md) guide.

## History

For detailed changelog, see [Releases](https://github.com/brenopolanski/phaser-es6-starter/releases).

## Credits

Phaser is a free and open source software developed and owned by [Richard Davey](https://github.com/photonstorm) at [www.photonstorm.com](http://www.photonstorm.com/). You can visit [their funding page](http://phaser.io/community/donate) and help them to make Phaser even better.

## License

[MIT License](http://brenopolanski.mit-license.org/) © Breno Polanski
