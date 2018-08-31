import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'pilot',
  globalStyle: 'src/global/variables.css',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
