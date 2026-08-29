// Base de datos inicial en memoria
let productos = [
  { id: 1, nombre: "Laptop NovaBook Pro", precio: 899.99, stock: 15 },
  { id: 2, nombre: "Mouse Inalámbrico", precio: 25.50, stock: 50 },
  { id: 3, nombre: "Teclado Mecánico RGB", precio: 75.00, stock: 30 },
  { id: 4, nombre: "Monitor 27'' 4K", precio: 320.00, stock: 8 }
];

// Variable para generar IDs autoincrementables únicos
let siguienteId = 5;

// ==========================================
// 1. LISTAR / LEER PRODUCTOS
// ==========================================
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
        <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
      </td>
    `;

    contenedor.appendChild(fila);
  });
}

// ==========================================
// 2. CREAR PRODUCTO
// ==========================================
function crearProducto(event) {
  event.preventDefault();

  const nombre = document.getElementById("nuevo-nombre").value;
  const precio = parseFloat(document.getElementById("nuevo-precio").value);
  const stock = parseInt(document.getElementById("nuevo-stock").value);

  const nuevoProducto = {
    id: siguienteId++,
    nombre: nombre,
    precio: precio,
    stock: stock
  };

  productos.push(nuevoProducto);

  // Limpiar el formulario de creación
  document.getElementById("form-crear").reset();

  // Actualizar la tabla
  mostrarProductos(productos);
}

// ==========================================
// 3. EDITAR PRODUCTO
// ==========================================
function prepararEdicion(id) {
  const producto = productos.find(p => p.id === id);

  if (producto) {
    document.getElementById("edit-id").value = producto.id;
    document.getElementById("edit-nombre").value = producto.nombre;
    document.getElementById("edit-precio").value = producto.precio;
    document.getElementById("edit-stock").value = producto.stock;

    document.getElementById("contenedor-formulario-editar").classList.remove("oculto");
  }
}

function guardarCambios(event) {
  event.preventDefault();

  const id = parseInt(document.getElementById("edit-id").value);
  const nuevoNombre = document.getElementById("edit-nombre").value;
  const nuevoPrecio = parseFloat(document.getElementById("edit-precio").value);
  const nuevoStock = parseInt(document.getElementById("edit-stock").value);

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

  mostrarProductos(productos);
  cancelarEdicion();
}

function cancelarEdicion() {
  document.getElementById("form-editar").reset();
  document.getElementById("contenedor-formulario-editar").classList.add("oculto");
}

// ==========================================
// 4. ELIMINAR PRODUCTO
// ==========================================
function eliminarProducto(id) {
  const confirmar = confirm("¿Estás seguro de que deseas eliminar este producto?");
  
  if (confirmar) {
    productos = productos.filter(producto => producto.id !== id);

    const idEditando = parseInt(document.getElementById("edit-id")?.value);
    if (idEditando === id) {
      cancelarEdicion();
    }

    mostrarProductos(productos);
  }
}

// Inicializar la tabla al cargar la página
mostrarProductos(productos);