import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { ButorokComponent } from './butorok/butorok.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    RolunkComponent,
    ButorokComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
