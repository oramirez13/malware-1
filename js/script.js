// ================================================
// script.js — JavaScript compartido
// Proyecto: NovaBank (Simulacion educativa de phishing)
// Autor: orami
// ================================================


// ------------------------------------------------
// ESPERAR A QUE EL DOCUMENTO ESTE LISTO
// $(document).ready() es una funcion de jQuery que espera a que
// todo el HTML haya sido cargado antes de ejecutar el codigo.
// Esto evita errores al intentar acceder a elementos que aun no existen.
// ------------------------------------------------
$(document).ready(function () {
  // Todo el codigo dentro de esta funcion se ejecuta cuando la pagina termina de cargar.


  // ------------------------------------------------
  // FUNCIONALIDAD: BOTON DE DESCARGA EN INDEX.HTML
  // Esta seccion solo afecta a index.html porque busca el elemento
  // con id="download-link", que solo existe en esa pagina.
  // Si el elemento no existe (ej: en blog.html), el if no se ejecuta.
  // ------------------------------------------------

  if ($("#download-link").length > 0) {
    // $("#download-link") = selector jQuery que busca el elemento con id="download-link"
    // .length > 0 = verifica que el elemento fue encontrado en esta pagina
    // Si length es 0, el elemento no existe aqui y no ejecutamos el codigo

    $("#download-link").on("click", function (event) {
      // .on("click", function) = escucha el evento "click" en el elemento seleccionado
      // event = objeto con informacion sobre el evento ocurrido

      event.preventDefault();
      // event.preventDefault() = cancela la accion predeterminada del enlace.
      // Sin esto, el navegador intentaria descargar app.py inmediatamente.

      mostrarModalPhishing();
      // Llama a la funcion que muestra el modal educativo (definida abajo)
    });
    // Fin del escuchador de eventos

  }
  // Fin del if

});
// Fin del $(document).ready()


// ------------------------------------------------
// FUNCION: MOSTRAR MODAL EDUCATIVO DE PHISHING
// Busca el modal que ya existe en el HTML de index.html
// (con id="phishing-modal") y lo muestra usando jQuery + Bootstrap 4.
//
// IMPORTANTE: Bootstrap 4 usa el metodo jQuery .modal("show")
// a diferencia de Bootstrap 5 que usa new bootstrap.Modal(elemento).
// El modal NO se genera aqui con JavaScript.
// Vive en el HTML para evitar problemas al parsear HTML dentro de strings JS.
// ------------------------------------------------
function mostrarModalPhishing() {
  // function = palabra clave para definir una funcion reutilizable

  if ($("#phishing-modal").length === 0) {
    // Verifica si el modal existe en esta pagina antes de intentar mostrarlo
    // === 0 = el triple igual verifica valor Y tipo (comparacion estricta)
    // Si el modal no existe, termina la funcion sin hacer nada
    console.warn("Modal #phishing-modal no encontrado en el HTML.");
    // console.warn() = muestra un mensaje de advertencia en la consola del navegador
    // Util para depurar sin interrumpir al usuario con alertas
    return;
    // return = termina la funcion inmediatamente
  }

  $("#phishing-modal").modal("show");
  // $("#phishing-modal") = selector jQuery del modal por su id
  // .modal("show") = metodo de Bootstrap 4 para mostrar un modal.
  // Bootstrap 4 extiende jQuery con este metodo.
  // "show" = argumento que indica la accion a realizar (mostrar el modal)
  // Bootstrap agrega automaticamente el fondo oscuro (backdrop) detras del modal.

}
// Fin de la funcion mostrarModalPhishing