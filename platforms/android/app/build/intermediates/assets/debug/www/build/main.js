webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastre_se_cadastre_se__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meu_vereador_meu_vereador__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuarios_usuarios__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, formBuilder, provider) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.login = this.formBuilder.group({
            usuario: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            senha: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required)
        });
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.logForm = function () {
        //console.log(this.login);
        this.provider.postLogin(this.login.value).subscribe(function (data) {
            console.log(data);
        });
    };
    LoginPage.prototype.goToCadastreSe = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastre_se_cadastre_se__["a" /* CadastreSePage */]);
    };
    LoginPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(LoginPage_1);
    };
    LoginPage.prototype.goToPgMeuVereador = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__meu_vereador_meu_vereador__["a" /* MeuVereadorPage */]);
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\Aplicativo-\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Login\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5">\n\n    <ion-card>\n\n\n\n        <ion-card-header>\n\n            <img src="assets/img/yVRt1GPSQa19tC6clz3w_logo.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n        </ion-card-header>\n\n        <div class="spacer" style="width:300px;height:30px;" id="login-spacer1"></div>\n\n        <ion-card-content>\n\n            <form [formGroup]="login" (ngSubmit)="logForm()">\n\n                <ion-item>\n\n                  <ion-label>Usuario</ion-label>\n\n                  <ion-input type="text" formControlName="usuario"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                  <ion-label>Senha</ion-label>\n\n                  <ion-input formControlName="senha"></ion-input>\n\n                </ion-item>\n\n                <button ion-button type="submit" [disabled]="!login.valid" block>Login</button>\n\n              </form>\n\n            \n\n              <button id="login-button1" ion-button color="positive" block on-click="goToPgMeuVereador()">\n\n                Acessar\n\n              </button>\n\n              <button id="login-button5" ion-button color="positive" block icon-left>\n\n                <ion-icon name="facebook"></ion-icon>\n\n                Login Facebook\n\n              </button>\n\n              <button id="login-button2" ion-button color="light" block style="color:#2263F3;" on-click="goToCadastreSe()">\n\n                Ou Cadastre-se\n\n              </button>\n\n        </ion-card-content>\n\n      \n\n      </ion-card>\n\n  \n\n \n\n  \n\n  \n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Aplicativo-\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_usuarios_usuarios__["a" /* UsuariosProvider */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobreOAplicativoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SobreOAplicativoPage = /** @class */ (function () {
    function SobreOAplicativoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SobreOAplicativoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sobre-oaplicativo',template:/*ion-inline-start:"C:\xampp\htdocs\Aplicativo-\src\pages\sobre-oaplicativo\sobre-oaplicativo.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Sobre o Aplicativo\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2"></ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Aplicativo-\src\pages\sobre-oaplicativo\sobre-oaplicativo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SobreOAplicativoPage);
    return SobreOAplicativoPage;
}());

//# sourceMappingURL=sobre-oaplicativo.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentosPage = /** @class */ (function () {
    function DocumentosPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DocumentosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-documentos',template:/*ion-inline-start:"C:\xampp\htdocs\Aplicativo-\src\pages\documentos\documentos.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Documentos\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3"></ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Aplicativo-\src\pages\documentos\documentos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], DocumentosPage);
    return DocumentosPage;
}());

