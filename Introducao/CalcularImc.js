function calcularImc(peso, altura, classificarImc){
//    if((peso !== undefined && altura !== undefined) && typeof peso === "number" && typeof altura === "number" ){
    if(peso == undefined || altura == undefined){
        throw Error("Need to parameters: weight and heigth")
    }
    if(arguments.length == 2){
        return (peso/(altura**2)) 
    }
    
    if(typeof classificarImc === "function"){
        return (classificarImc(peso/(altura**2)))
    } 
    
    //console.log(peso, altura, typeof peso, typeof altura)
}
console.log(calcularImc(63, 1.65, classificaImc))
//console.log(calcularImc(63, 1.65))

function classificaImc(imc){
    if(typeof imc !== "number" && imc === undefined){
        throw Error("Need imc or number")
    }
    if(imc <= 16.9){
        return "Muito abaixo do peso"
    }else if(imc <= 18.4){
        return "Abaixo do peso"
    }else if(imc <= 24.9){
        return "Peso normal"
    }else if( imc <= 29.9){
        return "Acima do peso"
    }else if(imc <= 34.9){
        return "Obesidade Grau I"
    }else if(imc <= 40){
        return "Obesidade grau II"
    }else {
        return "Obesidade grau II"
    }
}

//console.log(classificaImc(calcularImc(62,1.65)))