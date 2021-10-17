/*DOM - Document Object Model JS puede acceder al DOM 
(estructura del documento html)
y a traves de el puede modificar la pagina, de hecho
puede modificar todos los estilos del css,
eliminar o añadir elementos  y atributos relacionados con la pagina 
obtener elementos del html
*/

let datos = document.getElementById("datos");
// let numero  = "Edgar";

//funcion

const nombreUsuario = () => {

  let nombre = prompt("Ingresa tu nombre");
  alert("Tu nombre es: " + nombre);
  //let nombredos = "Edgar"
// nombredos = Deiby // aca no debe ir (dentro de la funcion)

//   numero = "Deiby";
//  console.log(numero);


}

// nombredos = "Deiby" //aca si dentro de la funcion


//Funcion vacia
//Eventos (onclick desde javascript)
datos.onclick = function () {
  nombreUsuario();
};

