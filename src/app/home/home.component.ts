import { Component } from '@angular/core';


interface Frase {     // estructura con el componente texto del tipo string
  texto: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  frases: Frase[] = [     // frases con la estructura de Frase para poner texto
    { texto: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacia" },
    { texto: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes." },
    { texto: "L'heroi va decidir travessar la porta que el portava a casa" },
    { texto: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..." }
  ];   
  

}

