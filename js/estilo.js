debugger

// uso del if-else

let nombreIngresado = prompt("Ingresar nombre=");
let apellidoIngresado = prompt("Ingresar apellido");
let username = prompt("Ingrese su nombre de usuario:");
let password = prompt("Ingrese su password:");
let fingerPrint = true;

if ((nombreIngresado != "") && (apellidoIngresado != "") || (fingerPrint = true)) {
    alert("Bienvenido " +nombreIngresado +apellidoIngresado);
}else {
    console.error ("Error: Nombre y apellido no registrado")
}

//uso del switch e if-else

let cantidadPersonas = parseInt(prompt("Ingrese cantidad de personas que se van a hospedar:"))

switch (cantidadPersonas) {
    case 1:
        alert("Hotel reservado para una persona")
        break;
    case 2:
        let cama = parseInt(prompt("Desea tener cama casal(1) o cama separadas(2)?"));
        if (cama == 1 ) {
            alert("Hotel resevado para 2 personas con cama casal")
        }else if(cama == 2) {
            alert("Hotel resevado para 2 personas con cama separadas")
        }else {
            alert("No se ha reservado un cuarto.")
        }
        break;
    case 3:
        let cantidadCama = parseInt(prompt("Deseas tener una cama matrimonial y una cama(1) o tres camas separadas(2)?"));
        if (cantidadCama == 1 ) {
            alert("Hotel resevado para 2 personas con una cama casal y una cama separada")
        }else if(cama == 2) {
            alert("Hotel resevado para 3 personas con camas separadas")
        }else {
            alert("No se ha reservado un cuarto.")
        }
        break;
    default:
        alert("No se puede reservar con esta cantidad de personas")
        break;
}

//ciclo de cantidad de personas

let limite = cantidadPersonas

for (let i = 1; i <= cantidadPersonas; i++) {
    console.log("Persona numero" +i);
}

