import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { DepartamentoService } from "./../../services/departamento.service";
import { ActivatedRoute,Router,Params } from "@angular/router";

import { Departamento } from "./../../models/departamento";

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
 
})
export class ModificarComponent implements OnInit {

  public departamento: Departamento;

  @ViewChild("cajanumero") cajanumero:ElementRef;
  @ViewChild("cajanombre") cajanombre:ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad:ElementRef;

  constructor(private _service:DepartamentoService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {
     this.departamento = Departamento.prototype;
   }

   buscarDepartamento(iddept){
    this._service.buscarDepartamento(iddept).subscribe(response => {
      this.departamento = response;
    });
   }

   updateDepartamento(){
    var num = parseInt(this.cajanumero.nativeElement.value);
    var nom = this.cajanombre.nativeElement.value;
    var loc = this.cajalocalidad.nativeElement.value;
    var dept = new Departamento(num,nom,loc);
    this._service.updateDepartamento(dept).subscribe(response => {
      this.departamento=response;
    })
   }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params:Params)=> {
        this.buscarDepartamento(params.iddepartamento);
    })
  }

}
