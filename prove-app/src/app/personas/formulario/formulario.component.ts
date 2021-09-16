import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  implements OnInit{
  nombreInput:string;
  apellidoInput:string;  
  indice: number;

  constructor(private loggingService:LoggingService,
    private personaService:PersonasService,
    private router: Router,
    private route: ActivatedRoute){}


  // miformulario = new FormGroup({
  //   nombreInputEvent: new FormControl('', Validators.required),

  //   apellidoInputEvent: new FormControl('', Validators.required)
  // });

  ngOnInit() {
    this.indice = this.route.snapshot.params['id'];

    if(this.indice) { // si indice es diferente a null
      let personaObtener: Persona = this.personaService.obtenerPersona(this.indice);

      this.nombreInput = personaObtener.nombre; // Agregar el nombre de la posición indice 

      this.apellidoInput = personaObtener.apellido; // Agregar el apellido de la posición indice 
    } else { // Para que cuando añadamos desde el primer botón (superior-centro) directamente no se deje el valor de los inputs guardados por defecto 
      this.nombreInput = ''; 
    
      this.apellidoInput = '';
    }
  }

  onGuardarPersona(){
    let persona = new Persona(this.nombreInput, this.apellidoInput);

    if(this.indice) { // cuando se desea realizar la configuración de un dato existente
      this.personaService.editarPersona(this.indice, persona);
    } else { // cuando se está agregando un nuevo dato      
      this.personaService.agregarPersona(persona); // Enviar objeto de tipo Persona a metodo agregarPersona para guardar este en el arreglo
    }

    this.router.navigate(['']); // Cambiar de direccion url

    this.nombreInput = ''; 
    
    this.apellidoInput = '';
    }

    eliminarPersona() {
      this.personaService.eliminarPersona(this.indice); // Enviar indice para posterior eliminado

      this.router.navigate(['']); // Cambiar de direccion url
    }

  }
