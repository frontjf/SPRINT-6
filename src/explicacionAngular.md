Angular
Angular es un framework de desarrollo web de código abierto y basado en TypeScript. Proporciona una estructura sólida y completa para construir aplicaciones web modernas.

Componentes
Los componentes en Angular son bloques de construcción fundamentales de una aplicación. Representan una parte de la interfaz de usuario y contienen tanto la lógica como la plantilla HTML asociada.

Ejemplo:

import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  template: '<h1>Hola Mundo</h1>',
})
export class EjemploComponente {}


Directivas
Las directivas son instrucciones que se aplican a elementos del DOM para modificar su comportamiento o apariencia. En Angular, hay directivas incorporadas, como ngFor y ngIf, que se utilizan para realizar iteraciones y condiciones en la plantilla.

Ejemplo:

<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>

<div *ngIf="mostrarMensaje">
  <p>El mensaje se muestra si la variable 'mostrarMensaje' es verdadera.</p>
</div>

Eventos
Los eventos en Angular son acciones que ocurren en la interfaz de usuario, como hacer clic en un botón o ingresar datos en un formulario. Puedes capturar estos eventos y responder a ellos utilizando la sintaxis (evento)="método()" en la plantilla.

Ejemplo:

<button (click)="onButtonClick()">Haz clic</button>
<input (keyup)="onInputChange($event.target.value)">

Métodos
Los métodos en Angular son funciones definidas en una clase de componente que realizan una tarea específica. Pueden ser invocados en respuesta a eventos o en otros lugares de la lógica de la aplicación.

Ejemplo:

export class MiComponente {
  saludar() {
    console.log('¡Hola!');
  }

  sumar(a: number, b: number) {
    return a + b;
  }
}




