let productos = [
    { id: 1001, nombre: "Lycra Julia Pareja", categoria: "indumentaria", talle: "S", unidades: 500, precio: 5000, rutaImagen: "lycra_julia.jpeg" },
    { id: 1002, nombre: "Lycra Julia Pareja", categoria: "indumentaria", talle: "M", unidades: 500, precio: 5000, rutaImagen: "lycra_julia.jpeg" },
    { id: 1003, nombre: "Lycra Julia Pareja", categoria: "indumentaria", talle: "L", unidades: 500, precio: 5000, rutaImagen: "lycra_julia.jpeg" },
    { id: 2001, nombre: "Lycra Leandro Le Fosse", categoria: "indumentaria", talle: "S", unidades: 500, precio: 5000, rutaImagen: "lycra_lean.jpeg" },
    { id: 2002, nombre: "Lycra Leandro Le Fosse", categoria: "indumentaria", talle: "M", unidades: 500, precio: 5000, rutaImagen: "lycra_lean.jpeg" },
    { id: 2003, nombre: "Lycra Leandro Le Fosse", categoria: "indumentaria", talle: "L", unidades: 500, precio: 5000, rutaImagen: "lycra_lean.jpeg" },
    { id: 3001, nombre: "Lycra Magna 2020", categoria: "indumentaria", talle: "S", unidades: 500, precio: 4000, rutaImagen: "lycra2020.jpeg" },
    { id: 3002, nombre: "Lycra Magna 2020", categoria: "indumentaria", talle: "M", unidades: 500, precio: 4000, rutaImagen: "lycra2020.jpeg" },
    { id: 3003, nombre: "Lycra Magna 2020", categoria: "indumentaria", talle: "L", unidades: 500, precio: 4000, rutaImagen: "lycra2020.jpeg" },
    { id: 4001, nombre: "Musculosa Boxing", categoria: "indumentaria", talle: "S", unidades: 500, precio: 3500, rutaImagen: "musc_box.jpeg" },
    { id: 4002, nombre: "Musculosa Boxing", categoria: "indumentaria", talle: "M", unidades: 500, precio: 3500, rutaImagen: "musc_box.jpeg" },
    { id: 4003, nombre: "Musculosa Boxing", categoria: "indumentaria", talle: "L", unidades: 500, precio: 3500, rutaImagen: "musc_box.jpeg" },
    { id: 4101, nombre: "Musculosa Boxing Parental", categoria: "indumentaria", talle: "S", unidades: 500, precio: 3500, rutaImagen: "musc_box1.jpeg" },
    { id: 4102, nombre: "Musculosa Boxing Parental", categoria: "indumentaria", talle: "M", unidades: 500, precio: 3500, rutaImagen: "musc_box1.jpeg" },
    { id: 4103, nombre: "Musculosa Boxing Parental", categoria: "indumentaria", talle: "L", unidades: 500, precio: 3500, rutaImagen: "musc_box1.jpeg" },
    { id: 5001, nombre: "Parche Logo Magna", categoria: "accesorios", unidades: 500, precio: 1000, rutaImagen: "parche.jpeg" },
    { id: 6001, nombre: "Kit Kick Boxing", categoria: "accesorios", unidades: 500, precio: 7000, rutaImagen: "kit_kb.jpeg" },
    { id: 7001, nombre: "Kimono Negro", categoria: "indumentaria", talle: "A0", unidades: 500, precio: 20000, rutaImagen: "gi_negro.jpeg" },
    { id: 7002, nombre: "Kimono Negro", categoria: "indumentaria", talle: "A1", unidades: 500, precio: 20000, rutaImagen: "gi_negro.jpeg" },
    { id: 7003, nombre: "Kimono Negro", categoria: "indumentaria", talle: "A2", unidades: 500, precio: 20000, rutaImagen: "gi_negro.jpeg" },
    { id: 7004, nombre: "Kimono Negro", categoria: "indumentaria", talle: "A3", unidades: 500, precio: 20000, rutaImagen: "gi_negro.jpeg" },
    { id: 8001, nombre: "Kimono Azul", categoria: "indumentaria", talle: "A0", unidades: 500, precio: 20000, rutaImagen: "gi_azul.jpeg" },
    { id: 8002, nombre: "Kimono Azul", categoria: "indumentaria", talle: "A1", unidades: 500, precio: 20000, rutaImagen: "gi_azul.jpeg" },
    { id: 8003, nombre: "Kimono Azul", categoria: "indumentaria", talle: "A2", unidades: 500, precio: 20000, rutaImagen: "gi_azul.jpeg" },
    { id: 8004, nombre: "Kimono Azul", categoria: "indumentaria", talle: "A3", unidades: 500, precio: 20000, rutaImagen: "gi_azul.jpeg" },
    { id: 9001, nombre: "Kimono Rojo", categoria: "indumentaria", talle: "A0", unidades: 500, precio: 20000, rutaImagen: "gi_rojo.jpeg" },
    { id: 9002, nombre: "Kimono Rojo", categoria: "indumentaria", talle: "A1", unidades: 500, precio: 20000, rutaImagen: "gi_rojo.jpeg" },
    { id: 9003, nombre: "Kimono Rojo", categoria: "indumentaria", talle: "A2", unidades: 500, precio: 20000, rutaImagen: "gi_rojo.jpeg" },
    { id: 9004, nombre: "Kimono Rojo", categoria: "indumentaria", talle: "A3", unidades: 500, precio: 20000, rutaImagen: "gi_rojo.jpeg" },
    { id: 11001, nombre: "Evento MMA", categoria: "eventos", unidades: 500, precio: 6000, rutaImagen: "" },
    { id: 11001, nombre: "Seminario Leandro Le Fosse", categoria: "eventos", unidades: 500, precio: 2500, rutaImagen: "" },
    { id: 12002, nombre: "Pase 8 clases", categoria: "cuota", unidades: 500, precio: 4500, rutaImagen: "" },
    { id: 12003, nombre: "Pase 12 clases", categoria: "cuota", unidades: 500, precio: 6000, rutaImagen: "" },
    { id: 12004, nombre: "Pase libre", categoria: "cuota", unidades: 500, precio: 10500, rutaImagen: "" }
]

let contenedor = document.getElementById("productos")

crearTarjetas(productos, contenedor)

function crearTarjetas(array) {
    contenedor.innerHTML = ""
    array.forEach(elemento => {
        let producto = document.createElement("div")
        producto.className = "tarjetaProducto"
        producto.innerHTML = `
            <h4>${elemento.nombre} </h4>
            <img class="imagen" src="images/${elemento.rutaImagen}">
            <h4>$${elemento.precio} talle ${elemento.talle} </h4>
    `
        contenedor.appendChild(producto)
    })
}

let buscador = document.getElementById("buscador")
buscador.addEventListener("input", filtrar)

function filtrar() {
    let arrayFiltrado = productos.filter(producto => producto.nombre.includes(buscador.value) || producto.categoria.includes(buscador.value) || producto.talle.includes(buscador.value))
    crearTarjetas(arrayFiltrado)
}
