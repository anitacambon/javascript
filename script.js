let competidores = [
    { nombre: "Diaz, Nicolas", edad: "48", faixa: "negro", categoria: "medio pesado", medallas: 1 },
    { nombre: "Gomez, Julian", edad: "37", faixa: "negro", categoria: "pesado", medallas: 3 },
    { nombre: "Cambon, Ana", edad: 32, faixa: "blanco", categoria: "pena", medallas: 1 },
    { nombre: "Rodriguez, Julieta", edad: 22, faixa: "violeta", categoria: "leve", medallas: 2 },
    { nombre: "Roca, Leandro", edad: 24, faixa: "marron", categoria: "pena", medallas: 0 },
    { nombre: "Fernandez, Matias", edad: 47, faixa: "blanco", categoria: "medio pesado", medallas: 3 },
    { nombre: "Correa, Marcela", edad: 26, faixa: "marron", categoria: "pena", medallas: 1 },
    { nombre: "Acosta, Jimena", edad: 31, faixa: "azul", categoria: "leve", medallas: 2 },
    { nombre: "Lopez, Mario", edad: 44, faixa: "azul", categoria: "pesado", medallas: 4 },
    { nombre: "Martinez, Gonzalo", edad: 40, faixa: "marron", categoria: "pena", medallas: 1 }
]

let mensaje = "Seleccione una opción:\n1 - Listado de competidores\n2 - Filtrar por faixa\n3 - Ordenar por edad menor a mayor\n4 - Buscar cuantás medallas ganó un competidor\n5 - Total de medallas ganadas\n0 - SALIR"

let opcion

do {
    opcion = Number(prompt(mensaje))
    if (opcion === 1) {
        listar(competidores)
    } else if (opcion === 2) {
        let faixa = prompt("Elegir faixa: blanco, azul, violeta, marron, negro")
        let competidoresFiltrados = competidores.filter(competidor => competidor.faixa === faixa)
        alert(listar(competidoresFiltrados))
    } else if (opcion === 3) {
        /* ordenar(competidores)*/
    } else if (opcion === 4) {
        /* let cantidad = prompt("Ingrese un número de 0 a 4 inclusive")
        let medallasSeleccionadas = competidores.find(competidor => competidor.medallas === cantidad)
        alert(medallasSeleccionadas)*/
    } else if (opcion === 5) {
    }
} while (opcion !== 6) {
    alert("Gracias por su consulta")
}


function listar(arrayAListar) {
    let listado = " "
    arrayAListar.forEach(element => {
        listado = listado + element.nombre + "\n"
    })
    alert(listado)
}

/* 
function ordenar(arrayAOrdenar) {
    return arrayAOrdenar.sort((a, b) => {
        if (a.edad < b.edad) {
            return -1
        }
        if (a.edad > b.edad) {
            return 1
        }
        return 0
    })
}

function sumar(arrayTotalMedallas) {

}
*/