//# sourceMappingURL=documentos.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastreSePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuarios_usuarios__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastreSePage = /** @class */ (function () {
    function CadastreSePage(navCtrl, usuariosProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.usuariosProvider = usuariosProvider;
        this.formBuilder = formBuilder;
        this.usuario = { nome_usuario: '',
            endereco: '',
            cpf_usuario: '',
            email_usuario: '',
            cidade_usuario: '',
            nivel_acesso: '1',
            usuario: '',
            senha: '',
        };
        this.validaUsuario = this.formBuilder.group({
            nome_usuario: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required
                ])],
            endereco: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength(30)
                ])],
            cpf_usuario: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].maxLength(11),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(11)
                ])],
            email_usuario: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
                ])],
            cidade_usuario: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required
                ])],
            nivel_acesso: ['1'],
            usuario: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required
                ])],
            senha: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required
                ])],
        });
    }
    CadastreSePage_1 = CadastreSePage;
    CadastreSePage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    CadastreSePage.prototype.goToCadastreSe = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(CadastreSePage_1);
    };
    //método para salvar novo usuário
    CadastreSePage.prototype.salvarUsuario = function () {
        var _this = this;
        this.usuario = this.validaUsuario.value;
        this.usuariosProvider.criarUsuario(this.usuario).then(function (result) {
            console.log(result);
            _this.validaUsuario.reset();
        }, function (err) {
            console.log(err);
        });
    };
    CadastreSePage = CadastreSePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastre-se',template:/*ion-inline-start:"C:\xampp\htdocs\Aplicativo-\src\pages\cadastre-se\cadastre-se.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Cadastre-se\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page6">\n\n  <form [formGroup]="validaUsuario" id="cadastreSe-form2">\n\n    <ion-list id="cadastreSe-list2">\n\n      <ion-item id="cadastreSe-input3">\n\n        <ion-label>\n\n          Nome\n\n        </ion-label>\n\n        <ion-input type="text" placeholder="" formControlName="nome_usuario"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="cadastreSe-input4">\n\n        <ion-label>\n\n          Endereço\n\n        </ion-label>\n\n        <ion-input type="text" placeholder=""  formControlName="endereco"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="cadastreSe-input5">\n\n        <ion-label>\n\n          CPF\n\n        </ion-label>\n\n        <ion-input type="text" placeholder=""  formControlName="cpf_usuario"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="cadastreSe-input6">\n\n        <ion-label>\n\n          E-mail\n\n        </ion-label>\n\n        <ion-input type="email" placeholder=""  formControlName="email_usuario"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="cadastreSe-input7">\n\n        <ion-label>\n\n          Cidade\n\n        </ion-label>\n\n        <ion-input type="text" placeholder=""  formControlName="cidade_usuario"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="cadastreSe-input8">\n\n        <ion-label>\n\n          Usuário\n\n        </ion-label>\n\n        <ion-input type="text" placeholder=""  formControlName="usuario"></ion-input>\n\n      </ion-item>\n\n      <ion-item id="cadastreSe-input9">\n\n        <ion-label>\n\n          Senha\n\n        </ion-label>\n\n        <ion-input type="text" placeholder=""  formControlName="senha"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <div>\n\n      <button (click)="salvarUsuario()" [disabled]="!validaUsuario.valid"id="cadastreSe-button3" ion-button color="positive" block>Salvar</button>\n\n    </div>\n\n  </form>\n\n    <div class="botoes">\n\n      <button ion-button color="#ffae42">Editar</button>\n\n      <button ion-button color="danger">Excluir</button> \n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Aplicativo-\src\pages\cadastre-se\cadastre-se.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usuarios_usuarios__["a" /* UsuariosProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], CadastreSePage);
    return CadastreSePage;
    var CadastreSePage_1;
}());

