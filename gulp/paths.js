'use strict';

module.exports = {
  configTemplates: {
    vscodeIntellisense: {
      files: {
        copy: './config-templates/vscode-intellisense/**/*',
        to: './src/js/'
      }
    }
  },

  deploy: {
    pages: './game/**/*'
  }
};
