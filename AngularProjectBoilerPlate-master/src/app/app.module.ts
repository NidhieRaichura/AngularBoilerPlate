import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoreModule } from './core/core.module';


const MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  CoreModule,
]

const COMPONENTS = [
  AppComponent,
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: COMPONENTS,
  imports: MODULES,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
