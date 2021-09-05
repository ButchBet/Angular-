import { Component, OnInit } from '@angular/core';
import { ManageService } from '../services/manegeService.service';
import { Ingreso } from '../ingreso/ingreso.module';
import { Egreso } from '../egreso/egreso.module';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  presupuesto: number = 0;

  ingreso: number = 0;

  egreso: number = 0;

  porcentaje: number = 0;

  signo: string = "";

  ingresoDescripcion: Ingreso[] = [];

  egresoDescripcion: Egreso[] = [];
  
  constructor(private manageService: ManageService) {
    this.ingresoDescripcion = manageService.ingreso;

    this.egresoDescripcion = manageService.egreso;

    this.manageService.agregado.subscribe(() => { // Obtener nuevos datos y llamar ngOnInit para hacer los calculos
      this.ngOnInit();
    });
   }

  ngOnInit(): void {
    let ingreso: number = 0;

    let egreso: number = 0;

    this.ingresoDescripcion.forEach((element) => { // Calculo del ingreso total
      ingreso += Number(element.valor);
    });

    this.egresoDescripcion.forEach((element) => { // Calculo del egreso total
      egreso += Number(element.valor);
    });

    this.ingreso = ingreso;

    this.egreso = egreso;

    this.presupuesto = Math.floor(ingreso - egreso); // Calcular el presupuesto = this.

    if(ingreso === 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = egreso * 100 / ingreso; // Calcular el porcentaje que representa el egreso ante el ingreso
    }
  }

  obtenerSigno(presupuesto: number) {
    if(presupuesto > 0) {
      return "+";
    } else {
      return "";
    }
  }
}
