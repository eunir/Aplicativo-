export class chamadosModel{

   private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _tipo_chamado: string;
    public get tipo_chamado(): string {
        return this._tipo_chamado;
    }
    public set tipo_chamado(value: string) {
        this._tipo_chamado = value;
    }

    private _status_chamado: string;
    public get status_chamado(): string {
        return this._status_chamado;
    }
    public set status_chamado(value: string) {
        this._status_chamado = value;
    }
}