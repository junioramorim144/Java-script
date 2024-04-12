/*
___________________________________________


function teste  (f) //Parametros 
{
    if (f%2 == 0) {
    return 'Par' //retorno
} else {
    return 'Impar'  //retorno
}
}
 let v = teste (8)

 console.log(v) 

 
 // Ou assim //

// Console.log(teste(5))// //Chamada







// Aula 16 guanabara 




 
 function soma (n, n1 ) {
    return (n + n1)
 }
 
console.log (soma (4,6))







 Maneira tradicional  

function fatorial(n) {
    let fat = 1 
    for (let c = n ; c > 1; c-- ){
        fat *= c 

    } 


    return fat
      
}

console.log (fatorial(4))






//Maneira recursiva//



function  fatorial (n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial (n-1)
    }
}

console.log(fatorial(5))




 ______________________________________________

 

// Usando arrow-function

//let testee=(v1, v2, v3)=>{return v1 + v2 - v3}

//console.log(testee(3, 3, 2))





let teste = f =>{
    if (f%2 == 0){
        return 'Par'
    } else {
        return 'Impar'
    }    
}
    
console.log(teste(305))








var testando = (n, f, g) => {

    if (n >= 0 && n < 20 )
      return 'Cara tu é brabo!'
    }

    // Fazer esse codigo funcionar completo!
    
    if (f <= 15){
        return 'Mano ta dando certo!!'
    }

    if (g === 40) {
        return 'que isso em moleque!'
    }
  
}

console.log (testando (10, 15, 40))
    
*/

const bemvindo  = (nome) => alert(`Olá ${nome}`)

const usuario = (callback) => {
    const nome = console.log ("Digite seu nome:")
    callback (nome)
}

usuario(bemvindo)




 










    













 

