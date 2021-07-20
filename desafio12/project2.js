class Chupi {
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}
let arrayChupi = [];
let miFormulario = document.querySelector("#formulario");
let miBebida = document.querySelector("#pickDrink");
let miCantidad = document.querySelector("#quantityDrink");
let bebidaIngresada = formulario.children[1].value;
let cantidadIngresada = formulario.children[3].value;
let contenedor = document.querySelector("#bebidaIngresada");
let mostrarTodas = document.querySelector("#mostrarTodas");
let parrafos = mostrarTodas.getElementsByTagName("p");
let bandera = false;

miFormulario.addEventListener("submit", agregarBebidas);
btnMostrar.addEventListener("click", MostrarTodasBebidas);

miBebida.focus();

function validarForm() {
    bebidaIngresada = formulario.children[1].value;
    cantidadIngresada = formulario.children[3].value;
    console.log(bebidaIngresada);
    console.log(cantidadIngresada);
    if (miBebida == "" || miCantidad == "") {
        alert("Debes ingresar todos los campos");
        miBebida.focus();
        bandera = false;
    } else {
        bandera = true;
    }
}

function agregarBebidas(e) {
    e.preventDefault();
    validarForm();
    if (bandera == true) {
        let opcion = confirm("Está seguro de agregar la bebida?");
        if (opcion == true) {
            let formulario = e.target
            arrayChupi.push(new Chupi(bebidaIngresada, cantidadIngresada));
        } else {
            alert("No se agregará la bebida");
        }
        formulario.children[1].value = "";
        formulario.children[3].value = "";
        contenedor.innerHTML = "";
        AgregarAlDom();
        miBebida.focus();
    } else {
        miBebida.focus();
    }
}

function AgregarAlDom() {
    contenedor.innerHTML = `<h3>Ultima bebida ingresada:</h3><p>Bebida: ${bebidaIngresada}</p><p>Cantidad: ${cantidadIngresada}</p>`;
}

function MostrarTodasBebidas(e) {
    e.preventDefault();
    let i = 0;
    mostrarTodas.innerHTML = `<h3>Listado de todas las bebidas</h3>`;
    for (const chupi of arrayChupi) {
        mostrarTodas.innerHTML += `<p>Bebida: ${chupi.nombre}</p><p>Cantidad: ${chupi.cantidad}</p>`;

    }
}