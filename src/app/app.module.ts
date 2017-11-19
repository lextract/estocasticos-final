import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ColasPage } from '../pages/colas/colas';
import { Mm1Page } from '../pages/mm1/mm1';
import { MmcPage } from '../pages/mmc/mmc';
import { MmckPage } from '../pages/mmck/mmck';
import { EntropiaPage } from '../pages/entropia/entropia';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ColasPage,
    Mm1Page,
    MmcPage,
    MmckPage,
    EntropiaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ColasPage,
    Mm1Page,
    MmcPage,
    MmckPage,
    EntropiaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
