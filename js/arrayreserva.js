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

function agregarIntegrante () {
    let nombreIntegrante = prompt("Ingrese el nombre del integrante:")
    let apellidoIntegrante = prompt("Ingrese el apelido del integrante:")
    let dniIntegrante = prompt("Ingrese el DNI del integrante")
    let edadIntegrante = prompt("Ingrese la edad del integrante")
    integrantes.push (new Integrante( nombreIntegrante, apellidoIntegrante, dniIntegrante, edadIntegrante));
    listarIntegrantes();
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