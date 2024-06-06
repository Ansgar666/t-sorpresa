class Coche {
    constructor (marca, modelo, lanzamiento, precio, peso, motor){
            this.marca = marca;
            this.modelo = modelo;
            this.lanzamiento = lanzamiento;
            this.precio = precio;
            this.peso = peso;
            this.motor = motor;
    }
}
let auto = new Coche ("Audi", "R8", "2005", "1400", "750","V8")
function velocidad (){
    this.peso/this.motor;
}