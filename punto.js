"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setX = function (numero) {
        this.x = numero;
    };
    Punto.prototype.setY = function (numero) {
        this.y = numero;
    };
    Punto.prototype.toString = function () {
        var texto = "(" + this.getX() + "," + this.getY() + ")";
        return texto;
    };
    Punto.prototype.distanciaAlorigen = function () {
        var numero = Math.sqrt(Math.pow(this.getY(), 2) + Math.pow(this.getY(), 2));
        return numero;
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var numero = Math.sqrt(Math.pow(this.getX() - otroPunto.getX(), 2) + Math.pow(this.getY() - otroPunto.getY(), 2));
        return numero;
    };
    Punto.prototype.calcularCuadrante = function () {
        var cuadrante;
        if (this.getX() == 0 || this.getY() == 0) {
            cuadrante = 0;
        }
        else if (this.getX() > 0) {
            if (this.getY() > 0) {
                cuadrante = 1;
            }
            else {
                cuadrante = 2;
            }
        }
        else {
            if (this.getY() > 0) {
                cuadrante = 4;
            }
            else {
                cuadrante = 3;
            }
        }
        return cuadrante;
    };
    Punto.prototype.calculoMasCercano = function (puntos) {
        var newPunto;
        var distancia = this.calcularDistancia(puntos[0]);
        for (var i = 0; i < puntos.length; i++) {
            if (this.calcularDistancia(puntos[i]) < distancia) {
                newPunto = puntos[i];
            }
        }
        return newPunto;
    };
    return Punto;
}());
exports.Punto = Punto;
