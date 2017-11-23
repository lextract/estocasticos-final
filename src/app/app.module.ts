import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EntidadPage } from '../pages/entidad/entidad';
import { ServicioPage } from '../pages/servicio/servicio';
import { MapaPage } from '../pages/mapa/mapa';
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { Estadisticas2Page } from '../pages/estadisticas2/estadisticas2';

import { EntidadProvider } from '../providers/entidad/entidad';
import { ServidorProvider } from '../providers/servidor/servidor';
import { HorarioProvider } from '../providers/horario/horario';

import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EntidadPage,
    ServicioPage,
    MapaPage,
    EstadisticasPage,
    Estadisticas2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EntidadPage,
    ServicioPage,
    MapaPage,
    EstadisticasPage,
    Estadisticas2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EntidadProvider,
    ServidorProvider,
    HorarioProvider,
    GoogleMaps
  ]
})
export class AppModule {}
