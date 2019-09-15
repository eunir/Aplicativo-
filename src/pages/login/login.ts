import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastreSePage } from '../cadastre-se/cadastre-se';
import { MeuVereadorPage } from '../meu-vereador/meu-vereador';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { LoginFacebookPage } from '../login-facebook/login-facebook';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public FB: any;
  private login : FormGroup;
  userData = null;
  usuario: string;
  senha: string;
  
  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    public provider: UsuariosProvider,
    private facebook: Facebook
    ) {

      this.login = this.formBuilder.group({
      usuario: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required)
      });
  }

  
  ngOnInit() {

    (window as any).fbAsyncInit = function() {
      this.FB.init({
        appId      : '491994388250343',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      this.FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

  }

  logForm(){
    //console.log(this.login);
    this.usuario = this.login.value.usuario;
    this.senha = this.login.value.senha;
    this.provider.login(this.usuario, this.senha).then((data) => {
        console.log(data);
        if(data == 0){
          alert('Usuário\n não cadastrado');
        }else{
          this.navCtrl.setRoot(MeuVereadorPage);
        }
      });
        
  }

  //Login via facebook
  submitLogin(){
    console.log("submit login to facebook");
    // FB.login();
    this.FB.login((response)=>
        {
          console.log('submitLogin',response);
          if (response.authResponse)
          {
            //login success
            //login success code here
            //redirect to home page
           }
           else
           {
           console.log('User login failed');
         }
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
  }goToLoginFacebookPage(params){
    if (!params) params = {};
    this.navCtrl.push(CadastreSePage);
  
}
}
