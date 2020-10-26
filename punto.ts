export class Punto {
    private x : number;
    private y : number;

    constructor(x:number,y:number)
    {
        this.x = x;
        this.y = y;

    }
    getX():number
    {
        return this.x ;
    }
    getY():number
    {
        return this.y;
    }
    setX(numero :number)
    {
        this.x = numero;
    }
    setY(numero: number)
    {
        this.y = numero;
    }
    toString():string{
        let texto = "(" + this.getX() +","+this.getY()+")"
        return texto;
    }
    distanciaAlorigen():number{
        let numero = Math.sqrt(Math.pow(this.getY(),2)+Math.pow(this.getY(),2))
        return numero;
    }
    calcularDistancia(otroPunto: Punto): number{
        let numero = Math.sqrt(Math.pow(this.getX()-otroPunto.getX(),2)+Math.pow(this.getY()-otroPunto.getY(),2))
        return numero;
    }
    calcularCuadrante():number
    {
        let cuadrante : number;
        if (this.getX() == 0 || this.getY()==0)
        {
            cuadrante = 0;
        }
        else if (this.getX()>0)
        {
            if (this.getY() > 0)
            {
                cuadrante = 1;
            }
            else{cuadrante = 2}
        }
        else
        {
            if (this.getY() > 0)
            {
                cuadrante = 4;
            }
            else{cuadrante = 3}
        }
        return cuadrante;
    }
    calculoMasCercano (puntos : Punto[]) : Punto
    {
        let newPunto : Punto;
        let distancia = this.calcularDistancia(puntos[0]);
        for  (let i=0 ; i< puntos.length; i++)
        {
            if (this.calcularDistancia(puntos[i])<distancia)
            {
                newPunto = puntos[i]
            }
        }
        return newPunto;
    }
}