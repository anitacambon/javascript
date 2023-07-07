function catalogoPrincipal() {
    let productos = [
        { id: 1001, nombre: "Lycra Julia Pareja", categoria: "indumentaria", talle: "S", unidades: 500, precio: 5000, rutaImagen: "lycra_julia.jpeg" },
        { id: 1002, nombre: "Lycra Julia Pareja", categoria: "indumentaria", talle: "M", unidades: 500, precio: 5000, rutaImagen: "lycra_julia.jpeg" },
        { id: 1003, nombre: "Lycra Julia Pareja", categoria: "indumentaria", talle: "L", unidades: 500, precio: 5000, rutaImagen: "lycra_julia.jpeg" },
        { id: 2001, nombre: "Lycra Team Le Fosse", categoria: "indumentaria", talle: "S", unidades: 500, precio: 5000, rutaImagen: "lycra_lean.jpeg" },
        { id: 2002, nombre: "Lycra Team Le Fosse", categoria: "indumentaria", talle: "M", unidades: 500, precio: 5000, rutaImagen: "lycra_lean.jpeg" },
        { id: 2003, nombre: "Lycra Team Le Fosse", categoria: "indumentaria", talle: "L", unidades: 500, precio: 5000, rutaImagen: "lycra_lean.jpeg" },
        { id: 3001, nombre: "Lycra Magna 2020", categoria: "indumentaria", talle: "S", unidades: 500, precio: 4000, rutaImagen: "lycra2020.jpeg" },
        { id: 3002, nombre: "Lycra Magna 2020", categoria: "indumentaria", talle: "M", unidades: 500, precio: 4000, rutaImagen: "lycra2020.jpeg" },
        { id: 3003, nombre: "Lycra Magna 2020", categoria: "indumentaria", talle: "L", unidades: 500, precio: 4000, rutaImagen: "lycra2020.jpeg" },
        { id: 4001, nombre: "Musculosa Boxing", categoria: "indumentaria", talle: "S", unidades: 500, precio: 3500, rutaImagen: "musc_box.jpeg" },
        { id: 4002, nombre: "Musculosa Boxing", categoria: "indumentaria", talle: "M", unidades: 500, precio: 3500, rutaImagen: "musc_box.jpeg" },
        { id: 4003, nombre: "Musculosa Boxing", categoria: "indumentaria", talle: "L", unidades: 500, precio: 3500, rutaImagen: "musc_box.jpeg" },
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
        { id: 9501, nombre: "Gorro lana", categoria: "accesorios", unidades: 500, precio: 5000, rutaImagen: "gorro_lana.jpeg" },
        { id: 11001, nombre: "Evento MMA", categoria: "eventos", unidades: 500, precio: 6000, rutaImagen: "evento_mma.jpeg" },
        { id: 11001, nombre: "Seminario Leandro", categoria: "eventos", unidades: 500, precio: 2500, rutaImagen: "evento_seminario.jpeg" },
        { id: 12002, nombre: "Pase 8 clases", categoria: "cuota", unidades: 500, precio: 4500, rutaImagen: "logo.jpeg" },
        { id: 12003, nombre: "Pase 12 clases", categoria: "cuota", unidades: 500, precio: 6000, rutaImagen: "logo.jpeg" },
        { id: 12004, nombre: "Pase libre", categoria: "cuota", unidades: 500, precio: 10500, rutaImagen: "logo.jpeg" }
    ]

    
    let arrayDeElementos = document.getElementById("categorias")

    let buscador = document.getElementById("buscador")
    buscador.addEventListener("input", () => filtrar(productos))

    let botonesFiltrados = document.getElementsByClassName("categoria")
    for (const botonFiltro of botonesFiltrados) {
        botonFiltro.addEventListener("click", () => filtrarPorCategoria(id, productos))
    }

    let botonCarrito = document.getElementById("botonCarrito")
    botonCarrito.addEventListener("click", mostrarOcultar)

    let botonFinalizarCompra = document.getElementById("finalizarCompra")
    botonFinalizarCompra.addEventListener("click", () => finalizarCompra(carrito))

    let carritoJSON = JSON.parse(localStorage.getItem("carrito"))
    let carrito = carritoJSON ? carritoJSON : []
    let contenedor = document.getElementById("contenedor")

    renderizar(productos, contenedor, carrito)
    renderizarCarrito(carritoJSON)
}

