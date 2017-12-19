import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule, customElements } from './app/app.module';

import { registerAsCustomElements } from '@angular/elements';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule);

registerAsCustomElements(customElements, () => {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}).then(() => {
  console.log('bootstraped');
}).catch((error) => {
  console.log(error);
});
