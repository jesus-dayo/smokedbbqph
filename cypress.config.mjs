import { defineConfig } from 'cypress';

const config = defineConfig({
  env: {
    apiUrl: 'http://localhost:3000',
    mobileViewportWidthBreakpoint: 414,
    coverage: false,
    codeCoverage: {
      url: 'http://localhost:3000/__coverage__',
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
});

export default config;
