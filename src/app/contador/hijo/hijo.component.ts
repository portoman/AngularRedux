import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NietoComponent } from '../nieto/nieto.component';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Input() contador!: number;
  @Output() cambioContador=new EventEmitter<number>();


  multiplicar(){
    this.contador*=2;
    this.cambioContador.emit(this.contador);
  }

  dividir(){
    this.contador/=2;
    this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevoContador:number){
  this.contador=nuevoContador;
  this.cambioContador.emit(nuevoContador);
  }

}
