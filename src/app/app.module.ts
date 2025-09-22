import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiRootModule } from '@taiga-ui/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, AboutMeComponent, HomeComponent],
  imports: [BrowserModule, TuiRootModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
