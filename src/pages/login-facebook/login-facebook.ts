import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

/**
 * Generated class for the LoginFacebookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-facebook',
  templateUrl: 'login-facebook.html',
})
export class LoginFacebookPage {
 
  //Variavel para armazenar usuario
  userData = null;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private facebook: Facebook
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginFacebookPage');
  }

  goToLoginFacebookPage(params){
    if (!params) params = {};
    this.navCtrl.push(LoginFacebookPage);
  }
}
