import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent {

  size = 16;

  // @Input() size!: number | string;

  // @Output() sizechange = new EventEmitter<number>();

  dec() { this.resize(-1) };

  inc() { this.resize(+1) };

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));

    // this.sizechange.emit(this.size);
  }
  
}