//# sourceMappingURL=cadastre-se.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeusChamadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_usuarios__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MeusChamadosPage = /** @class */ (function () {
    //Construtor
    function MeusChamadosPage(navCtrl, navParams, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.toast = toast;
        this.$status;
        this.chamados;
        //Chamando a funçao
        //this.getChamados();
        this.getChamadosStatus();
    }
    //Método Get
    MeusChamadosPage.prototype.getChamados = function () {
        var _this = this;
        this.provider.listarChamados()
            .then(function (data) {
            _this.chamados = data;
            console.log(_this.chamados);
        })
            .catch(function (error) {
            _this.toast.create({ message: 'Erro ao listar chamados. Erro:' + error.error, position: 'boton', duration: 3000 });
        });
    };
    //listar chamados pelo status
    MeusChamadosPage.prototype.getChamadosStatus = function () {
        var _this = this;
        if (this.$status == null) {
            this.$status = 1;
        }
        this.provider.listarChamadosStatus(this.$status)
            .then(function (data) {
            if (data == "") {
                alert('Nenhum chamado encontrado \n para este status');
            }
            _this.chamados = data;
            console.log(_this.chamados);
        })
            .catch(function (error) {
            _this.toast.create({ message: 'Erro ao listar chamados. Erro:' + error.error, position: 'boton', duration: 3000 });
        });
    };
    MeusChamadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meus-chamados',template:/*ion-inline-start:"C:\xampp\htdocs\Aplicativo-\src\pages\meus-chamados\meus-chamados.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only>\n\n        \n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Meus Chamados\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="card-background-page" paddin id="page13">\n\n    <ion-item>\n\n        <ion-label>\n\n          Selecione um status!\n\n        </ion-label>\n\n        <ion-select [(ngModel)]="$status" (ionChange)="getChamadosStatus()" >\n\n          <ion-option value=1>\n\n            Aberto\n\n          </ion-option>\n\n          <ion-option value=2>\n\n            Em analise\n\n          </ion-option>\n\n          <ion-option value=3>\n\n            Em andamento\n\n          </ion-option>\n\n          <ion-option value=4>\n\n            Finalizados\n\n          </ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n  <ion-list *ngFor="let c of chamados">\n\n    <ion-card >\n\n      <ion-card-header>\n\n          <ion-grid>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <div><h5>Tipo:</h5>{{c.tipo_chamado}} </div>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <div></div>\n\n                  </ion-col>\n\n                <ion-col>\n\n                  <div><h5>Status:</h5> {{c.status_chamado}}</div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n      </ion-card-header>\n\n    \n\n      <ion-card-content>\n\n        <div  class="p">\n\n          <ion-card>\n\n              {{c.descricao}}\n\n          </ion-card>\n\n        </div>\n\n      \n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Aplicativo-\src\pages\meus-chamados\meus-chamados.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_usuarios__["a" /* UsuariosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], MeusChamadosPage);
    return MeusChamadosPage;
}());

//# sourceMappingURL=meus-chamados.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobreOMunicPioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SobreOMunicPioPage = /** @class */ (function () {
    function SobreOMunicPioPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SobreOMunicPioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sobre-omunic-pio',template:/*ion-inline-start:"C:\xampp\htdocs\Aplicativo-\src\pages\sobre-omunic-pio\sobre-omunic-pio.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Sobre o Município\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page1"></ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Aplicativo-\src\pages\sobre-omunic-pio\sobre-omunic-pio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SobreOMunicPioPage);
    return SobreOMunicPioPage;
}());

