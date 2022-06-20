// debugger

// uso del if-else

let nombreIngresado = prompt("Ingresar nombre=");
let apellidoIngresado = prompt("Ingresar apellido");
let username = prompt("Ingrese su nombre de usuario:");
let password = prompt("Ingrese su password:");
let fingerPrint = true;

if ((nombreIngresado != "") && (apellidoIngresado != "") || (fingerPrint = true)) {
    alert("Bienvenido " +nombreIngresado +apellidoIngresado);
}else {
    console.error ("Error: Nombre y apellido no registrado")
}

//uso del switch e if-else

let cantidadPersonas = parseInt(prompt("Ingrese cantidad de personas que se van a hospedar:"))

switch (cantidadPersonas) {
    case 1:
        alert("Hotel reservado para una persona. Total $1000 la noche")
        break;
    case 2:
        let cama = parseInt(prompt("Desea tener cama casal(1) o cama separadas(2)?"));
        if (cama == 1 ) {
            confirm("Hotel resevado para 2 personas con cama casal. Total $1300 la noche")
        }else if(cama == 2) {
            confirm("Hotel resevado para 2 personas con cama separadas. Total $1300 la noche")
        }else {
            alert("No se ha reservado un cuarto.")
        }
        break;
    case 3:
        let cantidadCama = parseInt(prompt("Deseas tener una cama matrimonial y una cama(1) o tres camas separadas(2)?"));
        if (cantidadCama == 1 ) {
            confirm("Hotel resevado para 2 personas con una cama casal y una cama separada. Total $1500 la noche")
        }else if(cama == 2) {
            confirm("Hotel resevado para 3 personas con camas separadas. Total $1300 la noche")
        }else {
            alert("No se ha reservado un cuarto.")
        }
        break;
    default:
        alert("No se puede reservar con esta cantidad de personas.")
        break;
}

//ciclo de cantidad de personas

let limite = cantidadPersonas

for (let i = 1; i <= cantidadPersonas; i++) {
    console.log("Persona numero" +i);
}

// uso de funciones

let cantidadNoches = prompt("ingresar la cantidad de noches que desea quedarse:");
let precioCuarto = 1300;

calculoTotal(cantidadNoches,precioCuarto);

function calculoTotal (cantidadNoches, precioCuarto) {
    let resultado = parseInt(cantidadNoches) * parseInt(precioCuarto)
    alert ("Total de la reserva: $"+ resultado)
}

function calculoRealizado(cantidadNoches, precioCuarto) {
    return parseFloat(cantidadNoches) * parseFloat(precioCuarto)
}

// uso de objetivos
debugger
class Habitaciones {
    constructor( nombreCuarto, cantidadCama, capacidad, stock, precioCuarto) {
        this.nombreCuarto = nombreCuarto.toUpperCase;
        this.cantidadCama = cantidadCama;
        this.capacidad = capacidad;
        this.stock = stock;
        this.precioCuarto = precioCuarto;
    }
    precioTotal() {
        let precioFinal = this.precioCuarto * this.cantidadNoches;
        return precioFinal.toFixed(2);
    };
    descontarStock(cantidadReservadas) {
        this.stock -= cantidadReservadas
    }
}

const habitacion1 = new Habitaciones("Standard Doble", 1, 2, 5, 1000);
const habitacion2 = new Habitaciones("Standard Doble", 1, 2, 5, 1000);
const habitacion3 = new Habitaciones("Standard simple", 2, 2, 5, 1300);
const habitacion4 = new Habitaciones("Standard simple", 2, 2, 5, 1300);
const habitacion5 = new Habitaciones("Standard simple", 3, 3, 4, 1350);
const habitacion6 = new Habitaciones("Standard simple", 3, 3, 4, 1350);
const habitacion7 = new Habitaciones("Standard simple", 3, 3, 4, 1350);

const habitaciones = [habitacion1, habitacion2, habitacion3, habitacion4, habitacion5,habitacion6, habitacion7] 

// uso de array

const Integrantes = []

agregarIntegrante();

function agregarIntegrante () {
    let nombreIntegranteAagregar = prompt("Ingrese el nombre del integrante que desea agregar:")
    let apellidoIntegranteAagregar = prompt("Ingrese el apelido del integrante que desea agregar:")
    let resultado = Integrantes.push ({nombre: nombreIntegranteAagregar, apellido: apellidoIntegranteAagregar})
    alert ("se ha agregado el integrante: " + resultado)
}

//uso de for....of
listarIntegrantes();

function listarIntegrantes() {
    for (let integrante of Integrantes) {
        console.table(Integrantes)
    }
}

//uso de forEach
listarHabitaciones();

function listarHabitaciones() {
    habitaciones.forEach( (habitacion)=> {
        console.table(habitacion)
    });
}

//uso de filter
buscarHabitacion();

function buscarHabitacion() {
    let buscar = prompt ("ingrese la cantidad de integrantes que se van a hospedar")
    let resultado = habitaciones.filter ((habitacion)=> habitacion.capacidad ===parseInt(buscar))
    if (resultado !== undefined) {
        console.clear()
        console.table(resultado)
    } else {
        alert( "No tenemos una habitacion para esa cantidad de huespedes") 
    }
}

//uso de find
encontrarHabitacion();

function encontrarHabitacion() {
    let buscar = prompt ("ingrese el tipo de habitacion(simple o doble)").toUpperCase()
    let resultado = habitaciones.find ((habitacion)=> habitacion.nombreCuarto(buscar))
    if (resultado !== undefined) {
        console.clear()
        console.table(resultado)
    } else {
        alert( "No tenemos una habitacion con ese nombre") 
    }
}

//uso de map
incluirDesayuno();

function incluirDesayuno() {
    let habitacionConDesayuno = habitaciones.map((habitacion)=> {
        return {
            nombreCuarto: habitacion.nombreCuarto ,
            cantidadCama: habitacion.cantidadCama,
            tipoColchon: habitacion.tipoColchon,
            capacidad: habitacion.capacidad,
            stock: habitacion.stock,
            precioCuarto: (habitacion.precioCuarto + 100),
        }
    })
    console.table(habitacionConDesayuno)
}
