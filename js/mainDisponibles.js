const contenidocontenidoDisponibleDOM = document.querySelector("#contenidoDisponible")
const cargandoDOM = document.querySelector("#cargando")

const URL = `js/habitacionesDisponibles.json`

document.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(() => {
        habitacionesDisponibles(URL)      
    }, 2000);
 })

const contendioHabitaciones = (contenidoDisponible)=> {
    const {imagen, nombreCuarto, cantidadCama} = contenidoDisponible
    return `<div class="col-4 card" style="width: 18rem;">
    <img src="${imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${nombreCuarto}</h5>
      <p class="card-text">${cantidadCama}</p>
    </div>
  </div>`
}

const errorCargaHabitaciones = ()=> {
    return `<div class="center white-text"> 
    <h4>No quedaron habitaciones disponibles. Intente nuevamente en otro momento.</h4> 
    </div>`
}

const habitacionesDisponibles = (URL)=> {
    let habitacionMostrada = ""
    fetch(URL)
    .then((response)=> response.json())
    .then((data)=> {
        for (contenidoDisponible of data) {
            habitacionMostrada += contendioHabitaciones(contenidoDisponible)
        }
        contenidocontenidoDisponibleDOM.innerHTML = habitacionMostrada
    })
    .catch((error)=> contenidocontenidoDisponibleDOM.innerHTML = errorCargaHabitaciones() )
    .finally(()=> cargandoDOM.innerHTML = "")
}