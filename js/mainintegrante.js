//Etapa integrantes
const integrantes = []

//Creacion de los integrantes
class Integrante {
    constructor( nombreIntegrante, apellidoIntegrante, dniIntegrante, edadIntegrante) {
        this.nombreIntegrante = nombreIntegrante;
        this.apellidoIntegrante = apellidoIntegrante;
        this.dniIntegrante = dniIntegrante;
        this.edadIntegrante = edadIntegrante;
    }
}

//Tabla de todos los integrantes
function listarIntegrantestabla() {
    integrantes.forEach( (integrante)=> {
        console.table(integrante)
    });
}

// Creacion y agregacion de cada integrante
const inputnombre = document.querySelector(`#nombreintegrante`)
const inputapellido = document.querySelector(`#apellidointegrante`)
const inputdni = document.querySelector(`#dniintegrante`)
const inputedad = document.querySelector(`#edadintegrante`)
const btnSubmit = document.querySelector(`#submit`)

document.addEventListener("submit", (e)=> {
    e.preventDefault()
    integrantes.push (new Integrante( inputnombre.value, inputapellido.value, inputdni.value, inputedad.value));
    listarIntegrantes();
    guardarDatosIntegrantes();
})

// evento focus y blur en formulario
const focusCampus = ()=> {
    const campos = document.querySelectorAll("input")
    for (let campo of campos) {
        if (campo.type != "submit") {
            campo.addEventListener("focus", ()=> campo.className = "fondo-inputs")
            campo.addEventListener("blur", ()=> campo.className = "")
        }
    }
}

// DOM - listar los integrantes agregados
function listarIntegrantes() {
    const tablaIntegrante = document.querySelector("tbody")
          tablaIntegrante.innerHTML = ""
          integrantes.forEach( (integrante)=> {
            const fila = `<tr>
                              <td>${integrante.nombreIntegrante}</td>
                              <td>${integrante.apellidoIntegrante}</td>
                              <td>${integrante.dniIntegrante}</td>
                              <td>${integrante.edadIntegrante}</td>
                          </tr>`
            tablaIntegrante.innerHTML += fila
          });
}

//guardado los datos
datosIntegrante = JSON.parse(localStorage.getItem("datosIntegrante")) || []

function guardarDatosIntegrantes () {
    const datosIntegrante = {
        nombre: inputnombre.value,
        apellido: inputapellido.value,
        dni: inputdni.value,
        edad:  inputedad.value
    }
    let string = JSON.stringify(datosIntegrante)
    sessionStorage.setItem("datosIntegrante", string)
}