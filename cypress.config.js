const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'x7zo9a',
  e2e: {
      baseUrl: 'https://www.saucedemo.com/',
  },
});
