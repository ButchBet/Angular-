import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso/ingreso.module';
import { Egreso } from '../egreso/egreso.module'
import { ManageService } from '../services/manegeService.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  descripcion: string = "";

  valor: number = 0;

  tipo: string = "";

  constructor(private manageService: ManageService) { }

  ngOnInit(): void {
  }

  generarDescripcion(tipo: string, descripcion: string, valor: number) {
    let validation = this.obtenerTipo(tipo);
    
    if(validation) {
      let description: Ingreso = new Ingreso(descripcion, valor);

      this.manageService.nuevoIngreso(description);
    } else {
      let description: Egreso = new Egreso(descripcion, valor);

      this.manageService.nuevoEgreso(description);
    }

    this.manageService.agregado.emit("0");

    // Vaciar los inputs
  }

  obtenerTipo(tipo: string) { // Retorna true en caso de + y false en caso de -
    if(tipo === "+") {
      return true;
    } else {
      return false;
    }
  }

}
