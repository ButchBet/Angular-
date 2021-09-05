import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso/ingreso.module';
import { ManageService } from '../services/manegeService.service';
import { Egreso } from './egreso.module'

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egreso: Egreso[] = [];

  ingreso: Ingreso[] = [];

  porcentaje: number;

  constructor(private manageService: ManageService) { 
    this.egreso = manageService.egreso;

    this.ingreso = manageService.ingreso;
  }

  ngOnInit(): void {
  }

  obtenerPorcentaje(valor: number) {
    let valorTotal: number = 0;

    this.ingreso.forEach((element) => {
      valorTotal += Number(element.valor);
    }); 

    if(valorTotal != 0) {
      valorTotal = valor * 100 / valorTotal; // Calcular el porcentaje que representa el egreso ante el ingreso
    }

    return valorTotal;
  }

  eliminarDescripcion(indice: number) {
    this.manageService.eliminarEgreso(indice); // Enviar el indice al metodo eliminar ingreso

    this.manageService.agregado.emit("0"); // Emitir la acción para recargar los datos en cabecero
  }
}
