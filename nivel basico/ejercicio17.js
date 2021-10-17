//estoy iendo alhtml  y obtengo un ID datos
const boton = document.getElementById("datos");

// es una propiedad que accede al objeto storage

//se crea la variable nombreLS y se le esta asignado lo siguiente
// en localStorage se obtiene el item ("nombre")
let nombreLS = localStorage.getItem("nombre");
console.log(nombreLS)

const prueba = () => {
    let nombre = prompt ("Ingrese su nombre");

    //se esta insertando un item o key, o valor
    localStorage.setItem("nombre", nombre)
}

//el boton tiene una propiedad que identifica si le dannclick
boton.onclick = function() {
    prueba();
    
}