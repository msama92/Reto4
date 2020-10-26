import {Punto} from "./punto"
import {Triangulo} from "./triangulo"

let coordenadas = new Punto(4,8);
console.log(coordenadas.toString())
let otroPunto = new Punto(2,4);

let punto2 = new Punto(0,4)
let punto3 = new Punto(7,6)
let punto4 = new Punto(10,10)

let puntitos  = [punto2,punto3,punto4];
console.log(coordenadas.calcularDistancia(otroPunto))

let newpunto = coordenadas.calculoMasCercano(puntitos)
console.log(newpunto.toString())
let triangulo  = new Triangulo(punto2,punto3,punto4)
console.log (triangulo.calcularLongitudLados())