import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() callStatus: Boolean;

  @Output() callEvent = new EventEmitter<Boolean>();

  
}
