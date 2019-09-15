import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SobreOAplicativoPage } from '../pages/sobre-oaplicativo/sobre-oaplicativo';
import { DocumentosPage } from '../pages/documentos/documentos';

import { CadastreSePage } from '../pages/cadastre-se/cadastre-se';
import { MeuVereadorPage } from '../pages/meu-vereador/meu-vereador';

import { MandatoPage } from '../pages/mandato/mandato';
import { CanalDiretoPage } from '../pages/canal-direto/canal-direto';
import { EnquetesPage } from '../pages/enquetes/enquetes';
import { ChamadosPage } from '../pages/chamados/chamados';
import { MeusChamadosPage } from '../pages/meus-chamados/meus-chamados';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { SobreOMunicPioPage } from '../pages/sobre-omunic-pio/sobre-omunic-pio';
import { CMaraPage } from '../pages/c-mara/c-mara';
import {HttpModule} from '@angular/http';
import { UsuariosProvider } from '../providers/usuarios/usuarios';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { VideoCapturePlus } from '@ionic-native/video-capture-plus';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { Facebook } from '@ionic-native/facebook';






@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SobreOMunicPioPage,
    SobreOAplicativoPage,
    DocumentosPage,
    LoginPage,
    CMaraPage,
    CadastreSePage,
    MeuVereadorPage,
    MandatoPage,
    CanalDiretoPage,
    EnquetesPage,
    ChamadosPage,
    MeusChamadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
    
   
    
   

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SobreOMunicPioPage,
    SobreOAplicativoPage,
    DocumentosPage,
    LoginPage,
    CMaraPage,
    CadastreSePage,
    MeuVereadorPage,
    MandatoPage,
    CanalDiretoPage,
    EnquetesPage,
    ChamadosPage,
    MeusChamadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosProvider,
    Camera,
    VideoCapturePlus,
    Geolocation,
    Facebook
    
  ]
})
export class AppModule {}