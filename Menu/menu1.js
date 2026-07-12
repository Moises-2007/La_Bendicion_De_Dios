function agregarCarrito(nombre, precio){

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto agregado al carrito.");

}