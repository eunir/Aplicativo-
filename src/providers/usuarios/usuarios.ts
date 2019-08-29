import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {

  //Variável com o endereço da API
  url: string = 'http://127.0.0.1:8000/api';

  constructor(public http: Http) {

    console.log('Hello UsuariosProvider Provider');
    
  }
//---------------------------------------------------------------------------------
  //Cadastro de usuarios
  criarUsuario(data) {
    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type','application/json');

      this.http.post(this.url+'/usuarios', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          let data = res.json();
          resolve(data);

        }, (err) => {
          reject(err);
        });
    });
  }
//------------------------------------------------------------------------------------
  //Realizar login
  login(usuario: string, senha: string){
    return new Promise((resolve, reject) => {

      var data = {
        usuario: usuario,
        senha:   senha
      };

      let headers = new Headers();
      headers.append('Content-Type','application/json');

      this.http.post(this.url+'/login', JSON.stringify(data), {headers: headers})
        .subscribe((result: any)=>{
          resolve(result.json())
        },
        (error)=>{
          reject(error.json());
        })
    });
  }
//-------------------------------------------------------------------------------
postLogin(usuario){

  var headers = new Headers();
  headers.append("Accept","application/json");
  headers.append("Access-Controll-Allow-Origin","*");
  headers.append("Access-Controll-Allow-Methods","POST, GET, OPTIONS, PUT");
  headers.append("Content-Type","application/json");
  const requestOptions = new RequestOptions({headers:headers});

  let data = {
    "usuario" : usuario.usuario,
    "senha"   : usuario.senha
  };

  return this.http.post(this.url + "/login", data, requestOptions);
}
//-----------------------------------------------------------------------------------
  /*listarChamados() {
    return new Promise(resolve => {
      this.http.get(this.url+'/chamados').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
*/
listarChamados(){
  return new Promise((resolve, reject) => {

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    
    this.http.get(this.url+'/chamados')
    .subscribe((result: any)=>{
      resolve(result.json());
    },
      (error) => {
        reject(error.json());
      })
  });

 }
}
  

  


