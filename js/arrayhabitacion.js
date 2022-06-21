const habitaciones = []

// uso de objetivos - producto habitaciones

class Habitacion {
    constructor(nombreCuarto, cantidadCama, capacidad, stock, precioCuarto) {
        this.nombreCuarto = nombreCuarto;
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

// creacion de las habitaciones

function  generadorAutomatico() {
    habitaciones.push (new Habitacion("Standard Doble", 1, 2, 5, 1000))
    habitaciones.push (new Habitacion("Standard Doble", 1, 2, 5, 1000))
    habitaciones.push (new Habitacion("Standard simple", 2, 2, 5, 1300))
    habitaciones.push (new Habitacion("Standard simple", 2, 2, 5, 1300))
    habitaciones.push (new Habitacion("Standard simple", 3, 3, 4, 1350))
    habitaciones.push (new Habitacion("Standard simple", 3, 3, 4, 1350))
    habitaciones.push (new Habitacion("Standard simple", 3, 3, 4, 1350))
}

generadorAutomatico()

// tabla de habitaciones - forEach

function listarHabitaciones() {
    habitaciones.forEach( (habitacion)=> {
        console.table(habitacion)
    });
}

listarHabitaciones();

//uso de filter para buscar habitacion por cantidad de integrantes

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

//uso de map

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
    alert("El desayuno fue incluido a tu reserva")
}
