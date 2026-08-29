Inventario NovaTech
Sistema básico de gestión de inventario desarrollado con HTML, CSS y JavaScript vainilla (Vanilla JS). Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre un catálogo de productos de manera sencilla en el navegador.

¿Por qué no se debe desarrollar directamente sobre main? 
No se debe desarrollar de forma directa sobre main porque es la versión final del proyecto o hace el cambio directo al archivo, si está aún en desarrollo hay otras ramas que se pueden usar para esto.

¿Qué diferencia existe entre main y develop? 
Main es la versión final, develop son los cambios que se están haciendo en el momento del desarrollo y que cuando ya están terminados ahí si pasan al Main.

¿Cuándo se utiliza una feature?
Se usa cuando se quiere hacer una funcionalidad nueva del proyecto que no existe todavía, sin afectar el desarrollo hasta que esté terminado.

¿Cuándo se utiliza release?
Cuando ya tiene todas las funcionalidades para hacer una nueva versión y se quiere hacer los últimos ajustes para antes de ponerla en develop.

¿Cuándo se utiliza hotfix?
Cuando hay un error que se tiene que corregir urgentemente en el main se crea el hotfix, se corrige el error y ya cuando esta listo se guarda el cambio en main y en develop.

¿Qué es un conflicto de Git y por qué ocurre?
Pasa cuando no se pueden juntar dos versiones de un archivo en git, y pasa cuando dos personas están borrando o editando un archivo al mismo tiempo.

¿Qué diferencia existe entre merge y rebase?
Las dos sirven para pasar y guardar cambios de una rama a otra pero merge guarda el historial real tal cual como se hizo y rebase escribe otra vez el historial para que sea lineal.

¿Qué función cumple un tag como v1.0.0?
Para marcar un punto especifico en el historial del repositorio y poder volver a ese punto rápidamente.

🚀 Características
Listar productos: Visualización dinámica de productos en una tabla interactiva.

Agregar productos: Formulario para registrar nuevos items con ID único generado automáticamente.

Editar productos: Modificación de nombre, precio y stock de cualquier producto existente.

Eliminar productos: Confirmación y remoción de registros de la lista.

🛠️ Tecnologías utilizadas
HTML5: Estructura semántica de la aplicación.

CSS3: Estilos básicos para la interfaz y ocultamiento condicional de formularios.

JavaScript (ES6+): Lógica del cliente, manipulación del DOM y gestión de datos en memoria.

Git / Git Flow: Control de versiones del proyecto.

📁 Estructura del repositorio
Plaintext
inventario-novatech/
├── index.html   # Estructura principal y formularios
└── app.js       # Lógica CRUD y funciones de manipulación del DOM
💻 Instalación y ejecución
Clonar el repositorio:

Bash
git clone <URL_DE_TU_REPOSITORIO>
Acceder a la carpeta del proyecto:

Bash
cd inventario-novatech
Abrir el proyecto:
Abre el archivo index.html directamente en cualquier navegador web moderno.

🔄 Flujo de trabajo (Git Flow)
Este proyecto utiliza Git Flow para el manejo de ramas:

main: Contiene el código listo para producción.

develop: Rama principal de desarrollo.

feature/*: Ramas secundarias para agregar o modificar funcionalidades (ej. feature/listar-productos).