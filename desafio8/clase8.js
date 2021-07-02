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
        var cantP = parseInt(prompt('Cuantos productos hay en stock?'));
        arrayChupi.push(new Chupi(nameP, priceP, cantP));

    }
}

while (check != 'Fin' || check != 'FIN' || check != 'fin')
console.log(arrayChupi);

for (var producto of arrayChupi) {
    let contenedor = document.createElement('div');
    contenedor.innerHTML = `<h3>El producto ingresado es: ${producto.name} </h3> <p>La cantidad en stock es: ${producto.cant} </p><p>El precio final del producto es: ${producto.sumariva()} </p><p>El precio final que vas a pagar por este producto es: ${producto.sumariva() * producto.cant}</p>`;
    document.body.appendChild(contenedor);
};