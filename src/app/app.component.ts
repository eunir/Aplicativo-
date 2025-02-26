import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SobreOAplicativoPage } from '../pages/sobre-oaplicativo/sobre-oaplicativo';
import { DocumentosPage } from '../pages/documentos/documentos';
import { LoginPage } from '../pages/login/login';
import { SobreOMunicPioPage } from '../pages/sobre-omunic-pio/sobre-omunic-pio';







@Component({
  
  templateUrl: 'app.html'
  
  
})

export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToSobreOMunicPio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SobreOMunicPioPage);
  }goToSobreOAplicativo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SobreOAplicativoPage);
  }goToDocumentos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DocumentosPage);
  }

  
}
