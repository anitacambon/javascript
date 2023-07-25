const urlLocal = './productos.json'
let productos = []
let contenedor = document.getElementById("contenedor")

fetch(urlLocal)
    .then(response => response.json())
    .then(data => {
        productos = data.productos
        console.log(productos)
        renderizar(productos, contenedor, carrito)
        
    })
    .catch(mensajeError => alert(mensajeError))

function mostrarOcultar() {
    let padreContenedor = document.getElementById("productosContenedor")
    let carrito = document.getElementById("contenedorCarrito")
    padreContenedor.classList.toggle("oculto")
    carrito.classList.toggle("oculto")
}

function catalogoPrincipal(productos) {
    crearCategorias(productos, contenedorFiltros)
    let contenedorFiltros = document.getElementById("categorias")
    let buscador = document.getElementById("buscador")
    buscador.addEventListener("input", () => filtrar(productos))

    let botonesFiltrados = document.getElementsByClassName("categoria")
    for (const botonFiltro of botonesFiltrados) {
        botonFiltro.addEventListener("click", () => filtrarPorCategoria(productos))
    }

    
    let botonCarrito = document.getElementById("botonCarrito")
    botonCarrito.addEventListener("click", mostrarOcultar)


    let botonFinalizarCompra = document.getElementById("finalizarCompra")
    botonFinalizarCompra.addEventListener("click", () => finalizarCompra(carrito))

    let carrito = JSON.parse(localStorage.getItem("carrito")) || ([])



}



function filtrar(productos) {
    let elementosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(buscador.value) || producto.categoria.toLowerCase().includes(buscador.value))
    renderizar(elementosFiltrados, contenedor)
}

function filtrarPorCategoria(id, productos) {
    if (id === "Mostrar todos") {
        renderizar(productos, contenedor, carrito)
    } else {
        let elementosFiltrados = productos.filter(producto => producto.categoria === id)
        renderizar(elementosFiltrados, contenedor, carrito)
    }

}

function crearCategorias(productos) {
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
        elementosFiltrados.appendChild(boton)

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
}

function lanzarTostada() {
    Toastify({
        text: "Agregado al carrito",
        className: "info",
        duration: 1500
    }).showToast()
}

function renderizarCarrito(carrito) {
    let total = 0
    let totalProductos = 0
    let carritoFisico = document.getElementById("carrito")
    carritoFisico.classList.add("claseDelCarrito")
    carritoFisico.innerHTML = ""

    let listaCarrito = document.createElement("ul")
    listaCarrito.classList.add("cart-list")

    carrito.forEach(({ id, nombre, precioUnitario, unidades, subtotal }) => {
        let elementoDelCarrito = document.createElement("li")
        elementoDelCarrito.classList.add("cart-item")
        elementoDelCarrito.innerHTML += `
            <p>Producto: ${nombre} | Precio: $${precioUnitario} | Cantidad: ${unidades} | Subtotal: $${subtotal}</p>
        `
        listaCarrito.appendChild(elementoDelCarrito)
        carritoFisico.appendChild(elementoDelCarrito)
        total += subtotal
        totalProductos += unidades
    })
    carritoFisico.innerHTML += `
    <li class= "totalCarrito">Total $${total}</li>`
}
/*<button ${id} type="button" class="bi bi-trash3"></button>*/



function finalizarCompra(carritoJSON) {
    let carrito = document.getElementById("carrito")
    carrito.innerHTML = ""
    localStorage.removeItem("carrito")
    carritoJSON = ([])
}




/*<button ${id} type="button" class="bi bi-trash3"></button>*/



