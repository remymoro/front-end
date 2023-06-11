import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent} from './app/app.component';
import { EnvironmentProviders, Provider, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import routes from './app/routes';
import { EmailService } from './app/shared/services/email.service';
import { HttpClientModule } from '@angular/common/http';




const providers: Array<Provider | EnvironmentProviders > =[
    provideRouter(routes),EmailService,importProvidersFrom(HttpClientModule)
]



bootstrapApplication(AppComponent,{providers})

