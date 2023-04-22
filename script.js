function calcular(){

    var numeroDaTabuada = document.querySelector(".tabuada")
    var numeroDaTabuada = Number(numeroDaTabuada.value)

    var resultadoContainer = document.querySelector(".resultado")

    if(numeroDaTabuada == 0){
        alert("Digite algum Numero!")
        return
    }
    resultadoContainer.innerHTML = ""
    for(var n1 = 1; n1 <= 10; n1++){
        resultadoContainer.style.display = "flex"
        var resultado = document.createElement("h1")
        resultado.innerHTML = `${numeroDaTabuada}x${n1}=${numeroDaTabuada*n1}`
        resultadoContainer.appendChild(resultado)
    }
}

