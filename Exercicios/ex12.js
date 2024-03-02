let valores = [8, 5, 4, 7, 2, 4]


valores.push(6)
valores.sort()
console.log (valores)

/*
//Jeito majs longo de fazer// 

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6]) 


//Jeito mais curto de fazer// 

 
for (let v=0; v < valores.length; v++){
    console.log (`A posição ${v} tem o valor ${valores[v]}`)
}


        // Jeito mais curto de fazer// */

for(let v in valores){
    console.log(`A posição ${v} tem o valor ${valores[v]}`)
}


console.log (`O vetor tem ${valores.length} posições`)
console.log (`O valor selecionado é ${valores[3]}`)