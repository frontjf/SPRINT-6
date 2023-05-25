## Angular

Angular es un framework de desarrollo web de código abierto y basado en TypeScript. Proporciona una estructura sólida y completa para construir aplicaciones web modernas.

## Componentes
Los componentes en Angular son bloques de construcción fundamentales de una aplicación. Representan una parte de la interfaz de usuario y contienen tanto la lógica como la plantilla HTML asociada.

Ejemplo:

import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  template: '<h1>Hola Mundo</h1>',
})
export class EjemploComponente {}


## Directivas
Las directivas son instrucciones que se aplican a elementos del DOM para modificar su comportamiento o apariencia. En Angular, hay directivas incorporadas, como ngFor y ngIf, que se utilizan para realizar iteraciones y condiciones en la plantilla.

Ejemplo:

<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>

<div *ngIf="mostrarMensaje">
  <p>El mensaje se muestra si la variable 'mostrarMensaje' es verdadera.</p>
</div>

## Eventos
Los eventos en Angular son acciones que ocurren en la interfaz de usuario, como hacer clic en un botón o ingresar datos en un formulario. Puedes capturar estos eventos y responder a ellos utilizando la sintaxis (evento)="método()" en la plantilla.

Ejemplo:

<button (click)="onButtonClick()">Haz clic</button>
<input (keyup)="onInputChange($event.target.value)">

## Métodos
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

## Propiedades y Enlace de Datos

Las propiedades y el enlace de datos en Angular permiten comunicar y pasar datos entre componentes. Por ejemplo, en el componente padre se puede pasar una propiedad al componente hijo utilizando la sintaxis de enlace [propiedad]="valor":

<app-hijo [mensaje]="mensajePadre"></app-hijo>

En este caso, la propiedad mensaje del componente hijo se establece con el valor de la propiedad mensajePadre del componente padre.

## Servicios

Los servicios en Angular son clases que se utilizan para compartir datos y funcionalidades entre componentes. Pueden ser inyectados en los componentes para su uso. Un ejemplo de servicio es el siguiente:

import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  datos: any[] = [];

  agregarDato(dato: any) {
    this.datos.push(dato);
  }
}

En este ejemplo, se define un servicio DataService que tiene una propiedad datos y un método agregarDato() para agregar datos a la propiedad datos.

## Enrutamiento

El enrutamiento en Angular permite navegar entre diferentes vistas y componentes en una aplicación de una sola página. Se define en un módulo de enrutamiento y se configuran las rutas. Un ejemplo básico sería:

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

En este ejemplo, se define un módulo de enrutamiento AppRoutingModule que configura dos rutas: una ruta vacía que muestra el componente HomeComponent y una ruta 'about' que muestra el componente AboutComponent.






