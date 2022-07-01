function snapCrackle(maxValue) {

    let retorno = ""

    for (let i = 1; i <= maxValue; i++) {
        
        if(i % 2 != 0 && i % 5 == 0){ 
            retorno += "SnapCrackle, "
        } 
        else if(i % 2 !== 0){ 
            retorno += "Snap, "
        }
        else if(i % 5 == 0){
            retorno += "Crackle, "
        }
        else{
            retorno += `${i}, `
        }
    }
    return retorno;

}
console.log(snapCrackle(12))

/*
OUTRA MANEIRA:
function snapCrackle(maxValue){

    let retorno = []

    for(let i = 1; i <= maxValue; i++){
        
        if(i % 2 != 0 && i % 5 == 0){ 
            retorno.push("SnapCrackle")
        }
        else if(i % 2 !== 0){ 
            retorno.push("Snap")        
        }
        else if(i % 5 == 0){
            retorno.push("Crackle")
        }
        else{
            retorno.push(i);
        }
    }

    return retorno.join(", "); //O método join() JUNTA todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
}

console.log(snapCrackle(12))
*/

function numeroPrimo(x){
    let retorno = true;
    
    for(let i = 2; i < x; i++){
        if(x % i === 0){
            retorno = false; 
            //return false;
        }
    }
    //return true;
    return retorno;
}


function snapCracklePrime(maxValue){

    let retorno = ""

    for(let i = 1; i <= maxValue; i++){
        const constatacaoPrimo = numeroPrimo(i)

        if(i % 2 != 0 && i % 5 == 0 && constatacaoPrimo == true){
            retorno += "SnapCracklePrime, "
        }
        else if(i % 2 != 0 && i % 5 == 0 && constatacaoPrimo == false){
            retorno += "SnapCrackle, "
        }
        else if(i % 2 !== 0){ 
            retorno += "Snap, "
        }
        else if(i % 2 != 0 && constatacaoPrimo == true){
            retorno += "SnapPrime, "
        }
        else if(i % 2 != 0 && constatacaoPrimo == false){
            retorno += "Snap, "
        }
        else if(constatacaoPrimo == true){
            retorno += "Prime, "
        }
        else if(i % 5 == 0){
            retorno += "Crackle, "
        }
        else{
            retorno += `${i}, `
        }

        return retorno;
    }
}
console.log(snapCracklePrime(15))