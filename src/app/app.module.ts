import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreditsPage } from '../pages/credits/credits';
import { ThemesPage } from '../pages/themes/themes';
import { VideoPlayerPage } from '../pages/video-player/video-player';
import { SettingsPage } from '../pages/settings/settings';
import { GamePage } from '../pages/game/game';
import { ResultsPage } from '../pages/results/results';
import { EndPage } from '../pages/end/end';
import { DummyPage } from '../pages/dummy/dummy';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ThemesPage,
    VideoPlayerPage,
    SettingsPage,
    CreditsPage,
    GamePage,
    ResultsPage,
    EndPage,
    DummyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ThemesPage,
    VideoPlayerPage,
    SettingsPage,
    CreditsPage,
    GamePage,
    ResultsPage,
    EndPage,
    DummyPage
  ],
  providers: [
    StatusBar,
    NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