//# sourceMappingURL=sobre-omunic-pio.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sobre_oaplicativo_sobre_oaplicativo__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_documentos_documentos__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cadastre_se_cadastre_se__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_meu_vereador_meu_vereador__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mandato_mandato__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_canal_direto_canal_direto__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_enquetes_enquetes__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chamados_chamados__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_meus_chamados_meus_chamados__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_sobre_omunic_pio_sobre_omunic_pio__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_c_mara_c_mara__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_usuarios_usuarios__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_video_capture_plus__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sobre_omunic_pio_sobre_omunic_pio__["a" /* SobreOMunicPioPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_sobre_oaplicativo_sobre_oaplicativo__["a" /* SobreOAplicativoPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_documentos_documentos__["a" /* DocumentosPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_c_mara_c_mara__["a" /* CMaraPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cadastre_se_cadastre_se__["a" /* CadastreSePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_meu_vereador_meu_vereador__["a" /* MeuVereadorPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mandato_mandato__["a" /* MandatoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_canal_direto_canal_direto__["a" /* CanalDiretoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_enquetes_enquetes__["a" /* EnquetesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chamados_chamados__["a" /* ChamadosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_meus_chamados_meus_chamados__["a" /* MeusChamadosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_forms__["f" /* ReactiveFormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sobre_omunic_pio_sobre_omunic_pio__["a" /* SobreOMunicPioPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_sobre_oaplicativo_sobre_oaplicativo__["a" /* SobreOAplicativoPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_documentos_documentos__["a" /* DocumentosPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_c_mara_c_mara__["a" /* CMaraPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cadastre_se_cadastre_se__["a" /* CadastreSePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_meu_vereador_meu_vereador__["a" /* MeuVereadorPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mandato_mandato__["a" /* MandatoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_canal_direto_canal_direto__["a" /* CanalDiretoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_enquetes_enquetes__["a" /* EnquetesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chamados_chamados__["a" /* ChamadosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_meus_chamados_meus_chamados__["a" /* MeusChamadosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_usuarios_usuarios__["a" /* UsuariosProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_video_capture_plus__["a" /* VideoCapturePlus */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sobre_oaplicativo_sobre_oaplicativo__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_documentos_documentos__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sobre_omunic_pio_sobre_omunic_pio__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToSobreOMunicPio = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_sobre_omunic_pio_sobre_omunic_pio__["a" /* SobreOMunicPioPage */]);
    };
    MyApp.prototype.goToSobreOAplicativo = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_sobre_oaplicativo_sobre_oaplicativo__["a" /* SobreOAplicativoPage */]);
    };
    MyApp.prototype.goToDocumentos = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_documentos_documentos__["a" /* DocumentosPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\Aplicativo-\src\app\app.html"*/'<ion-menu [content]="mainContent">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        Sobre\n\n      </ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content id="side-menu21">\n\n    <ion-list id="sobre-list1">\n\n      <ion-item color="none" menuClose="" on-click="goToSobreOMunicPio()" id="sobre-list-item1">\n\n        Município\n\n        <ion-icon name="information-circle" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item color="none" menuClose="" on-click="goToSobreOAplicativo()" id="sobre-list-item2">\n\n        Aplicativo\n\n        <ion-icon name="information-circle" item-right></ion-icon>\n\n      </ion-item>\n\n      <ion-item color="none" menuClose="" on-click="goToDocumentos()" id="sobre-list-item3">\n\n        Documentos\n\n        <ion-icon name="document" item-right></ion-icon>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\xampp\htdocs\Aplicativo-\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\Aplicativo-\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\Aplicativo-\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient, HttpHeaders } from '@angular/common/http';



/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsuariosProvider = /** @class */ (function () {
    function UsuariosProvider(http) {
        this.http = http;
        //Variável com o endereço da API
        this.url = 'http://127.0.0.1:8000/api';
        console.log('Hello UsuariosProvider Provider');
    }
    //---------------------------------------------------------------------------------
    //Cadastro de usuarios
    UsuariosProvider.prototype.criarUsuario = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.url + '/usuarios', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    //------------------------------------------------------------------------------------
    //Realizar login
    UsuariosProvider.prototype.login = function (usuario, senha) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = {
                usuario: usuario,
                senha: senha
            };
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.url + '/login', JSON.stringify(data), { headers: headers })
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    //-------------------------------------------------------------------------------
    UsuariosProvider.prototype.postLogin = function (usuario) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", "application/json");
        headers.append("Access-Controll-Allow-Origin", "*");
        headers.append("Access-Controll-Allow-Methods", "POST, GET, OPTIONS, PUT");
        headers.append("Content-Type", "application/json");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            "usuario": usuario.usuario,
            "senha": usuario.senha
        };
        return this.http.post(this.url + "/login", data, requestOptions);
    };
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
    //Criar chamado
    UsuariosProvider.prototype.criarChamado = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.url + '/chamados', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    UsuariosProvider.prototype.listarChamados = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append("Access-Controll-Allow-Origin", "*");
            headers.append("Access-Controll-Allow-Methods", "POST, GET, OPTIONS, PUT");
            headers.append("Content-Type", "application/json");
            _this.http.get(_this.url + '/chamados')
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    UsuariosProvider.prototype.listarChamadosStatus = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append("Access-Controll-Allow-Origin", "*");
            headers.append("Access-Controll-Allow-Methods", "POST, GET, OPTIONS, PUT");
            headers.append("Content-Type", "application/json");
            _this.http.get(_this.url + '/chamados/' + 'status/' + data)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    //Listar as enquetes
    UsuariosProvider.prototype.listarEnquetes = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append("Access-Controll-Allow-Origin", "*");
            headers.append("Access-Controll-Allow-Methods", "POST, GET, OPTIONS, PUT");
            headers.append("Content-Type", "application/json");
            _this.http.get(_this.url + '/enquetes')
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    UsuariosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UsuariosProvider);
    return UsuariosProvider;
}());

