import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GchartsComponent } from './gcharts/gcharts.component';
import { JschartsComponent } from './jscharts/jscharts.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    GchartsComponent,
    JschartsComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule.forRoot(),
    GoogleChartsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
