function validar(){
    // console.log("Hi")
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value.trim()
    let eErrorNombre = document.getElementById("errorNombre")

    let eApellido = document.getElementById("apellido")
    let vApellido = eApellido.value.trim()
    let eErrorApellido = document.getElementById("errorApellido")
    // console.log(eNombre)
    
    
    // console.log(vNombre)
    // console.log(vNombre.length)
    if(vNombre.trim().length==0){
            console.log("Debes completar este campo")
    }
    else if(vNombre.length > 3){
        console.log("Cumple")
        eErrorNombre.innerText = ""
        eNombre.style.backgroundColor = "green"
        eNombre.style.color = "white"
    }
    else if(vApellido.length > 3){
        eErrorApellido.innerText = ""
        eNombre.style.backgroundColor = "green"
        eNombre.style.color = "white"
    }else if(vApellido < 3){
        console.log("error pocos caracteres")
        alert("Debes ingresar al menos mas de 3 caracteres")
        eErrorApellido.innerText = "Debes ingresar 3 caracteres como minimo"
        eApellido.style.backgroundColor = "red"
        eApellido.style.color = "white"
    }
    else{
        console.log("error pocos caracteres")
        alert("Debes ingresar al menos mas de 3 caracteres")
        eErrorNombre.innerText = "Debes ingresar 3 caracteres como minimo"
        eNombre.style.backgroundColor = "red"
        eNombre.style.color = "white"
    }
   
}