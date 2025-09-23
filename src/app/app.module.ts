import { TuiHeader, TuiNavigation } from '@taiga-ui/layout';
import { provideEventPlugins } from '@taiga-ui/event-plugins';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {
  TuiRoot,
  TuiScrollbar,
  TuiScrollable,
  TuiTitle,
  TuiButton,
} from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, AboutMeComponent, HomeComponent],
  imports: [
    // BrowserModule,
    // TuiRoot,
    AppRoutingModule,
    // TuiButton,
    // TuiHeader,
    // TuiTitle,
    CoreModule.forRoot(),
  ],
  providers: [HttpClientModule, provideEventPlugins()],
  bootstrap: [AppComponent],
})
export class AppModule {}
