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
    adicionales.push (new Adicional("Desayuno buffet", 100))
    adicionales.push (new Adicional("Almuerzo buffet", 1000))
    adicionales.push (new Adicional("Cena buffet", 1000))
    adicionales.push (new Adicional("Masaje relajante de 30min", 500))
    adicionales.push (new Adicional("Masaje relajante de 1h", 1000))
    adicionales.push (new Adicional("Tratamiento facial limpieza", 400))
    adicionales.push (new Adicional("Tratamiento facial completo", 900))
    adicionales.push (new Adicional("Paquete masaje relajante de 30min", 500))
}
generadorAutomatico()

// cargar los adicionales selecionados
function cargarAdicionales() {
    listaAdicionales.innerHTML = ""
    for (const adicional of adicionales) {
        const li = document.createElement("li")
              li.className = "collection-item blue-text"
              li.innerText = adicional.nombreAdicional
              li.id = "ad:" + adicional.nombreAdicional
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
              li.id = ad
              li.addEventListener("click", ()=> { removerAdicional(`${li.id}`) }) 
              selecionAdicionales.append(li)
    }
}

function removerAdicional(adicional) {
    const adicionalRemover = document.getElementById(`${adicional}`)
          adicionalRemover.remove()
          tostifyAviso(`${adicional} ha sido eliminado del carrito.`)
}

const tostifyAviso = (mensaje)=> {
    Toastify({
        text: mensaje,
        duration: 3000,
        }).showToast();
}