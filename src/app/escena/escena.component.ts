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

  @Input() frases: Frase[];         // es una anotación @Input que define la propiedad frases del componente como una entrada.
                                    // esto significa que el componente puede recibir un array de objetos Frase desde su componente padre.

    currentSentence: number = 0;     // variable para almacenar el índice de la frase actual

  constructor() {                   // es el constructor de la clase EscenaComponent. En este caso, inicializa la propiedad frases
    this.frases = [];               // como un array vacío. Esto garantiza que la propiedad esté definida y lista para recibir valores. 
}
   

   // metodo para retroceder a la frase anterior
  prev(): void {
    // Verificamos si no estamos en la primera frase
    if (this.currentSentence > 0) {
      // Disminuimos el índice para apuntar a la frase anterior
      this.currentSentence--;
    }
  }

  // metodo para avanzar a la siguiente frase
  next(): void {
    
    if (this.currentSentence < this.frases.length - 1) {          // verifica si no esta en la última frase
      
      this.currentSentence++;                                     // aumenta el índice para pasar a la siguiente frase
    }
  }
}
