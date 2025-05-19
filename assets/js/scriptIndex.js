let personas = []
function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")

    let eApellido = document.getElementById("apellido")
    let vApellido = eApellido.value
    let eErrorApellido = document.getElementById("errorApellido")
    // console.log(eNombre)
    let vlmNombre = validarLargoMinimo(eNombre,vNombre,eErrorNombre)
    let vlmApellido = validarLargoMinimo(eApellido,vApellido,eErrorApellido)
    if(vlmNombre == true && vlmApellido == true){
    //if(vlmNombre && vlmApellido){ cualquiera de las dos sirve , ya que ya retornan true
        let persona = {
            nombre : vNombre,
            apellido : vApellido
        }
        personas.push(persona)
        eNombre.value = ""
        eApellido.value = ""
        console.log(personas)
        cargarTabla()
    }
    //los console.log de arriba no funcionan, preguntar al profe que es lo que falla
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
        return true // true es que funciona(se podria poner lo que sea, 
        //string, numero,etc, uno interpreta la mejor manera)
    }else{
        console.log("error pocos caracteres")
        alert("Debes ingresar al menos mas de 3 caracteres")
        eError.innerText = "Debes ingresar 3 caracteres como minimo"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return false // false no funciona
}}
function cargarTabla(){
    let tablaPersonas = document.getElementById("tablaPersonas")
    let personasMap = personas.map((p,index)=>{
        return "<tr><td>"+p.nombre+"</td>"+
                    "<td>"+p.apellido+"</td>"+
                    "<td><button onclick = 'eliminar("+index+")'>Eliminar</button>"+
                    "</tr>"
        })
        console.log("convirtiendo...")
        console.log(personasMap)
        let personasStr = personasMap.join("")
        tablaPersonas.innerHTML = personasStr
}

function eliminar(indice){
    alert("Eliminando el indice "+indice)
    personas = personas.filter((p,index)=>{
        if(index != indice){//manten los que no tengan ese indice
            return p
        }
    })
    

}

