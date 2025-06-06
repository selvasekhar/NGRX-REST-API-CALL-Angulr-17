import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { Departmentreducer } from './store/reducers';
import { provideEffects } from '@ngrx/effects';
import { DepartmentEffects } from './store/effect';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ departments: Departmentreducer }),
    provideEffects([DepartmentEffects]),
  ],
};
