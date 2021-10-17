/*Condicionales -Switch
Funcionan similar a las condicionales , solo que ha diferencia de la condicion normal if else
La condicional SWITCH solo se puede validar una sola condición entre varios  cases y es utilizada 
cuando no necesitamos comparar , igual o negar una condicion y otra
*/
let nombre = prompt("Ingresa tu nombre");
let edad = prompt("ingresa tu edad");

switch (edad>=18) {
    case "18":
        alert("Tienes acceso al cátalogo de peliculas violentas");
        break;

        case "25":
            alert("Tienes acceso al cátalogo de peliculas violentas");
            break;

            case "35":
                alert ("Tienes acceso al cátalogo de peliculas violentas");
                break;

    default:
        alert("Debes tener 20 para acceder al catálogo");
        break;
}