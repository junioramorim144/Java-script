
/*function teste  (f) //Parametros {
    if (f%2 == 0) {
    return 'Par' //retorno
} else {
    return 'Impar'  //retorno
}
}
 let v = teste (5)

 console.log(v) 

 // Ou assim //

// Console.log(teste(5))// //Chamada
*/



// Aula 16 guanabara 




 /*
 function soma (n, n1 ) {
    return (n + n1)
 }
 
console.log (soma (4,6))
*/



/*
 Maneira tradicional  

function fatorial(n) {
    let fat = 1 
    for (let c = n ; c > 1; c-- ){
        fat *= c 

    } 


    return fat
      
}

console.log (fatorial(4))
*/


//Maneira recursiva//

function  fatorial (n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial (n-1)
    }
}

console.log(fatorial(5))












 

