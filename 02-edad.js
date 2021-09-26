/* //Asinamos los elementos del DOM a constantes para manejarlos facilmente

const formulario = document.getElementById("form");
const edad = document.getElementById("edad");
const boton = document.getElementById("boton");

//Funcion que validara si se ingreso un numero menor que 18

functionvalidar(); {
    
    if (edad.value < 18) {
        alert("Tienes que tener 18!");
    }
    else{
        formulario.submit();
    }
}

//Agregamos un escuchador de el evento click al boton

boton.addEventListener("click",validar); */

// otra solucion
const edad = document.querySelector('#edad');
const input = document.querySelector('#input');

/* obtener el valor del input */

const readAge = () => {
    const inputValue = input.value;
    const mensaje = inputValue >= 18 ? 'eres mayor de edad': 'Eres menor de edad';
    edad.textContent = mensaje;
}

//otra Carlso

/* Leer */