catalogoPrincipal()

function finalizarCompra(carrito) {
    let carritoFisico = document.getElementById("carrito")
    carritoFisico.innerHTML = ""
    localStorage.removeItem("carrito")
    carrito = []
}

function renderizar(arrayDeElementos, contenedor, carrito) {
    contenedor.innerHTML = ""
    arrayDeElementos.forEach(({ rutaImagen, nombre, precio, talle, id }) => {
        let tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "tarjetaProducto"
        tarjetaProducto.innerHTML = `
            
            <img class="imagen" src="images/${rutaImagen}"></img>
            <h2>${nombre}</h2>
            <p class="precio" >$${precio}</p>
            <p>talle ${talle}</p>
            <button id=${id} type="button" class="btn btn-outline-warning">Agregar al carrito</button>

    `
        contenedor.appendChild(tarjetaProducto)
        let botonAgregarAlCarrito = document.getElementById(id)
        botonAgregarAlCarrito.addEventListener("click", () => agregarAlCarrito(arrayDeElementos, id, carrito))
    })
}

function agregarAlCarrito(arrayDeElementos, id, carrito) {
    let productoBuscado = arrayDeElementos.find(producto => producto.id === id)
    let posicionProductoEnCarrito = carrito.findIndex(producto => producto.id === id)
    if (posicionProductoEnCarrito !== -1) {
        carrito[posicionProductoEnCarrito].unidades++
        carrito[posicionProductoEnCarrito].subtotal = carrito[posicionProductoEnCarrito].unidades * carrito[posicionProductoEnCarrito].precioUnitario
    } else {
        carrito.push({
            id: productoBuscado.id,
            nombre: productoBuscado.nombre,
            precioUnitario: productoBuscado.precio,
            unidades: 1,
            subtotal: productoBuscado.precio
        })
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    renderizarCarrito(carrito)
}


function renderizarCarrito(carritoJSON) {
    let carritoFisico = document.getElementById("carrito")
    carritoFisico.classList.add("claseDelCarrito")
    carritoFisico.innerHTML = ""
    carritoJSON.forEach(({ id, nombre, precioUnitario, unidades, subtotal }) => {
        let elementoDelCarrito = document.createElement("div")
        elementoDelCarrito.innerHTML = `
        <p>ID: ${id} | Producto: ${nombre} | Precio: $${precioUnitario} | Cantidad: ${unidades} | Subtotal: $${subtotal}</p>\n`
        carritoFisico.appendChild(elementoDelCarrito)
    })
}

function mostrarOcultar() {
    let padreContenedor = document.getElementById("productosContenedor")
    let carrito = document.getElementById("contenedorCarrito")
    padreContenedor.classList.toggle("oculto")
    carrito.classList.toggle("oculto")
}

/* las siguientes funciones no las puedo ejecutar */

function filtrar(arrayDeElementos, crearTarjetas) {
    let contenedor = document.getElementById("productos")
    let arrayFiltrado = arrayDeElementos.filter(producto => producto.nombre.toLowerCase().includes(buscador.value) || producto.categoria.toLowerCase().includes(buscador.value))
    crearTarjetas(arrayFiltrado)
}


function crearCategorias(arrayDeElementos) {
    let categorias = ["Mostrar todo"]
    arrayDeElementos.forEach(producto => {
        if (!categorias.includes(producto.categoria)) {
            categorias.push(producto.categoria)
        }
    })
    let contenedorFiltros = document.getElementById("categorias")
    categorias.forEach(categoria => {
        let boton = document.createElement("button")
        boton.id = categoria
        boton.innerText = categoria
        contenedorFiltros.appendChild(boton)

        let botonCapturado = document.getElementById(categoria)
        botonCapturado.addEventListener("click", (e) => filtrarPorCategoria(e.target.id, catalogoPrincipal))
    })
}


function filtrarPorCategoria(id, productos) {
    if (id === "Mostrar todo") {
        crearTarjetas(productos)
    } else {
        let categoriasFiltradas = productos.filter(producto => producto.categoria === id)
        crearTarjetas(categoriasFiltradas)
    }
}




/*
Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  }) */