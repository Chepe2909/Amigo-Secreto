Propósito del Código
El código implementa una aplicación web interactiva que permite al usuario:
✅ Agregar nombres a una lista de amigos.
✅ Sortear un nombre aleatorio entre los amigos ingresados.
✅ Limpiar la caja de entrada para facilitar nuevas adiciones.
✅ Reiniciar la lista de amigos y borrar los resultados del sorteo.

Este código es útil para juegos de amigo secreto, rifas o cualquier dinámica donde se necesite seleccionar una persona al azar.

El código está organizado en varias funciones, cada una con una tarea específica:
Se crea un array vacío (amigos) que almacenará los nombres ingresados por el usuario.

Función para Agregar Amigos
-Obtiene el nombre ingresado en la caja de texto.
-Valida que no esté vacío, mostrando una alerta si no se ingresa nada.
-Si es válido, lo agrega al array amigos y limpia la caja de texto.
-Llama a actualizarLista() para reflejar los cambios en pantalla.

Función para Mostrar la Lista de Amigos en el HTML
Limpia la lista visualmente antes de actualizarla.
Crea un elemento (<li>) por cada amigo y lo agrega a la lista en pantalla.

Función para Sortear un Amigo al Azar
Verifica que haya amigos en la lista.
Genera un índice aleatorio con Math.random() y Math.floor().
Muestra el nombre sorteado en la interfaz.

Función para Reiniciar la Lista
Vacía el array amigos.
Borra la lista mostrada en la pantalla.
Limpia el resultado del sorteo.

Este código es un ejemplo sencillo pero funcional. Permite agregar, visualizar, sortear y reiniciar nombres de una lista de
amigos de manera dinámica y fácil de usar.



https://github.com/user-attachments/assets/ec2e6b49-8351-4de9-8499-e9f2bd245a25



