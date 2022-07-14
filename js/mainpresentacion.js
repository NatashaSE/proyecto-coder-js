const contenidoDOM = document.querySelector("#contenido")

const URL = `js/habitaciones.json`

document.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(() => {
        habitacionesDisponibles(URL)      
    }, 2000);
 })

const contendioHabitaciones = (contenido)=> {
    const {imagen, nombreCuarto, cantidadCama} = contenido
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
        for (contenido of data) {
            habitacionMostrada += contendioHabitaciones(contenido)
        }
        contenidoDOM.innerHTML = habitacionMostrada
    })
    .catch((error)=> contenidoDOM.innerHTML = errorCargaHabitaciones() )
}