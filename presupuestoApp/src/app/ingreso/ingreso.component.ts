import { Component, OnInit } from '@angular/core';
import { ManageService } from '../services/manegeService.service';
import { Ingreso } from './ingreso.module';


@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingreso: Ingreso[] = []

  constructor(private manageService: ManageService) {
    this.ingreso = manageService.ingreso;
   }

  ngOnInit(): void {
  }

  eliminarDescripcion(indice: number) {
    this.manageService.eliminarIngreso(indice); // Enviar el indice al metodo eliminar ingreso

    this.manageService.agregado.emit("0"); // Emitir la acción para recargar los datos en cabecero
  }

}
