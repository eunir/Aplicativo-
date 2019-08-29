export class usuarioModel{

    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    private _nome_usuario: string;
    public get nome_usuario(): string {
        return this._nome_usuario;
    }
    public set nome_usuario(value: string) {
        this._nome_usuario = value;
    }
    private _endereco: string;
    public get endereco(): string {
        return this._endereco;
    }
    public set endereco(value: string) {
        this._endereco = value;
    }
    private _cpf_usuario: string;
    public get cpf_usuario(): string {
        return this._cpf_usuario;
    }
    public set cpf_usuario(value: string) {
        this._cpf_usuario = value;
    }
    private _email_usuario: string;
    public get email_usuario(): string {
        return this._email_usuario;
    }
    public set email_usuario(value: string) {
        this._email_usuario = value;
    }
    private _cidade_usuario: string;
    public get cidade_usuario(): string {
        return this._cidade_usuario;
    }
    public set cidade_usuario(value: string) {
        this._cidade_usuario = value;
    }
    private _nivel_acesso: string;
    public get nivel_acesso(): string {
        return this._nivel_acesso;
    }
    public set nivel_acesso(value: string) {
        this._nivel_acesso = value;
    }
    private _usuario: string;
    public get usuario(): string {
        return this._usuario;
    }
    public set usuario(value: string) {
        this._usuario = value;
    }
    private _senha: string;
    public get senha(): string {
        return this._senha;
    }
    public set senha(value: string) {
        this._senha = value;
    }

}