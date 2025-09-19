// 🎁 Challenge Amigo Secreto
// -----------------------------------------
// Este archivo tiene toda la lógica en JavaScript
// para que nuestra aplicación funcione.
// La idea es que podamos:
// 1. Guardar nombres de amigos en una lista.
// 2. Ver esa lista en pantalla.
// 3. Hacer un sorteo y elegir un "amigo secreto" al azar.

// 👉 Paso 1: Creamos un array (una cajita que guarda varias cosas)
// Acá guardaremos todos los nombres que el usuario escriba.
let amigos = [];

// 👉 Paso 2: Función para agregar un amigo a la lista
// 🎁 Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // 1️⃣ Validar campo vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    // 2️⃣ Validar longitud mínima (2 caracteres)
    if (nombre.length < 2) {
        alert("El nombre debe tener al menos 2 caracteres.");
        return;
    }

    // 3️⃣ Normalizar: pasar a minúsculas para comparar
    const nombreNormalizado = nombre.toLowerCase();

    // 4️⃣ Validar caracteres: solo letras y espacios (incluye acentos)
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!regex.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }

    // 5️⃣ Validar duplicados (ignorando mayúsculas/minúsculas)
    const duplicado = amigos.some(amigo => amigo.toLowerCase() === nombreNormalizado);
    if (duplicado) {
        alert("Ese nombre ya fue agregado.");
        return;
    }

    // 6️⃣ Si todo está bien → agregar al array (guardamos como lo escribió el usuario)
    amigos.push(nombre);

    // Limpiar campo
    input.value = "";
    mostrarLista();
}

// 👉 Paso 3: Función para mostrar la lista de amigos en la pantalla
// 🎁 Función para mostrar la lista de amigos en la página
function mostrarLista() {
    // 1️⃣ Buscamos el elemento de la lista en el HTML
    // En el index.html debería haber un <ul id="listaAmigos"></ul>
    const lista = document.getElementById("listaAmigos");

    // 2️⃣ Limpiamos el contenido actual de la lista
    // Esto evita que se dupliquen los nombres cada vez que agregamos uno nuevo
    lista.innerHTML = "";

    // 3️⃣ Recorremos el array "amigos" usando un bucle for
    for (let i = 0; i < amigos.length; i++) {
        // Obtenemos el nombre en la posición i
        let amigo = amigos[i];

        // 4️⃣ Creamos un nuevo elemento <li> (item de lista)
        let li = document.createElement("li");

        // Le ponemos dentro el texto del nombre
        li.textContent = amigo;

        // 5️⃣ Agregamos este <li> dentro del <ul>
        lista.appendChild(li);
    }
}

// 👉 Paso 4: Función para sortear un amigo secreto
// 🎁 Función para sortear un amigo secreto
function sortearAmigo() {
    // 1️⃣ Validar que el array "amigos" no esté vacío
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos uno.");
        return; // Salimos de la función si no hay nombres
    }

    // 2️⃣ Generar un número aleatorio entre 0 y el tamaño del array - 1
    // Math.random() da un número entre 0 y 1 (ej: 0.5432...)
    // Lo multiplicamos por la cantidad de amigos
    // Math.floor() redondea hacia abajo para obtener un índice válido
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3️⃣ Usamos ese índice para obtener el nombre correspondiente
    const amigoSorteado = amigos[indiceAleatorio];

    // 4️⃣ Mostramos el resultado en la página
    // Buscamos un <p id="resultado"></p> en el HTML
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}
