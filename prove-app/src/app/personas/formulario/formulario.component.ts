import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
  nombreInput:string;
  apellidoInput:string;  

  constructor(private loggingService:LoggingService,
    private personaService:PersonasService,
    private router: Router){}


  // miformulario = new FormGroup({
  //   nombreInputEvent: new FormControl('', Validators.required),

  //   apellidoInputEvent: new FormControl('', Validators.required)
  // });

  onGuardarPersona(){
      let persona1 = new Persona(this.nombreInput, this.apellidoInput);
      
      this.personaService.agregarPersona(persona1); // Enviar objeto de tipo Persona a metodo agregarPersona para guardar este en el arreglo

      this.router.navigate(['personas']); // Cambiar de direccion url

      // Re-inicializar en no-data
      this.nombreInput = ''; 

      this.apellidoInput = '';
  }
}
