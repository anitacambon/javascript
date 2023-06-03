/*Ingresar si realiza Jiu Jitsu*/

let jiuJitsu = prompt("Practica Jiu Jitsu?")

if (jiuJitsu == "si") {
    alert("Bienvenido")
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



/*Elegir y abonar inscripcion/es*/

let total = 0
let mensaje = "Categorías:\n1 - Adulto1 $1000 (21-25 años)\n2 - Adulto2 $1500 (26-30 años)\n3 - Master1 $2000 (31-35 años)\n4 - Master2 $2500 (36-40 años)\n5 - Total a abonar sin IVA\n6 - Continuar a ventana de pago\n0 - Salir"
do{
opcion = Number(prompt(mensaje))
if (opcion === 1){
    alert("Te inscribiste a categoría Adulto1")
    total += 1000
}else if(opcion === 2){
    alert("Te inscribiste a categoría Adulto2")
    total += 1500
}else if(opcion === 3){
    alert("Te inscribiste a categoría Master1")
    total += 2000
}else if(opcion === 4){
    alert("Te inscribiste a categoría Master2")
    total += 2500
}else if(opcion === 5){
    alert("El total sin IVA es $" + total)
}else if(opcion === 6){
    alert("A continuación te vamos a dirigir a Mercado Pago")
}
}while (opcion !== 0)
alert("Oss")

/* falta la siguiente formula */
masIva(total)
function masIva(total) {
    return (total * 0.21 + total)
}

alert("El total a pagar es " + masIva)