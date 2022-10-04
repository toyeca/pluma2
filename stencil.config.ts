import { Config } from '@stencil/core';
import { postcss } from '@stencil-community/postcss';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://www.alvaromayoral.com/',
    },
  ],
  plugins: [
    postcss({
      plugins: [autoprefixer(), tailwind('./tailwind.config.js')],
    }),
  ],
};
