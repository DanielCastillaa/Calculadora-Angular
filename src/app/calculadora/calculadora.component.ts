import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1 : number= 0;
  num2 : number= 0;
  resultado: number=0;
  resultados: number[]=[];
  mostrarResultado: boolean=false;
  mostrarLista: boolean=false;
  sumar(){
    this.resultado= this.num1 + this.num2
    this.mostrarResultado= true;
    this.guardarResultado();
  }
  restar(){
    this.resultado= this.num1 - this.num2
    this.mostrarResultado= true;
    this.guardarResultado();
  }
  multiplicar(){
    this.resultado= this.num1 * this.num2
    this.mostrarResultado= true;
    this.guardarResultado();
  }
  dividir(){
    this.resultado= this.num1 / this.num2
    this.mostrarResultado= true;
    this.guardarResultado();
  }

  guardarResultado(){
  this.resultados.unshift(this.resultado);
  if (this.resultados.length > 3){
    this.resultados.pop()
   }
  }
}
