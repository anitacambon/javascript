function catalogoPrincipal() {
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


    let contenedorFiltros = document.getElementById("categorias")

    let buscador = document.getElementById("buscador")
    buscador.addEventListener("input", () => filtrar(productos))

    let botonesFiltrados = document.getElementsByClassName("categoria")
    for (const botonFiltro of botonesFiltrados) {
        botonFiltro.addEventListener("click", filtrarPorCategoria)
    }

    let botonCarrito = document.getElementById("botonCarrito")
    botonCarrito.addEventListener("click", mostrarOcultar)

    crearTarjetas(productos)
    crearCategorias(productos, contenedorFiltros)
}

catalogoPrincipal()

function crearTarjetas(array) {
    let contenedor = document.getElementById("productos")
    contenedor.innerHTML = ""
    array.forEach(producto => {
        let tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "tarjetaProducto"
        tarjetaProducto.innerHTML = `
            <h4>${producto.nombre} </h4>
            <img class="imagen" src="images/${producto.rutaImagen}">
            <h4>$${producto.precio} talle ${producto.talle} </h4>
            <button id=${producto.id}>Agregar al carrito</button>
    `
        contenedor.appendChild(tarjetaProducto)
        let botonAgregarAlCarrito = document.getElementById(producto.id)
        botonAgregarAlCarrito.addEventListener("click", agregarAlCarrito)
    })
}

function agregarAlCarrito(e) {
    let productoBuscado = productos.find(producto => producto.id === Number(e.target.id))
    carrito.push({
        id: productoBuscado.id,
        nombre: productoBuscado.nombre,
        precio: productoBuscado.precio
    })
    console.log(carrito)
}

function filtrar(productos) {
    let contenedor = document.getElementById("productos")
    let arrayFiltrado = productos.filter(producto => producto.nombre.toLowerCase().includes(buscador.value) || producto.categoria.toLowerCase().includes(buscador.value))
    crearTarjetas(arrayFiltrado)
}

function filtrarPorCategoria(id, productos) {
    if (id === "Mostrar todo") {
        crearTarjetas(productos)
    } else {
        let categoriasFiltradas = productos.filter(producto => producto.categoria === id)
        crearTarjetas(categoriasFiltradas)
    }
}

function crearCategorias(arrayDeElementos, contenedorFiltros) {
    let categorias = ["Mostrar todo"]
    arrayDeElementos.forEach(producto => {
        if (!categorias.includes(producto.categoria)) {
            categorias.push(producto.categoria)
        }
    })


    categorias.forEach(categoria => {
        let boton = document.createElement("button")
        boton.id = categoria
        boton.innerText = categoria
        contenedorFiltros.appendChild(boton)

        let botonCapturado = document.getElementById(categoria)
        botonCapturado.addEventListener("click", (e) => filtrarPorCategoria(e.target.id, arrayDeElementos))
    })
}

function mostrarOcultar() {
    let padreContenedor = document.getElementById("productosContenedor")
    let carrito = document.getElementById("carrito")
    padreContenedor.classList.toggle("oculto")
    carrito.classList.toggle("oculto")
}