//# sourceMappingURL=usuarios.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeuVereadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c_mara_c_mara__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mandato_mandato__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__canal_direto_canal_direto__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chamados_chamados__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enquetes_enquetes__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MeuVereadorPage = /** @class */ (function () {
    function MeuVereadorPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MeuVereadorPage_1 = MeuVereadorPage;
    MeuVereadorPage.prototype.goToCMara = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__c_mara_c_mara__["a" /* CMaraPage */]);
    };
    MeuVereadorPage.prototype.goToMandato = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mandato_mandato__["a" /* MandatoPage */]);
    };
    MeuVereadorPage.prototype.goToCanalDireto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__canal_direto_canal_direto__["a" /* CanalDiretoPage */]);
    };
    MeuVereadorPage.prototype.goToChamados = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chamados_chamados__["a" /* ChamadosPage */]);
    };
    MeuVereadorPage.prototype.goToMeuVereador = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(MeuVereadorPage_1);
    };
    MeuVereadorPage.prototype.goToEnquetes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__enquetes_enquetes__["a" /* EnquetesPage */]);
    };
    MeuVereadorPage = MeuVereadorPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meu-vereador',template:/*ion-inline-start:"C:\xampp\htdocs\Aplicativo-\src\pages\meu-vereador\meu-vereador.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Meu Vereador\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page7">\n\n  <ion-list id="meuVereador-list3">\n\n    <ion-item color="none" on-click="goToCMara()" id="meuVereador-list-item4">\n\n      <ion-thumbnail item-left>\n\n        <img src="assets/img/VXAVedW9QLaSLRAEV6DM_icone-acesso-informacao.png" />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Câmara\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="none" on-click="goToMandato()" id="meuVereador-list-item7">\n\n      <ion-thumbnail item-left>\n\n        <img src="assets/img/ddBbxPVmRjqAWxML4wBK_icone-acesso-informacao.png" />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Mandato\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item-sliding>\n\n      <ion-item color="none" on-click="goToCanalDireto()" id="meuVereador-list-item5">\n\n        <ion-thumbnail item-left>\n\n          <img src="assets/img/vv9R4dnZQui1KZoRyaTj_canaldireto.png" />\n\n        </ion-thumbnail>\n\n        <h2>\n\n          Canal Direto\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item-options side="left">\n\n        <button ion-button color="positive"></button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n    <ion-item color="none" on-click="goToEnquetes()" id="meuVereador-list-item6">\n\n      <ion-thumbnail item-left>\n\n        <img src="assets/img/VEW9hOYsSe0WUO52CHXH_enquete.png" />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Enquetes\n\n      </h2>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Aplicativo-\src\pages\meu-vereador\meu-vereador.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MeuVereadorPage);
    return MeuVereadorPage;
    var MeuVereadorPage_1;
}());

//# sourceMappingURL=meu-vereador.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CMaraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CMaraPage = /** @class */ (function () {
    function CMaraPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CMaraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-c-mara',template:/*ion-inline-start:"C:\xampp\htdocs\Aplicativo-\src\pages\c-mara\c-mara.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Câmara\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page8"></ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Aplicativo-\src\pages\c-mara\c-mara.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CMaraPage);
    return CMaraPage;
}());

//# sourceMappingURL=c-mara.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MandatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MandatoPage = /** @class */ (function () {
    function MandatoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MandatoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mandato',template:/*ion-inline-start:"C:\xampp\htdocs\Aplicativo-\src\pages\mandato\mandato.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Mandato\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page9"></ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Aplicativo-\src\pages\mandato\mandato.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MandatoPage);
    return MandatoPage;
}());

