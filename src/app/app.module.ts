import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { CarsizeComponent } from './carsize/carsize.component';
import { PriceComponent } from './price/price.component';
import { CarserviceService } from './carservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CarsizeComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CarserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
