// ==========================
// CARGAR CARRITO
// ==========================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedor = document.getElementById("carrito");
const total = document.getElementById("total");

// ==========================
// MOSTRAR PRODUCTOS
// ==========================

function mostrarCarrito() {

    contenedor.innerHTML = "";

    let suma = 0;

    if (carrito.length === 0) {

        contenedor.innerHTML = `
            <tr>
                <td colspan="3">El carrito está vacío.</td>
            </tr>
        `;

        total.textContent = "0";

        return;
    }

    carrito.forEach((producto, index) => {

        suma += producto.precio;

        contenedor.innerHTML += `

            <tr>

                <td>${producto.nombre}</td>

                <td>$${producto.precio.toLocaleString()}</td>

                <td>

                    <button onclick="eliminarProducto(${index})">

                        Eliminar

                    </button>

                </td>

            </tr>

        `;

    });

    total.textContent = suma.toLocaleString();

}

// ==========================
// ELIMINAR PRODUCTO
// ==========================

function eliminarProducto(index){

    carrito.splice(index,1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();

}

// ==========================
// VACIAR CARRITO
// ==========================

function vaciarCarrito(){

    if(confirm("¿Deseas vaciar el carrito?")){

        carrito = [];

        localStorage.removeItem("carrito");

        mostrarCarrito();

    }

}

// ==========================
// CONFIRMAR PEDIDO
// ==========================

const formulario = document.getElementById("formPedido");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    if(carrito.length === 0){

        alert("Debes agregar al menos un producto.");

        return;

    }

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const pago = document.getElementById("pago").value;

    if(nombre === "" || telefono === "" || direccion === "" || pago === ""){

        alert("Complete todos los campos.");

        return;

    }

    alert("Pedido realizado correctamente. ¡Gracias por tu compra!");

    carrito = [];

    localStorage.removeItem("carrito");

    formulario.reset();

    mostrarCarrito();

});

// ==========================
// INICIAR
// ==========================

mostrarCarrito();