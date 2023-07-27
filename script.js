const urlLocal = './productos.json'
let productos = []
let carrito = JSON.parse(localStorage.getItem("carrito")) || ([])

catalogoPrincipal()
crearCategorias(productos)
llamarProductos()

function llamarProductos() {
    fetch(urlLocal)
        .then(response => response.json())
        .then(data => {
            productos = data.productos
            renderizar(productos, contenedor, carrito)
        })
        .catch(mensajeError => contenedor.innerHTML = '<p>Algo salió mal</p>')
}

function catalogoPrincipal() {
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


    crearCategorias(productos)
    llamarProductos()
}


function filtrar(productos) {
    let elementosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(buscador.value) || producto.categoria.toLowerCase().includes(buscador.value))
    renderizar(elementosFiltrados, document.getElementById("productos"), carrito)
}

function filtrarPorCategoria(id, productos, carrito) {
    let contenedorFiltrado = document.createElement("div")
    contenedorFiltrado.className = "contenedorFiltrado"
    if (id === "Mostrar todos") {
        renderizar(productos, document.getElementById("productos"), carrito)
    } else {
        let elementosFiltrados = productos.filter(producto => producto.categoria === id)
        renderizar(elementosFiltrados, document.getElementById("productos"), carrito)
    }
}


function crearCategorias(productos) {
    let contenedorFiltros = document.getElementById("categorias")
    contenedorFiltros.innerHTML = ""

    let categorias = ["Mostrar todos"]
    productos.forEach(producto => {
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
        botonCapturado.addEventListener("click", (e) => filtrarPorCategoria(e.target.id, productos))
    })
}



function renderizar(productos, elementosFiltrados, carrito) {
    elementosFiltrados.innerHTML = ""
    productos.forEach(({ rutaImagen, nombre, precio, talle, id }) => {
        let tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "tarjetaProducto"

        let contenidoTarjeta = `
            <img class="imagen" src="images/${rutaImagen}"></img>
            <h2>${nombre}</h2>
            <p class="precio">$${precio}</p>
            `
        if (talle) {
            contenidoTarjeta += `<p>talle ${talle}</p>`
        }
        contenidoTarjeta += `<button id=${id} type="button" class="btn btn-outline-warning">Agregar al carrito</button>`

        tarjetaProducto.innerHTML = contenidoTarjeta
        elementosFiltrados.appendChild(tarjetaProducto)
        let botonAgregarAlCarrito = document.getElementById(id)
        botonAgregarAlCarrito.addEventListener("click", () => agregarAlCarrito(productos, id, carrito))
    })
}

function agregarAlCarrito(productos, id, carrito) {
    let productoBuscado = productos.find(producto => producto.id === id)
    let posicionProductoEnCarrito = carrito.findIndex(producto => producto.id === id)
    if (posicionProductoEnCarrito !== -1) {
        carrito[posicionProductoEnCarrito].unidades++
        carrito[posicionProductoEnCarrito].subtotal = carrito[posicionProductoEnCarrito].unidades * carrito[posicionProductoEnCarrito].precioUnitario
    } else {
        carrito.push({
            rutaImagen: productoBuscado.rutaImagen,
            id: productoBuscado.id,
            nombre: productoBuscado.nombre,
            precioUnitario: productoBuscado.precio,
            unidades: 1,
            subtotal: productoBuscado.precio
        })
    }
    lanzarTostada()
    localStorage.setItem("carrito", JSON.stringify(carrito))
    renderizarCarrito(carrito)
    llamarProductos(productos, carrito)
}

function lanzarTostada() {
    Toastify({
        text: "Agregado al carrito",
        className: "info",
        duration: 1500
    }).showToast()
}

function mostrarOcultar() {
    let padreContenedor = document.getElementById("productosContenedor")
    let carrito = document.getElementById("contenedorCarrito")
    padreContenedor.classList.toggle("oculto")
    carrito.classList.toggle("oculto")
    llamarProductos()
}

function renderizarCarrito(carrito) {
    let total = 0
    let totalProductos = 0
    let carritoFisico = document.getElementById("carrito")
    carritoFisico.classList.add("claseDelCarrito")
    carritoFisico.innerHTML = ""

    let listaCarrito = document.createElement("ul")
    listaCarrito.classList.add("cart-list")

    carrito.forEach(({ rutaImagen, nombre, precioUnitario, unidades, subtotal, id }) => {
        let elementoDelCarrito = document.createElement("li")
        elementoDelCarrito.classList.add("cart-item")
        elementoDelCarrito.innerHTML += `
            <img class="imagenItemCarrito" src="images/${rutaImagen}"></img><p>ID: ${id} | Producto: ${nombre} | Precio: $${precioUnitario} | Cantidad: ${unidades} | Subtotal: $${subtotal}</p>
            `

        listaCarrito.appendChild(elementoDelCarrito)
        carritoFisico.appendChild(elementoDelCarrito)
        total += subtotal
        totalProductos += unidades
    })
    carritoFisico.innerHTML += `
    <li class= "totalCarrito">Total $${total}</li>`
    llamarProductos()
}


function finalizarCompra() {
    carrito.innerHTML = ""
    localStorage.removeItem("carrito")
    carrito = ([])
    carritoJSON = ([])
    graciasPorSuCompra()
    renderizarCarrito(carrito)
}

function graciasPorSuCompra() {
    Swal.fire(
        'Gracias por tu compra!',
        'Te enviamos un email con los pasos a seguir',
        'success'
    )
}

/*<button ${id} type="button" class="bi bi-trash3"></button>*/



/*
function modificarCantidad(event, cantidad) {
    let productoId = parseInt(event.target.dataset.id)
    let productoEnCarrito = carrito.find((producto) => producto.id === productoId)

    if (productoEnCarrito && productoEnCarrito.cantidad + cantidad >= 1) {
        productoEnCarrito.cantidad += cantidad
    }
}

function eliminarDelCarrito(event) {
    let productoId = parseInt(event.target.dataset.id)
    let productoEliminar = carrito.findIndex((producto) => producto.id === productoId)

    if (productoEliminar !== -1) {
        carrito.splice(productoEliminar, 1)
        localStorage.setItem('carrito', JSON.stringify(carrito))

        if (carrito.length === 0) {
            localStorage.removeItem('carrito')
        } else {
            renderizarCarrito()
        }
    } else {
        renderizarCarrito()
    }
}
*/
