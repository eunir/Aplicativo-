import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastreSePage } from '../cadastre-se/cadastre-se';
import { MeuVereadorPage } from '../meu-vereador/meu-vereador';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private login : FormGroup;

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    public provider: UsuariosProvider
    ) {

      this.login = this.formBuilder.group({
      usuario: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required)
      });
  }

  logForm(){
    //console.log(this.login);
    this.provider.postLogin(this.login.value).subscribe((data) => {
      console.log(data);
    });
  }
  goToCadastreSe(params){
    if (!params) params = {};
    this.navCtrl.push(CadastreSePage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToPgMeuVereador(params){
    if (!params) params = {};
    this.navCtrl.push(MeuVereadorPage);
  }
}