//# sourceMappingURL=mandato.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanalDiretoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chamados_chamados__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meu_vereador_meu_vereador__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mandato_mandato__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enquetes_enquetes__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__c_mara_c_mara__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__meus_chamados_meus_chamados__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CanalDiretoPage = /** @class */ (function () {
    function CanalDiretoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CanalDiretoPage_1 = CanalDiretoPage;
    CanalDiretoPage.prototype.goToChamados = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chamados_chamados__["a" /* ChamadosPage */]);
    };
    CanalDiretoPage.prototype.goToMeuVereador = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__meu_vereador_meu_vereador__["a" /* MeuVereadorPage */]);
    };
    CanalDiretoPage.prototype.goToCMara = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__c_mara_c_mara__["a" /* CMaraPage */]);
    };
    CanalDiretoPage.prototype.goToMandato = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mandato_mandato__["a" /* MandatoPage */]);
    };
    CanalDiretoPage.prototype.goToCanalDireto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(CanalDiretoPage_1);
    };
    CanalDiretoPage.prototype.goToEnquetes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__enquetes_enquetes__["a" /* EnquetesPage */]);
    };
    CanalDiretoPage.prototype.goToMeusChamados = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__meus_chamados_meus_chamados__["a" /* MeusChamadosPage */]);
    };
    CanalDiretoPage = CanalDiretoPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-canal-direto',template:/*ion-inline-start:"C:\xampp\htdocs\Aplicativo-\src\pages\canal-direto\canal-direto.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Canal Direto\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page10">\n\n  <div class="spacer" style="width:300px;height:20px;" id="canalDireto-spacer5"></div>\n\n  <img src="assets/img/HPbdcOS4T46Rckzd12Vd_Brasao_Municipio.jpg" style="display:block;width:50%;height:auto;margin-left:auto;margin-right:auto;" />\n\n  <div class="spacer" style="width:300px;height:20px;" id="canalDireto-spacer6"></div>\n\n  <button id="canalDireto-button10" ion-button color="light" block icon-left on-click="goToMeusChamados()">\n\n    <ion-icon name="eye"></ion-icon>\n\n    Meus Chamados\n\n  </button>\n\n  <button id="canalDireto-button6" ion-button color="light" block icon-left on-click="goToChamados()">\n\n    <ion-icon name="add"></ion-icon>\n\n    Novo Chamado\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Aplicativo-\src\pages\canal-direto\canal-direto.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CanalDiretoPage);
    return CanalDiretoPage;
    var CanalDiretoPage_1;
}());

