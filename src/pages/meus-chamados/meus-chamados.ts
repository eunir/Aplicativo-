import { Component } from '@angular/core';
import { NavController, ToastController, NavParams, InfiniteScroll } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'page-meus-chamados',
  templateUrl: 'meus-chamados.html'
})
export class MeusChamadosPage {

  //array de retorno
  chamados: any[];
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  //Construtor
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: UsuariosProvider,
    private toast: ToastController
    ) {

      //Chamando a funçao
      this.getChamados();
    }
  
    ionViewDidEnter(){
      this.chamados = [];
      //this.infiniteScroll.enabled(true);
    }
  //Método Get
  getChamados() {
    this.provider.listarChamados()
    .then((result: any) => {
      //this.chamados = result.data;
      
      for(var i = 0; i > result.data.length; i++){
        var chamados = result.data[i];
        this.chamados.push(chamados);
        
      }
      if(this.infiniteScroll) {
        this.infiniteScroll.complete();
      }
      
    })
    .catch((error: any) => {
      this.toast.create({message: 'Erro ao listar chamados. Erro:' + error.error, position: 'boton',duration: 3000})
    })
  }
}
