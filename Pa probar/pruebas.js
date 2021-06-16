var nombreApellido = prompt('Ingresa tu nombre y apellido por favor.');
alert(`Hola ${nombreApellido}. Vamos a calcular cuantos días de vida tenes.`);
var edad = parseInt(prompt('Por favor ingresa tu edad.'));
var dias = edad * 365;
var horas = dias * 24;
var minutos = horas * 60;
var segundos = minutos * 60;
alert(`En total tenes ${dias} dias de vida`);
var bMayor = edad > 17;
if (bMayor) {
    alert('Sos mayor de edad, podes seguir navegando');
} else {
    alert('Sos menor de edad, no podes seguir navegando');
};
while (bMayor) {
    alert(`En total tenes ${horas} horas de vida`);
    alert(`En total tenes ${minutos} minutos de vida`);
    alert(`En total tenes ${segundos} segundos de vida`);
    alert(`Que viejo que sos ${nombreApellido}. Yo que vos me empiezo a cuidar!`)
    break;
};

//String interpolation
//alert(`En total tenes ${dias} dias de vida`)//