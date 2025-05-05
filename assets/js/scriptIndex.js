function validar(){
    console.log("Hi")
    let eNombre = document.getElementById("nombre")
    console.log(eNombre)
    let vNombre = eNombre.value.trim()
    let eErrorNombre = document.getElementById("errorNombre")
    console.log(vNombre)
    console.log(vNombre.length)
    if(vNombre.trim().length==0){
            console.log("Debes completar este campo")
    }
    else if(vNombre.length > 3){
        console.log("Cumple")
        eErrorNombre.innerText = ""
    }
    else{
        console.log("error pocos caracteres")
        alert("Debes ingresar al menos mas de 3 caracteres")
        eErrorNombre.innerText = "Debes ingresar 3 caracteres como minimo"
    }
}