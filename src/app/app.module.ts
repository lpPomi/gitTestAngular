import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// for two way binding formsmodule
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { MayorComponent } from './mayor/mayor.component';
import { MenorComponent } from './menor/menor.component';


@NgModule({
  // here define the components
  declarations: [
    AppComponent,
    MiComponenteComponent,
    MayorComponent,
    MenorComponent
  ],
  // here define the imports
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }