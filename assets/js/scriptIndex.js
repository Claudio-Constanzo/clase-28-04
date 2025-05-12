function validar(){
    // console.log("Hi")
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")

    let eApellido = document.getElementById("apellido")
    let vApellido = eApellido.value
    let eErrorApellido = document.getElementById("errorApellido")
    // console.log(eNombre)
    
    
    // console.log(vNombre)
    // console.log(vNombre.length)

    validarLargoMinimo(eNombre,vNombre,eErrorNombre)
    validarLargoMinimo(eApellido,vApellido,eErrorApellido)
}
function validarLargoMinimo(elemento,valor,eError){
    if(valor.length > 3){
        console.log("Cumple")
        eError.innerText = ""
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
    }else{
        console.log("error pocos caracteres")
        alert("Debes ingresar al menos mas de 3 caracteres")
        eError.innerText = "Debes ingresar 3 caracteres como minimo"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
}
}