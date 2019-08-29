import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChamadosPage } from '../chamados/chamados';
import { MeuVereadorPage } from '../meu-vereador/meu-vereador';

import { MandatoPage } from '../mandato/mandato';

import { EnquetesPage } from '../enquetes/enquetes';
import { CMaraPage } from '../c-mara/c-mara';
import { MeusChamadosPage } from '../meus-chamados/meus-chamados';

@Component({
  selector: 'page-canal-direto',
  templateUrl: 'canal-direto.html'
})
export class CanalDiretoPage {

  constructor(public navCtrl: NavController) {
  }
  goToChamados(params){
    if (!params) params = {};
    this.navCtrl.push(ChamadosPage);
  }goToMeuVereador(params){
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
  }goToEnquetes(params){
    if (!params) params = {};
    this.navCtrl.push(EnquetesPage);
  }goToMeusChamados(params){
    if (!params) params = {};
    this.navCtrl.push(MeusChamadosPage);
  }

}
