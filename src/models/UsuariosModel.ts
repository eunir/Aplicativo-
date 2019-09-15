export class Model {

    constructor(objeto?) {
        Object.assign(this, objeto);
    }
  
  }
  
  export class UsuariosModel extends Model {
      codigo: number;
      nome: string;
      email: string;
      login: string;
      senha: string;
  }