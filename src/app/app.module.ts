import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {
  TuiButtonModule,
  TuiRootModule,
  TuiScrollbarModule,
} from '@taiga-ui/core';
import {
  TuiHeaderModule,
  TuiNavigationModule,
  TuiTitleModule,
} from '@taiga-ui/experimental';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, AboutMeComponent, HomeComponent],
  imports: [
    BrowserModule,
    TuiRootModule,
    AppRoutingModule,
    TuiButtonModule,
    TuiHeaderModule,
    TuiTitleModule,
    CoreModule.forRoot(),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
