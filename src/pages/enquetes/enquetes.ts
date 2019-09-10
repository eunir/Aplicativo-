import { Component } from '@angular/core';
import { NavController, ToastController, NavParams, } from 'ionic-angular';
import { MeuVereadorPage } from '../meu-vereador/meu-vereador';

import { MandatoPage } from '../mandato/mandato';
import { CanalDiretoPage } from '../canal-direto/canal-direto';
import { ChamadosPage } from '../chamados/chamados';
import { CMaraPage } from '../c-mara/c-mara';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'page-enquetes',
  templateUrl: 'enquetes.html'
})
export class EnquetesPage {

  //Variavel de retorno
  enqueteVotos = { 
    comentario_voto: '',
    alternativa: '',
    id_usuario: '',
    id_enquete:'',

  }
  enquetes: any;
  
  public validaVotacao: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public usuariosProvider: UsuariosProvider,
    private toast: ToastController,
    private formBuilder: FormBuilder,
   
  ) {
    this.enquetes;
    this.getEnquetes();

    this.validaVotacao = this.formBuilder.group({
      comentario_voto: [ '' ], 
      alternativa: [ '', Validators.compose([
        Validators.required
      ])],
      id_usuario: [ '1', Validators.compose([
        Validators.required
      ])],
      id_enquete: [ '', Validators.compose([
        Validators.required
      ])],
      
    });

  }

  //Método Get
  getEnquetes() {
    this.usuariosProvider.listarEnquetes()
    .then(data => {
        this.enquetes = data;
        console.log(this.enquetes);
       
    })
    .catch((error: any) => {
      this.toast.create({message: 'Erro ao listar chamados. Erro:' + error.error, position: 'boton',duration: 3000})
    })
  }
  refresh(enquetes: any) {
    throw new Error("Method not implemented.");
  }

  //Enviar comentario e votação
  votacaoEnquete(){
    this.enqueteVotos = this.validaVotacao.value;
    this.usuariosProvider.votacao(this.enqueteVotos).then((result) => {

      console.log(result);
      this.validaVotacao.reset();
      
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
