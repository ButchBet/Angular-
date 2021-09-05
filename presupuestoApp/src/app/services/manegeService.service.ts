import { EventEmitter } from '@angular/core'
import { Ingreso } from '../ingreso/ingreso.module';
import { Egreso } from '../egreso/egreso.module';

export class ManageService {
    
    constructor(){}
    
    ingreso: Ingreso[] = [new Ingreso("Salario", 2100),
                          new Ingreso("Venta coche", 500)];

    egreso: Egreso[] = [new Egreso("Renta departamento", 900),
                        new Egreso("Ropa", 435.28)];

    agregado = new EventEmitter<any>();

    nuevoIngreso(ingreso: Ingreso) {
        this.ingreso.push(ingreso);
    }

    nuevoEgreso(egreso: Egreso) {
        this.egreso.push(egreso);
    }

    eliminarIngreso(indice: number) {
        this.ingreso.splice(indice, 1);
    }

    eliminarEgreso(indice: number) {
        this.egreso.splice(indice, 1);
    }

}