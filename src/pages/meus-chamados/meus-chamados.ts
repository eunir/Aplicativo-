import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';




@Component({
  selector: 'page-meus-chamados',
  templateUrl: 'meus-chamados.html'
})

export class MeusChamadosPage {

  //Variavel de retorno
   chamados: any;
   $status: number;
  //Construtor
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: UsuariosProvider,
    private toast: ToastController,
    
    
    ) {
      this.$status;
      this.chamados;
      //Chamando a funçao
      //this.getChamados();
      this.getChamadosStatus();
    }
    
  //Método Get
  getChamados() {
    this.provider.listarChamados()
    .then(data => {
        this.chamados = data;
        console.log(this.chamados);
    })
    .catch((error: any) => {
      this.toast.create({message: 'Erro ao listar chamados. Erro:' + error.error, position: 'boton',duration: 3000})
    })
  }

  //listar chamados pelo status
  getChamadosStatus(){
     
   if(this.$status == null){
     this.$status = 1;
    }
    this.provider.listarChamadosStatus(this.$status)
    .then(data => {
      if(data == ""){
        alert('Nenhum chamado encontrado \n para este status')
      }
      this.chamados = data;
      console.log(this.chamados);
    })
    .catch((error: any) => {
      this.toast.create({message: 'Erro ao listar chamados. Erro:' + error.error, position: 'boton',duration: 3000})
    })
  }
}
