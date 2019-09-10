import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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

              public validaUsuario: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public usuariosProvider: UsuariosProvider,
    private formBuilder: FormBuilder
    ) {

      this.validaUsuario = this.formBuilder.group({
        nome_usuario: [ '', Validators.compose([
          Validators.required
        ])],
        endereco: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(30)
        
        ])], 
        cpf_usuario: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(11),
          Validators.minLength(11)
        ])], 
        email_usuario: ['', Validators.compose([
          Validators.required,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
        ])], 
        cidade_usuario: ['', Validators.compose([
          Validators.required
        ])],
        nivel_acesso: ['1'],

        usuario: ['', Validators.compose([
          Validators.required
        ])],
        senha:['', Validators.compose([
          Validators.required
        ])],
      });
  }

 

  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToCadastreSe(params){
    if (!params) params = {};
    this.navCtrl.push(CadastreSePage);
  }

  //método para salvar novo usuário
  salvarUsuario() {
    this.usuario = this.validaUsuario.value;
    this.usuariosProvider.criarUsuario(this.usuario).then((result) => {
      console.log(result);
      this.validaUsuario.reset();
    }, (err) => {
      console.log(err);
    });
  }
}
