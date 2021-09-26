let print_edad = document.querySelector("#display_edad")
let edad_usuario = document.querySelector("#edad")

const obtener_edad = () => {
    const edad = parseInt(edad_usuario.value) ; 
    if (edad < 18 ) {
        mensaje = "Eres menor de edad"
    } else {
        mensaje = "Eres mayor de edad"
    }
    print_edad.textContent = mensaje;
}