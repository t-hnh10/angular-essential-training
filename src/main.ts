// Angular exports a function called platformBrowserDynamic that can be used for targeting the browser
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);