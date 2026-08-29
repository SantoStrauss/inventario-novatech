function crearProducto(producto) {
    productos.push(producto);
}
let productos = [
  { id: 1, nombre: "Laptop NovaBook Pro", precio: 899.99, stock: 15 },
  { id: 2, nombre: "Mouse Inalámbrico", precio: 25.50, stock: 50 },
  { id: 3, nombre: "Teclado Mecánico RGB", precio: 75.00, stock: 30 },
  { id: 4, nombre: "Monitor 27'' 4K", precio: 320.00, stock: 8 }
];

// 1. Mostrar la lista con el botón Editar
function mostrarProductos(lista) {
  const contenedor = document.getElementById("tabla-productos");
  contenedor.innerHTML = "";

  lista.forEach(producto => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${producto.id}</td>
      <td>${producto.nombre}</td>
      <td>$${producto.precio.toFixed(2)}</td>
      <td>${producto.stock}</td>
      <td>
        <button onclick="prepararEdicion(${producto.id})">Editar</button>
      </td>
    `;

    contenedor.appendChild(fila);
  });
}

// 2. Cargar los datos del producto seleccionado en el formulario
function prepararEdicion(id) {
  const producto = productos.find(p => p.id === id);

  if (producto) {
    document.getElementById("edit-id").value = producto.id;
    document.getElementById("edit-nombre").value = producto.nombre;
    document.getElementById("edit-precio").value = producto.precio;
    document.getElementById("edit-stock").value = producto.stock;

    // Mostrar el formulario
    document.getElementById("contenedor-formulario").classList.remove("oculto");
  }
}

// 3. Guardar las modificaciones realizadas
function guardarCambios(event) {
  event.preventDefault(); // Prevenir el envío tradicional del formulario

  const id = parseInt(document.getElementById("edit-id").value);
  const nuevoNombre = document.getElementById("edit-nombre").value;
  const nuevoPrecio = parseFloat(document.getElementById("edit-precio").value);
  const nuevoStock = parseInt(document.getElementById("edit-stock").value);

  // Buscar el producto en el arreglo y actualizar sus valores
  productos = productos.map(producto => {
    if (producto.id === id) {
      return {
        ...producto,
        nombre: nuevoNombre,
        precio: nuevoPrecio,
        stock: nuevoStock
      };
    }
    return producto;
  });

  // Re-renderizar la tabla actualizada
  mostrarProductos(productos);

  // Ocultar formulario
  cancelarEdicion();
}

// 4. Ocultar el formulario de edición
function cancelarEdicion() {
  document.getElementById("form-editar").reset();
  document.getElementById("contenedor-formulario").classList.add("oculto");
}

// Inicializar la tabla
mostrarProductos(productos);