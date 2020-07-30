import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { CountriesComponent } from './component/countries/countries.component';
//import { DataServiceComponent } from './services/data-service/data-service.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardCardComponent } from './component/dashboard-card/dashboard-card.component';
import { GoogleChartsModule } from 'angular-google-charts';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    DashboardCardComponent,
  //  DataServiceComponent
 ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
