const adicionales = ['Desayuno incluido', 'Vista hacia la montaña', 'Paquete de spa']
const carritoAdicionales = []

const listaAdicionales = document.getElementById("listaAdicionales")
const selecionAdicionales = document.getElementById("selecionAdicionales")

// cargar los adicionales selecionados

function cargarAdicionales() {
    listaAdicionales.innerHTML = ""
    for (const adicional of adicionales) {
        const li = document.createElement("li")
              li.className = "collection-item blue-text"
              li.innerText = adicional
              li.id = "Adicional:" + adicional
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
              li.addEventListener("dblclick", ()=> { removerAdicional(`${li.id}`) }) 
              selecionAdicionales.append(li)
    }
}

function removerAdicional(adicional) {
    const adicionalRemover = document.getElementById(`${adicional}`)
          adicionalRemover.remove()
          console.warn(`${adicional} ha sido eliminado del carrito.`)
}