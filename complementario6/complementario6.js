var nombreApellido = prompt('Ingresa tu nombre y apellido por favor.');
var edad = parseInt(prompt('Por favor ingresa tu edad.'));
var bMayor = edad > 17;
if (bMayor) {
    alert('Sos mayor de edad, podes seguir navegando')
    class Chupi {
        constructor(nombre, precio, cantidad, disponible) {
            this.name = nombre;
            this.price = precio;
            this.cant = cantidad;
            this.available = true;
        }
        sumariva() {
            return this.price * 1.21;
        }

        leer() {
            console.log('La bebida es ' + (this.name) + '. Te va a costar ' + (sumariva) + ' pesos.');
        }
    }

    var arrayChupi = [];
    do {
        var check = prompt('Ingresa el nombre del producto o la palabra fin para terminar de agregar.');
        if (check === 'Fin' || check === 'fin' || check === 'FIN') {
            break;
        } else {
            nameP = check
            var priceP = parseFloat(prompt('Cuantos pesos cuesta ese producto?'));
            var cantP = parseInt(prompt('Cuantos productos queres?'));
            arrayChupi.push(new Chupi(nameP, priceP, cantP));

        }
    }

    while (check != 'Fin' || check != 'FIN' || check != 'fin')
    console.log(arrayChupi);

    for (var producto of arrayChupi) {
        document.write('<h3>El producto ingresado es:' + producto.name + '</h3>')
        document.write('<h3>La cantidad en stock es: ' + producto.cant + '</h3>')
        document.write('<h3>El precio final del producto es: ' + producto.sumariva() + '</h3>')
        document.write('<h3>El precio final que vas a pagar por este producto es: ' + producto.sumariva() * cantP + '</h3>')
    }
    var orderByPrice = [];
    orderByPrice = arrayChupi.map(elemento => elemento);
    var orderByPrice = arrayChupi;
    orderByPrice.sort(function(a, b) {
        return a.price - b.price;
    });
    console.log('Ordenados de forma ascendente.');
    console.log(orderByPrice);
    document.write('<h3>Lista de productos ordenados de forma ascendente.</h3>')
    for (var producto of orderByPrice) {
        document.write('<ul><li></li><h3>Nombre:' + producto.name + '</li></h3>')
        document.write('<li></li><h3>Precio:' + producto.price + '</li></ul></h3>')
    }





} else {
    alert('Sos menor de edad, no podes seguir navegando');
};