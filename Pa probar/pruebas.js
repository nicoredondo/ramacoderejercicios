var nombreApellido = prompt('Ingresa tu nombre y apellido')
alert('Hola ' + nombreApellido + '. Vamos a calcular cuantos días de vida tenes')
var edad = prompt('Por favor ingresa tu edad')
parseInt(edad)
var dias = edad * 365
alert('En total tenes ' + dias + ' dias de vida')
if (edad > 17) {
    alert('Sos mayor de edad, podes seguir navegando')
} else {
    alert('Sos menor de edad, no podes seguir navegando')
}

//String interpolation
//alert(`En total tenes ${dias} dias de vida`)//