//# sourceMappingURL=canal-direto.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChamadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meu_vereador_meu_vereador__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mandato_mandato__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__canal_direto_canal_direto__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enquetes_enquetes__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__c_mara_c_mara__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_usuarios_usuarios__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_video_capture_plus__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ChamadosPage = /** @class */ (function () {
    function ChamadosPage(navCtrl, usuariosProvider, formBuilder, camera, videoCapturePlus, geolocation) {
        this.navCtrl = navCtrl;
        this.usuariosProvider = usuariosProvider;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.videoCapturePlus = videoCapturePlus;
        this.geolocation = geolocation;
        this.midia = null;
        this.long = null;
        this.lat = null;
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.videoOptions = {
            limit: 1,
            highquality: true,
            portraitOverlay: 'assets/img/camera/overlay/portrait.png',
            landscapeOverlay: 'assets/img/camera/overlay/landscape.png'
        };
        this.chamado = { tipo_chamado: '',
            descricao: '',
            imagem_video: '',
            data_abertura: '',
            longitude: '',
            latitude: '',
            id_usuario: '',
        };
        this.validaChamado = this.formBuilder.group({
            tipo_chamado: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required
                ])],
            descricao: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required
                ])],
            imagem_video: [''],
            data_abertura: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required
                ])],
            longitude: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required
                ])],
            latitude: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required
                ])],
            id_usuario: ['1'],
        });
    }
    ChamadosPage_1 = ChamadosPage;
    //Função para tirar foto
    ChamadosPage.prototype.tirarFoto = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            _this.midia = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            alert('Ops!\nHouve um erro');
            console.log(err);
        });
    };
    ChamadosPage.prototype.gravarVideo = function () {
        var _this = this;
        this.videoCapturePlus.captureVideo(this.videoOptions).then(function (imageData) {
            _this.midia = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            alert('Ops!\nHouve um erro');
            console.log(err);
        });
    };
    ChamadosPage.prototype.pegarLocalizacao = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            resp.coords.latitude;
            resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            //data can be a set of coordinates, or an error (if an error occurred).
            _this.lat = data.coords.latitude;
            _this.long = data.coords.longitude;
        });
    };
    //Função salvar chamado
    ChamadosPage.prototype.salvarChamado = function () {
        var _this = this;
        this.chamado = this.validaChamado.value;
        this.chamado.imagem_video = this.midia;
        this.chamado.latitude = this.lat;
        this.chamado.longitude = this.long;
        this.usuariosProvider.criarChamado(this.chamado).then(function (result) {
            console.log(result);
            _this.validaChamado.reset();
        }, function (err) {
            console.log(err);
        });
    };
    ChamadosPage.prototype.goToMeuVereador = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__meu_vereador_meu_vereador__["a" /* MeuVereadorPage */]);
    };
    ChamadosPage.prototype.goToCMara = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__c_mara_c_mara__["a" /* CMaraPage */]);
    };
    ChamadosPage.prototype.goToMandato = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mandato_mandato__["a" /* MandatoPage */]);
    };
    ChamadosPage.prototype.goToCanalDireto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__canal_direto_canal_direto__["a" /* CanalDiretoPage */]);
    };
    ChamadosPage.prototype.goToChamados = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(ChamadosPage_1);
    };
    ChamadosPage.prototype.goToEnquetes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__enquetes_enquetes__["a" /* EnquetesPage */]);
    };
    ChamadosPage = ChamadosPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chamados',template:/*ion-inline-start:"C:\xampp\htdocs\Aplicativo-\src\pages\chamados\chamados.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title>\n\n      Chamados\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page12">\n\n\n\n  <div  [formGroup]="validaChamado">\n\n\n\n    <ion-list id="chamados-list6">\n\n      <ion-item-divider color="light" id="chamados-list-item-divider3">\n\n        Informe os dados a seguir\n\n      </ion-item-divider>\n\n      <ion-item id="chamados-select1">\n\n        <ion-label>\n\n          Tipo\n\n        </ion-label>\n\n        <ion-select formControlName="tipo_chamado">\n\n          <ion-option>\n\n            Denúncia\n\n          </ion-option>\n\n          <ion-option>\n\n            Reclamação\n\n          </ion-option>\n\n          <ion-option>\n\n            Sugestão\n\n          </ion-option>\n\n          <ion-option>\n\n            Elogios\n\n          </ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item id="chamados-textarea2">\n\n        <ion-label>\n\n          Descrição\n\n        </ion-label>\n\n        <ion-textarea placeholder="" formControlName="descricao"></ion-textarea>\n\n      </ion-item>\n\n      <ion-item id="chamados-input11">\n\n        <ion-label>\n\n          Data\n\n        </ion-label>\n\n        <ion-input type="date" placeholder="" formControlName="data_abertura"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <form id="chamados-form8">\n\n      <ion-item id="chamados-toggle2">\n\n        <ion-label>\n\n          Localização\n\n        </ion-label>\n\n        <ion-toggle color="positive" (ionChange)=pegarLocalizacao()></ion-toggle>\n\n      </ion-item>\n\n    </form>\n\n    <button (click)="tirarFoto()" id="chamados-button7" ion-button color="light" block icon-left>\n\n      <ion-icon name="camera"></ion-icon>\n\n      Adcionar imagem\n\n  </button>\n\n    <button (click)="gravarVideo()"id="chamados-button8" ion-button color="light" block icon-left>\n\n      <ion-icon name="videocam"></ion-icon>\n\n      Adicionar Video\n\n    </button>\n\n    <div class="spacer" style="width:300px;height:43px;" id="chamados-spacer7"></div>\n\n    <button (click)="salvarChamado()"id="chamados-button9" ion-button color="positive" block on-click="goToMeuVereador()">\n\n      Concluir Chamado\n\n    </button>\n\n  </div>\n\n\n\n  \n\n\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Aplicativo-\src\pages\chamados\chamados.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_usuarios_usuarios__["a" /* UsuariosProvider */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_video_capture_plus__["a" /* VideoCapturePlus */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */]])
    ], ChamadosPage);
    return ChamadosPage;
    var ChamadosPage_1;
}());

