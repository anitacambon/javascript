let competidores = [
    { nombre: "Diaz, Nicolas", edad: "48 - Master 3", faixa: "negro", categoria: "medio pesado", medallas: "1" },
    { nombre: "Gomez, Julian", edad: "37 - Master 2", faixa: "negro", categoria: "pesado", medallas: "3" },
    { nombre: "Cambon, Ana", edad: "32 - Master 1", faixa: "blanco", categoria: "pena", medallas: "1" },
    { nombre: "Rodriguez, Julieta", edad: "Adulto 1", faixa: "violeta", categoria: "leve", medallas: "2" },
    { nombre: "Roca, Leandro", edad: "Adulto 1", faixa: "marron", categoria: "pena", medallas: "0" },
    { nombre: "Fernandez, Matias", edad: "Master 4", faixa: "blanco", categoria: "medio pesado", medallas: "3" },
    { nombre: "Correa, Marcela", edad: "Adulto 2", faixa: "marron", categoria: "pena", medallas: "1" },
    { nombre: "Acosta, Jimena", edad: "Master 1", faixa: "azul", categoria: "leve", medallas: "2" },
    { nombre: "Lopez, Mario", edad: "Master 3", faixa: "azul", categoria: "pesado", medallas: "4" },
    { nombre: "Martinez, Gonzalo", edad: "Master 2", faixa: "marron", categoria: "pena", medallas: "1" }
]

let mensaje = "Seleccione una opción:\n1 - Listado de competidores\n2 - Filtrar por faixa\n3 - Ordenar por edad\n4 - Buscar por palabra clave\n5 - Total de medallas ganadas\n0 - SALIR"

let opcion

do {
    opcion = Number(prompt(mensaje))
    if (opcion === 1) {
        listar(competidores)
    } if (opcion === 2) {
        let faixa = prompt("Elegir categoria: blanco, azul, violeta, marron, negro")
        let competidoresFiltrados = competidores.filter(competidor => competidor.faixa === faixa)
        alert(listar(competidoresFiltrados))
    } if (opcion === 3) {

    } if (opcion === 4) {
        let palabraClave = prompt("Ingrese palabra clave")
        let competidoresBuscados = competidores.find(competidor => competidor.nombre || competidor.edad || competidor.faixa || competidor.categoria === palabraClave)
        alert(listar(competidoresBuscados))
    }
} while (opcion !== 0)

function listar(arrayAListar) {
    let listado = " "
    arrayAListar.forEach(element => {
        listado = listado + element.nombre + "\n"
    })
    alert(listado)
}

