const fechaInicial = document.querySelector("#fechaInicial")
const fechaFinal = document.querySelector("#fechaFinal")

const diferenciaFechas = (fi, ff)=> {
    const date1 = luxon.DateTime.fromISO(fi)
    const date2 = luxon.DateTime.fromISO(ff)
    const diff = date1.diff(date2, ["years", "months", "days", "hours"])
    console.log(diff.toObject())
}

diferenciaFechas(fechaInicial.value, fechaFinal.value)