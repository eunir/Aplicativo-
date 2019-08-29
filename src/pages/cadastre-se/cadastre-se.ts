import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';


@Component({
  selector: 'page-cadastre-se',
  templateUrl: 'cadastre-se.html'
})
export class CadastreSePage {

  usuario = { nome_usuario: '',
              endereco: '', 
              cpf_usuario: '', 
              email_usuario: '', 
              cidade_usuario: '',
              nivel_acesso: '1',
              usuario: '',
              senha:'', 
              };

  constructor(public navCtrl: NavController, public usuariosProvider: UsuariosProvider) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToCadastreSe(params){
    if (!params) params = {};
    this.navCtrl.push(CadastreSePage);
  }
  salvarUsuario() {
    this.usuariosProvider.criarUsuario(this.usuario).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }
}
