import { Component, Input } from '@angular/core'; // Importa los módulos Component y Input del paquete @angular/core, 
                                                  // son necesarios para definir componentes y usar la directiva @Input.

interface Frase {   //declara una interfaz llamada Frase que define la estructura de un objeto
  texto: string;    // que tiene una propiedad texto de tipo string.
  
}

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {

  @Input() frases: Frase[];   //  Es una anotación @Input que define la propiedad frases del componente como una entrada.
                              // Esto significa que el componente puede recibir un array de objetos Frase desde su componente padre.

  constructor() {            // Es el constructor de la clase EscenaComponent. En este caso, inicializa la propiedad frases
    this.frases = [];        // como un array vacío. Esto garantiza que la propiedad esté definida y lista para recibir valores. 
    

}
}
