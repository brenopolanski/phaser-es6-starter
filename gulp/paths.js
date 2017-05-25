'use strict';

module.exports = {
  srcRoot: './src/**/*',

  toolkit: {
    vscodeIntellisense: {
      files: {
        copy: {
          nodeDir: [
            './node_modules/phaser-ce/typescript/p2.d.ts',
            './node_modules/phaser-ce/typescript/phaser.comments.d.ts',
            './node_modules/phaser-ce/typescript/pixi.d.ts'
          ],
          jsConfig: './toolkit/vscode-intellisense/jsconfig.json',
          default: './toolkit/vscode-intellisense/**/*'
        },
        to: './src/js/'
      }
    },
    projectTemplates: {
      empty: {
        files: {
          copy: './toolkit/project-templates/empty/**/*',
          to: './src/'
        }
      }
    }
  },

  deploy: {
    pages: './game/**/*'
  }
};