//# sourceMappingURL=chamados.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquetesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meu_vereador_meu_vereador__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mandato_mandato__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__canal_direto_canal_direto__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chamados_chamados__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__c_mara_c_mara__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_usuarios_usuarios__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EnquetesPage = /** @class */ (function () {
    function EnquetesPage(navCtrl, navParams, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.toast = toast;
        this.enquetes;
        this.getEnquetes();
    }
    EnquetesPage_1 = EnquetesPage;
    //Método Get
    EnquetesPage.prototype.getEnquetes = function () {
        var _this = this;
        this.provider.listarEnquetes()
            .then(function (data) {
            _this.enquetes = data;
            console.log(_this.enquetes);
        })
            .catch(function (error) {
            _this.toast.create({ message: 'Erro ao listar chamados. Erro:' + error.error, position: 'boton', duration: 3000 });
        });
    };
    EnquetesPage.prototype.goToMeuVereador = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__meu_vereador_meu_vereador__["a" /* MeuVereadorPage */]);
    };
    EnquetesPage.prototype.goToCMara = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__c_mara_c_mara__["a" /* CMaraPage */]);
    };
    EnquetesPage.prototype.goToMandato = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mandato_mandato__["a" /* MandatoPage */]);
    };
    EnquetesPage.prototype.goToCanalDireto = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__canal_direto_canal_direto__["a" /* CanalDiretoPage */]);
    };
    EnquetesPage.prototype.goToChamados = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chamados_chamados__["a" /* ChamadosPage */]);
    };
    EnquetesPage.prototype.goToEnquetes = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(EnquetesPage_1);
    };
    EnquetesPage = EnquetesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enquetes',template:/*ion-inline-start:"C:\xampp\htdocs\Aplicativo-\src\pages\enquetes\enquetes.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only>\n\n        \n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Enquetes\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page11">\n\n  <ion-list *ngFor="let e of enquetes">\n\n      <ion-card padding="10px">\n\n\n\n          <ion-card-header>\n\n              <ion-item-divider color="light" id="enquetes-list-item-divider4">\n\n                  Votação Atualizada\n\n                </ion-item-divider>\n\n              <ion-grid>\n\n                  <ion-row>\n\n                    <ion-col>\n\n                      <div><h5>A Favor:</h5>{{e.num_votos_afavor}} </div>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <div></div>\n\n                      </ion-col>\n\n                    <ion-col>\n\n                      <div><h5>Contra:</h5> {{e.num_votos_contra}}</div>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-grid>\n\n          </ion-card-header>\n\n        \n\n          <ion-card-content>\n\n              <ion-card>\n\n                  <ion-card-header></ion-card-header>\n\n                  <ion-card-content>\n\n                   <p>{{e.descricao_enquete}}</p>\n\n                  </ion-card-content>\n\n                \n\n                </ion-card>\n\n          </ion-card-content>\n\n          \n\n          <div class="spacer" style="width:300px;height:10px;" id="enquetes-spacer8"></div>\n\n        <form id="enquetes-form7">\n\n          <ion-item id="enquetes-textarea3">\n\n            <ion-label>\n\n              Comentário\n\n            </ion-label>\n\n            <ion-textarea placeholder=""></ion-textarea>\n\n          </ion-item>\n\n          <div class="spacer" style="width:300px;height:24px;" id="enquetes-spacer9"></div>\n\n          <ion-item-divider color="light" id="enquetes-list-item-divider4">\n\n            Sua opinião é muito Importante\n\n          </ion-item-divider>\n\n          <ion-item>\n\n              <ion-label>\n\n                Adicione seu Voto\n\n              </ion-label>\n\n              <ion-select>\n\n                <ion-option value=1>\n\n                  Sim\n\n                </ion-option>\n\n                <ion-option value=2>\n\n                  Não\n\n                </ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n        </form>\n\n        <button id="enquetes-button11" ion-button color="positive" block on-click="goToMeuVereador()">\n\n          Concluir\n\n        </button>\n\n      </ion-card>\n\n  </ion-list>\n\n  \n\n    \n\n\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\Aplicativo-\src\pages\enquetes\enquetes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__providers_usuarios_usuarios__["a" /* UsuariosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], EnquetesPage);
    return EnquetesPage;
    var EnquetesPage_1;
}());

//# sourceMappingURL=enquetes.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map