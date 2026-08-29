function crearProducto(producto) {
    productos.push(producto);
}
// Datos de ejemplo
const productos = [
  { id: 1, nombre: "Laptop NovaBook Pro", precio: 899.99, stock: 15 },
  { id: 2, nombre: "Mouse Inalámbrico", precio: 25.50, stock: 50 },
  { id: 3, nombre: "Teclado Mecánico RGB", precio: 75.00, stock: 30 },
  { id: 4, nombre: "Monitor 27'' 4K", precio: 320.00, stock: 8 }
];

// Función para renderizar la tabla
function mostrarProductos(lista) {
  const contenedor = document.getElementById("tabla-productos");
  
  // Limpiar contenido previo por si se vuelve a ejecutar
  contenedor.innerHTML = "";

  lista.forEach(producto => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${producto.id}</td>
      <td>${producto.nombre}</td>
      <td>$${producto.precio.toFixed(2)}</td>
      <td>${producto.stock}</td>
    `;

    contenedor.appendChild(fila);
  });
}

// Ejecutar cuando se cargue la página
mostrarProductos(productos);