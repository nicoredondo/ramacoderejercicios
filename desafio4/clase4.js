var deporte = prompt(`Se que te gustan los deportes. Cual es el deporte que más disfrutas?`);
document.write(`<h4>El deporte que más te gusta es ${deporte}.</h4>`);
var precio = parseFloat(prompt(`Cuanto gastas cada vez que jugas?`));
document.write(`<h5>Cada vez que jugas gastas ${precio} pesos</h5>`);
var cantidadMensual = parseInt(prompt(`Contame cuantas veces al mes jugas?`));

function presupuestoAnual(precio, cantidadMensual) {
    return precio * cantidadMensual * 12;
};
document.write(`</h5>En total gastas ${presupuestoAnual(precio, cantidadMensual)} pesos al año en ${deporte}</h5>`);