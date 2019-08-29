import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CMaraPage } from '../c-mara/c-mara';
import { MandatoPage } from '../mandato/mandato';
import { CanalDiretoPage } from '../canal-direto/canal-direto';
import { ChamadosPage } from '../chamados/chamados';

import { EnquetesPage } from '../enquetes/enquetes';

@Component({
  selector: 'page-meu-vereador',
  templateUrl: 'meu-vereador.html'
})
export class MeuVereadorPage {

  constructor(public navCtrl: NavController) {
  }
  goToCMara(params){
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
  }goToMeuVereador(params){
    if (!params) params = {};
    this.navCtrl.push(MeuVereadorPage);
  }goToEnquetes(params){
    if (!params) params = {};
    this.navCtrl.push(EnquetesPage);
  }
}
