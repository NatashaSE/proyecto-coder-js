//Etapa habitacion
const habitaciones = []

const selectHabitacion = document.querySelector(`#selecttipoHabitacion`)
const cantidadNoches = document.querySelector(`#selectCandidadNoches`)

const btnCotizar = document.querySelector(`#btnCotizar`)
const valorTotal = document.querySelector(`#valorTotal`)

//objetivos - creacion de las habitaciones
class Habitacion {
    constructor(nombreCuarto, cantidadCama, capacidad, stock, precioCuarto) {
        this.nombreCuarto = nombreCuarto;
        this.cantidadCama = cantidadCama;
        this.capacidad = capacidad;
        this.stock = stock;
        this.precioCuarto = precioCuarto;
    }
}

function  generadorAutomatico() {
    habitaciones.push (new Habitacion("Standard Doble - cama matrimonial", 1, 2, 5, 1000))
    habitaciones.push (new Habitacion("Standard Doble - cama individuales", 1, 2, 5, 1000))
    habitaciones.push (new Habitacion("Standard simple - cama matrimonial", 2, 2, 5, 1300))
    habitaciones.push (new Habitacion("Standard simple - 2 cama individuales", 2, 2, 5, 1300))
    habitaciones.push (new Habitacion("Standard simple - cama matrimonial y cama individual", 3, 3, 4, 1350))
    habitaciones.push (new Habitacion("Standard simple - 2 cama matrimonial", 3, 3, 4, 1350))
    habitaciones.push (new Habitacion("Standard simple - 3 cama individuales", 3, 3, 4, 1350))
}
generadorAutomatico()

// tabla de habitaciones
function listarHabitaciones() {
    habitaciones.forEach( (habitacion)=> {
        console.table(habitacion)
        guardarHabitaciones()
    });
}
listarHabitaciones();

//guardado de habitaciones
function guardarHabitaciones () {
    if (habitaciones.length > 0)
    localStorage.setItem("habitaciones", JSON.stringify(habitaciones))
}

//Carga selecion de habitaciones
const cargaHabitaciones = ()=> {
    let optionhabitaciones
    habitaciones.forEach(element => {
          optionhabitaciones += `<option value="${element.precioCuarto}">${element.nombreCuarto}</option>`
        });
        return optionhabitaciones
}
selecttipoHabitacion.innerHTML = cargaHabitaciones()

//cotizacion de hospedaje

//guardar datos de reserva
function guardarDatosHospedaje() {
    const datosHospedaje = {
        precioHabitacion: selectHabitacion.value,
        cantidadNoches : cantidadNoches.value,
    }
    let string = JSON.stringify(datosHospedaje)
    localStorage.setItem("datosHospedaje", string)
}