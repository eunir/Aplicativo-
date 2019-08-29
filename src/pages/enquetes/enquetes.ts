import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeuVereadorPage } from '../meu-vereador/meu-vereador';

import { MandatoPage } from '../mandato/mandato';
import { CanalDiretoPage } from '../canal-direto/canal-direto';
import { ChamadosPage } from '../chamados/chamados';
import { CMaraPage } from '../c-mara/c-mara';


@Component({
  selector: 'page-enquetes',
  templateUrl: 'enquetes.html'
})
export class EnquetesPage {

  constructor(public navCtrl: NavController) {
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
