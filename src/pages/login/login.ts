import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastreSePage } from '../cadastre-se/cadastre-se';
import { MeuVereadorPage } from '../meu-vereador/meu-vereador';
import {Validators, FormBuilder } from '@angular/forms';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';


import { UsuariosModel } from '../../models/UsuariosModel';
import { Facebook } from '@ionic-native/facebook';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {


  public loginForm: any;
  messageEmail = ""
  messagePassword = "";
  errorEmail = false;
  errorPassword = false;



  public FB: any;
  //private login : FormGroup;
  userData = null;
  usuario: string;
  senha: string;
  
  constructor(
    public navCtrl: NavController,
    formBuilder: FormBuilder,
    public provider: UsuariosProvider,
    public facebook: Facebook
    ) {


      this.loginForm = formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(20),
        Validators.required])]
      });
    }

      //this.login = this.formBuilder.group({
      //usuario: new FormControl('', Validators.required),
      //senha: new FormControl('', Validators.required)
      //});

      
  
  //----------------------------------------------------------------------
   login() {
    let { email, password } = this.loginForm.controls;
 
    if (!this.loginForm.valid) {
      if (!email.valid) {
        this.errorEmail = true;
        this.messageEmail = "Email inválido!";
      } else {
        this.messageEmail = "";
      }
 
      if (!password.valid) {
        this.errorPassword = true;
        this.messagePassword ="A senha é obrigatória!"
      } else {
        this.messagePassword = "";
      }
    }
    else {
      this.logForm();
    }
  }
  //-------------------------------------------------------------------------
  logForm(){
    //console.log(this.login);
    this.usuario = this.loginForm.value.email;
    this.senha = this.loginForm.value.password;
    this.provider.login(this.usuario, this.senha).then((data) => {
        console.log(data);
        if(data == 0){
          alert('Usuário\n não cadastrado');
        }else{
          this.navCtrl.setRoot(MeuVereadorPage);
        }
      });
        
  }
  //============================================================================
  //Login via facebook
  loginFacebook() {
    let permissions = new Array<string>();
    permissions = ["public_profile", "email"];

    this.facebook.login(permissions).then((response) => {
      let params = new Array<string>();
 
      this.facebook.api("/me?fields=name,email", params)
      .then(res => {
 
          //estou usando o model para criar os usuarios
          let usuario = new UsuariosModel();
          usuario.nome = res.name;
          usuario.email = res.email;
          usuario.senha = res.id;
          usuario.login = res.email;
          
          this.logar(usuario);
          this.navCtrl.setRoot(MeuVereadorPage);
      }, (error) => {
        alert('Não foi possível realizar login!');
        console.log('ERRO LOGIN: ',error);
      })
    }, (error) => {
      alert('Não foi possível realizar login!');
    });
  }
 
  logar(usuario: UsuariosModel) {
    //this.salvarService.salvarFacebook(usuario)
    //.then(() => {
        console.log('Usuario cadastrado via facebook com sucesso!');
    //})
  }
//==================================================================================
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

