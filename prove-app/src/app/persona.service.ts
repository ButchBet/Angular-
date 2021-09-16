import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
  ]; 

  saludar = new EventEmitter<number>();

  constructor(private loggingService:LoggingService){}

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola('agregamos persona:' + persona.nombre)
    this.personas.push(persona);
  }

  obtenerPersona(indice: number) {
    let personaObtener: Persona = this.personas[indice];

    return personaObtener;
  }

  editarPersona(index: number, persona: Persona) {
    let personaModificar: Persona = this.personas[index];

    personaModificar.nombre = persona.nombre;

    personaModificar.apellido = persona.apellido;
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
  }
}
