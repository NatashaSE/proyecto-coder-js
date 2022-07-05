//adicionales
const adicionales = []
const carritoAdicionales = []

const listaAdicionales = document.getElementById("listaAdicionales")
const selecionAdicionales = document.getElementById("selecionAdicionales")

//creacion de las habitaciones
class Adicional {
    constructor(nombreAdicional, precioAdicional) {
        this.nombreAdicional = nombreAdicional;
        this.precioAdicional = precioAdicional;
    }
}

function  generadorAutomatico() {
    adicionales.push (new Adicional("Desayuno incluido", 100))
    adicionales.push (new Adicional("Paquete de spa por persona", 500))
}
generadorAutomatico()

// cargar los adicionales selecionados
function cargarAdicionales() {
    listaAdicionales.innerHTML = ""
    for (const adicional of adicionales) {
        const li = document.createElement("li")
              li.className = "collection-item blue-text"
              li.innerText = adicional.nombreAdicional
              li.id = "Adicional:" + adicional.nombreAdicional
              li.addEventListener("click", ()=> { agregarAdicional(`${li.innerText}`) } )
              listaAdicionales.append(li)
    }
}
cargarAdicionales()

//agregar adicional seleccionado
function agregarAdicional(ad) {
    if (ad.trim() !== "") {
        carritoAdicionales.push(ad)
        const li = document.createElement("li")
              li.className = "collection-item"
              li.innerText = ad
              li.id = "adicional:" + ad
              li.addEventListener("click", ()=> { removerAdicional(`${li.id}`) }) 
              selecionAdicionales.append(li)
    }
}

function removerAdicional(adicional) {
    const adicionalRemover = document.getElementById(`${adicional}`)
          adicionalRemover.remove()
          console.warn(`${adicional} ha sido eliminado del carrito.`)
}