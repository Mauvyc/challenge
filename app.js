// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array de amigos
    listaAmigos.push(nombre);

    // Actualizar la lista visualmente
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;

    // Limpiar la lista visual y el array
    listaAmigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}
