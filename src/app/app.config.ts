import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { StudentService } from './services/student.services';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    AuthService,
    StudentService,
  ],
};

// Import FormsModule

// @NgModule({
//   imports: [
//     BrowserModule,
//     FormsModule,
//     ReactiveFormsModule, // Add FormsModule here
//   ],
//   declarations: [],
//   providers: [],
//   bootstrap: [],
// })
// export class AppConfig {}
