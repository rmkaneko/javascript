(function(){
    function calcularMedia(){
        let total = 0;
        let num = [];

        for( let i = 0; i < arguments.length; i++){
    //        console.log(typeof arguments[i])
            if(typeof arguments[i] === "number"){
                total += arguments[i]
                num[i] = arguments[i]
    //            console.log(total)
            }
            else{
                return "Error, argumentos inválidos"
            }
        }
        //console.log("Media")
    //   console.log("A média entre:", num, "é", (total/arguments.length))
        return (total/arguments.length) || 0
    }
    console.log(calcularMedia(2,5))
}) ()


