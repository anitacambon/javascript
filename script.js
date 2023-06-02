/*Ingresar si realiza Jiu Jitsu*/

let jiuJitsu = prompt("Practica Jiu Jitsu?")

if (jiuJitsu == "si") {
    console.log("Bienvenido")
} else {
    alert("Chau")
}


/*Ingresar Usuario y contraseña en menos de 3 intentos, si falla, notificar que es incorrecto*/

const USER = "Ana Cambon"
const PASS = "Ana123"

let usuario
let constrasenia

let intentos = 1

do {
    usuario = prompt("Ingrese nombre de usuario")
    contrasenia = prompt("Ingrese contraseña")
    intentos++
} while (intentos < 3 && ((USER !== usuario) || (PASS !== contrasenia)))

if ((USER === usuario) && (PASS === contrasenia)) {
    alert("Bienvenido/a" + " " + usuario)
} else {
    alert("Usuario y/o contraseña incorrecto/s")
}



/*Ingresar edad para conocer a qué categoría pertenece*/

let nombreCompetidor = prompt("Ingrese el nombre del competidor")
let edad = prompt("Ingresar edad para conocer categoría (20 a 50 años)")
function pedirDatos(nombreCompetidor, edad) {
    if (edad < 26) {
        return "Categoría Adulto 1"
    } else if (edad < 31) {
        return "Categoría Adulto 2"
    } else if (edad < 36) {
        return "Categoría Master 1"
    } else if (edad < 41) {
        return "Categoría Master 2"
    } else if (edad < 46) {
        return "Categoría Master 3"
    } else {
        return "Categoría Master 4"
    }
}

let resultado = pedirDatos(nombreCompetidor, edad)
alert(resultado)