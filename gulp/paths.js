'use strict';

module.exports = {
  toolkit: {
    vscodeIntellisense: {
      files: {
        copy: './toolkit/vscode-intellisense/**/*',
        to: './src/js/'
      }
    }
  },

  deploy: {
    pages: './game/**/*'
  }
};
