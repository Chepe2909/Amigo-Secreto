// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(){
    let amigo = document.getElementById('amigo');
    let nombre = amigo.value;

    if(!nombre){
        alert("Por favor, inserte un nombre.");
        return; //Para la ejecucion del siguiente codigo
    }

    amigos.push(nombre);

    amigo.value = ""; // Limpiar el campo de entrada después de agregar el nombre
    amigo.focus(); //Le da focus a la caja de texto, que siempre este lista para escribir
    actualizarLista();

    alert("Amigo agregado correctamente");
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de actualizar, para que no se repitan los nombres que se van guardando

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li); // Agrega el elemento a la lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let amigoSortear = amigos[Math.floor(Math.random() * amigos.length)];
    let amigoSorteado = document.getElementById("resultado");
    amigoSorteado.innerHTML = `El amigo sorteado es: ${amigoSortear}</span>`;
    
}

function reiniciarLista() {
    amigos = []; // Vaciar el array
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista en HTML
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado del sorteo
    alert("Se ha reiniciado el programa");
}
