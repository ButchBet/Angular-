import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovilDataService } from '../movilDataService.service';
import { CallRegistService } from '../callRegistService.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  constructor(private movilDataService: MovilDataService, private callRegistService: CallRegistService) {
   }

  ngOnInit(): void {
    this.operator1 = this.movilDataService.getSim(1)[0];

    this.operator2 = this.movilDataService.getSim(2)[0];
  }

  @Output() calling = new EventEmitter<Boolean>();

  DAYS = [
    "Sd",
    "Mn",
    "Ts",
    "Wd",
    "Th",
    "Fr",
    "St"
  ]

  operator1:any = ""
  operator2: any = ""

  call(operator: HTMLDivElement){
    const date = new Date().getDay();

    this.callRegistService.getCall()[0].operator = operator.innerHTML;

    this.callRegistService.getCall()[0].date = this.DAYS[date];

    // Emit event to can change to the call component
    this.calling.emit(true);
  }
}
