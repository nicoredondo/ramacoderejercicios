var nombreApellido = prompt('Ingresa tu nombre y apellido por favor.');
var edad = parseInt(prompt('Por favor ingresa tu edad.'));
var bMayor = edad > 17;
if (bMayor) {
    alert('Sos mayor de edad, podes seguir navegando')
    class Chupi {
        constructor(cual, cc, precio) {
            this.wich = cual;
            this.size = cc;
            this.price = precio;

        }
        leer() {
            console.log('La bebida es ' + (this.wich) + '. Tiene ' + (this.size) + ' cc. Te va a costar ' + (this.price) + ' pesos.');
        }
    }
    let bebida1 = new Chupi('Fernet', 500, 580);
    bebida1.leer();
    let bebida2 = new Chupi('Vodka', 1000, 2500);
    bebida2.leer();
} else {
    alert('Sos menor de edad, no podes seguir navegando');
};