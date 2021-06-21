const multiplicar = (a, b) => a * b;
const resta = (a, b) => a - b;
const descuento = (a, b) => multiplicar(a, b) / 100;

let precioProducto = parseInt(prompt(`Ingresá el precio del producto`));
console.log(`El precio es ${precioProducto}`);
let cantidadProducto = parseInt(prompt(`Ingresá la cantidad de productos que queres`));
console.log(`La cantidad de productos son ${cantidadProducto}`);
let descuentoTotal = 20;

let precioTotal = resta(multiplicar(precioProducto, cantidadProducto), multiplicar(descuento(precioProducto, descuentoTotal), cantidadProducto));;
let ahorro = precioProducto * cantidadProducto - precioTotal
document.write(`<h3>Tuviste un descuento del ${descuentoTotal}%. En total te ahorraste ${ahorro}. Vas a pagar ${precioTotal} pesos.</h3>`);