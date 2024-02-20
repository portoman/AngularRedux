import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrl: './nieto.component.css'
})
export class NietoComponent {
  @Input() contador!:number;
  @Output() contadorCambio=new EventEmitter<number>();

  reset(){
    this.contador=0;
    this.contadorCambio.emit(0);
  }
}
