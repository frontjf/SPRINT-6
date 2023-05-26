import { Component, Output, EventEmitter } from '@angular/core';


interface Frase {     // estructura con el componente texto del tipo string
  texto: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  mostrarEscena: boolean = false;                     // inicializamos mostrarEscena en falso
  @Output() iniciarJuego = new EventEmitter<void>();  // @Output es un decorador para definir la salida de la propiedad iniciarJuego 
  // esta instacia Eventemitter emite (o envia) el evento iniciar juego
  // vamos que output dice que iniciarjuego esta listo para salir y EventEmitter es quien lo lleva donde sea
  // lo de void es pq ira vacio, no se esperan valores, no llevara informacion sino una accion que hay que ejecutar

  frases: Frase[] = [     // frases con la estructura de Frase para poner texto
    { texto: "Nuestro heroe navegaba por el espacio cuando recibio una llamada de alerta de una nave que habia a lo lejos..." },
    { texto: "Habian 2 puertas con la letra A dibujada, y encima un cartel que decia..." },
    { texto: "En una puerta hay Aliens carnivoros muertos de hambre, y en la otra esta Fernando Herrera dando clases de Angular las 24 horas del dia... " },
    { texto: "Nuestro heroe eligio una puerta y tuvo la mala suerte de acabar en las clases de Angular..." }
  ];   

  

  empezarJuego() {                  // metodo empezarJuego 
    this.mostrarEscena = true;      // pasamos mostrarEscena a true
    this.iniciarJuego.emit();       // emit es un metodo que 'emite' el evento iniciarJuego (lo 'escucharan' en app.component.html)
  }

}

