import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeuVereadorPage } from '../meu-vereador/meu-vereador';

import { MandatoPage } from '../mandato/mandato';
import { CanalDiretoPage } from '../canal-direto/canal-direto';

import { EnquetesPage } from '../enquetes/enquetes';
import { CMaraPage } from '../c-mara/c-mara';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { VideoCapturePlus, VideoCapturePlusOptions } from '@ionic-native/video-capture-plus';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-chamados',
  templateUrl: 'chamados.html'
})
export class ChamadosPage {
  
  midia: any = null;
  long: any = null;
  lat: any = null;

  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  private videoOptions: VideoCapturePlusOptions = {
    limit: 1,
    highquality: true,
    portraitOverlay: 'assets/img/camera/overlay/portrait.png',
    landscapeOverlay: 'assets/img/camera/overlay/landscape.png'
 }

  chamado = { tipo_chamado: '',
              descricao: '', 
              imagem_video: '',
              data_abertura: '',
              longitude: '',
              latitude: '',
              id_usuario: '',
              };

              public validaChamado: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public usuariosProvider: UsuariosProvider,
    private formBuilder: FormBuilder,
    private camera: Camera,
    private videoCapturePlus: VideoCapturePlus,
    private geolocation: Geolocation,
    ) {

      this.validaChamado = this.formBuilder.group({
        tipo_chamado: [ '', Validators.compose([
          Validators.required
        ])],
        descricao: [ '', Validators.compose([
          Validators.required
        ])],

        imagem_video: [''],

        data_abertura: [ '', Validators.compose([
          Validators.required
        ])],
        longitude: [ '', Validators.compose([
          Validators.required
        ])],
        latitude: [ '', Validators.compose([
          Validators.required
        ])],
        id_usuario: ['1'],
      });

  }
  //Função para tirar foto
  tirarFoto(){
   
    this.camera.getPicture(this.options).then((imageData) => {
      this.midia = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert('Ops!\nHouve um erro');
      console.log(err)
    });
  }
   
  gravarVideo(){
    this.videoCapturePlus.captureVideo(this.videoOptions).then((imageData) => {
      this.midia = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert('Ops!\nHouve um erro');
      console.log(err)
    });
  }

  pegarLocalizacao(){
    this.geolocation.getCurrentPosition().then((resp) => {
      resp.coords.latitude
      resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      //data can be a set of coordinates, or an error (if an error occurred).
      this.lat = data.coords.latitude
      this.long = data.coords.longitude
     });
  }
  
  //Função salvar chamado
  salvarChamado(){

    this.chamado = this.validaChamado.value;
    this.chamado.imagem_video = this.midia;
    this.chamado.latitude = this.lat;
    this.chamado.longitude = this.long;

    this.usuariosProvider.criarChamado(this.chamado).then((result) => {

      console.log(result);
      this.validaChamado.reset();
    }, (err) => {
      console.log(err);
    });
  }
  


  goToMeuVereador(params){
    if (!params) params = {};
    this.navCtrl.push(MeuVereadorPage);
  }goToCMara(params){
    if (!params) params = {};
    this.navCtrl.push(CMaraPage);
  }goToMandato(params){
    if (!params) params = {};
    this.navCtrl.push(MandatoPage);
  }goToCanalDireto(params){
    if (!params) params = {};
    this.navCtrl.push(CanalDiretoPage);
  }goToChamados(params){
    if (!params) params = {};
    this.navCtrl.push(ChamadosPage);
  }goToEnquetes(params){
    if (!params) params = {};
    this.navCtrl.push(EnquetesPage);
  }
}
