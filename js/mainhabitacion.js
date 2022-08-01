//Etapa habitacion
const habitaciones = []

const selectHabitacion = document.querySelector(`#selecttipoHabitacion`)
const cantidadNoches = document.querySelector(`#selectCandidadNoches`)

const btnCotizar = document.querySelector(`#btnCotizar`)
const btnReservar = document.querySelector(`#btnReservar`)
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
    habitaciones.push (new Habitacion("Master - 3 camas matrimoniales", 3, 6, 5, 1800))
    habitaciones.push (new Habitacion("Superior - cama individual", 1, 1, 5, 1300))
    habitaciones.push (new Habitacion("Superior - cama matrimonial", 1, 2, 5, 1300))
    habitaciones.push (new Habitacion("Superior - 2 camas individuales", 2, 2, 5, 1300))
    habitaciones.push (new Habitacion("Superior - 2 camas matrimoniales", 2, 4, 4, 1600))
    habitaciones.push (new Habitacion("Superior - 1 cama matrimonial y individual", 3, 3, 5, 1550))
    habitaciones.push (new Habitacion("Superior - 3 camas individuales", 3, 3, 3, 1550))
    habitaciones.push (new Habitacion("Inferior - cama individual", 1, 1, 5, 1300))
    habitaciones.push (new Habitacion("Inferior - cama matrimonial", 1, 2, 5, 1200))
    habitaciones.push (new Habitacion("Inferior - 2 camas individuales", 2, 2, 5, 1200))
    habitaciones.push (new Habitacion("Inferior - 2 camas matrimoniales", 2, 4, 3, 1500))
    habitaciones.push (new Habitacion("Inferior - 1 cama matrimonial y individual", 3, 3, 3, 1450))
    habitaciones.push (new Habitacion("Inferior - 3 camas individuales", 3, 3, 3, 1450))
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
    habitaciones.length > 0 && localStorage.setItem("habitaciones", JSON.stringify(habitaciones))
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

//COTIZACION DE HOSPEDAJE

//guardar datos de reserva
function guardarDatosHospedaje() {
    const datosHospedaje = {
        precioHabitacion: selectHabitacion.value,
        cantidadNoches : cantidadNoches.value,
    }
    let string = JSON.stringify(datosHospedaje)
    localStorage.setItem("datosHospedaje", string)
}

//creacion de cotizacion de reserva
class CotizadorHospedaje {
    constructor(jsonHabitacion, jsonCantidadNoches) {
        this.arrayHabitaciones = jsonHabitacion
        this.arrayCantidadDeNoches = jsonCantidadNoches
    }
    valorHospedaje(habitacionElejidos, nochesTotales) {
        let precioFinalHospedaje = (parseInt(habitacionElejidos) * parseInt(nochesTotales)) 
            return precioFinalHospedaje || "NaN"
    }
}

const CotizadorHabitacion = []
const cotizador = new CotizadorHospedaje(habitaciones, cantidadNoches)

//cotizacion de la hospedaje
btnCotizar.addEventListener("click", ()=> cotizarHospedaje() )

const faltanDatos = ()=> {
    return (isNaN(parseInt(cantidadNoches.value)) || selectHabitacion.value.trim() == "")
}
const calcularHospedaje = ()=> {
    let habitacionElejidos =parseInt(selectHabitacion.value)
    let nochesTotales = cantidadNoches.value
    let valorDeHospedaje = cotizador.valorHospedaje(habitacionElejidos, nochesTotales)
            valorTotal.innerText = `$ ${valorDeHospedaje.toFixed(2)}`
}
const cotizarHospedaje = ()=> {
    faltanDatos() ? swalDatos("Complete todos los datos solicitados.") : calcularHospedaje()
}
const swalDatos = (mensaje)=> {
    swal.fire ({
        title: 'Error',
        text: mensaje,
        icon: 'error',
        confirmButtonText: 'ok',
    })
}

//realizacion de reserva
btnReservar.addEventListener("click", ()=> reserva() )

reserva = ()=> {
    faltanDatos() ? swalDatos("No pudimos realizar la reserva. Complete todos los datos antes de reservar") : swalreserva()
}
const swalreserva = ()=> {
    swal.fire ({
        title: 'Reserva exitosa',
        text: "Su reserva fue realizada exitosamente!",
        icon: 'sucess',
        confirmButtonText: 'ok',
    })
}