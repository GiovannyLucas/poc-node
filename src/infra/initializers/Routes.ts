import express from 'express';
import { readdirSync } from 'fs';
import { resolve } from 'path';

class RoutesInitializer {
  public GLOBAL_PREFIX = process.env.APP_GLOBAL_PREFIX || '/test';

  constructor(
    private app: express.Application,
  ) {}

  async initializeRoutesFromFiles() {
    const routesPath = resolve(__dirname, '..', 'http', 'routes');

    for (const originalFileName of readdirSync(routesPath)) {
      if(originalFileName.includes('endpoint')) {
        continue;
      }

      console.log('testing continue', originalFileName);

      const [noSuffixFileName] = originalFileName.toLocaleLowerCase().split('.');
      const routeFile = (await import(`${routesPath}/${originalFileName}`)).default();

      this.app.use(`${this.GLOBAL_PREFIX}/${noSuffixFileName}`, routeFile);
    }
  }
}

export default RoutesInitializer;