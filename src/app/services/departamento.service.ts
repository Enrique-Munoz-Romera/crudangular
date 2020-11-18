import{ Injectable }from "@angular/core";
import{ HttpClient,HttpHeaders }from "@angular/common/http";
import{ Observable }from "rxjs";

import{ Global }from"./Global";
import{ Departamento }from "./../models/departamento";



@Injectable()

export class DepartamentoService {
    private url:string;

    constructor(private _http:HttpClient){
        this.url=Global.urlDept;
    }

    getDepartamentos():Observable<any>{
        var request="api/departamentos";
        return this._http.get(this.url + request);
    }

    buscarDepartamento(iddepartamento:string): Observable<any>{
        var request="api/departamentos/" + iddepartamento;
        return this._http.get(this.url + request);
    }

    insertarDepartamento(departamneto: Departamento): Observable<any>{
        var request = "api/departamentos";
        //convertir el obj a json
        var json = JSON.stringify(departamneto);
        //Para enviar la info al servicio se realiza mediante cabeceras
        var header = new HttpHeaders().set("content-Type","application/json");
        return this._http.post(this.url + request, json,
         {
            headers: header
         });

    }

    deleteDepartamento(iddepartamento:string): Observable<any>{
        var request = "api/departamentos/" + iddepartamento;
        return this._http.delete(this.url + request);

    }

    updateDepartamento(departamento:Departamento): Observable<any>{
        let json = JSON.stringify(departamento);
        var request = "api/departamentos";
        var header = new HttpHeaders().set("content-Type","application/json");
        return this._http.put(this.url + request, json,
            {
                 headers: header
            });
    }
}