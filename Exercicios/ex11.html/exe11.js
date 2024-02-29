let num = document.querySelector('input#txtn')
let lista = document.querySelector('input#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
         return true

    } else {
        return false
    }
}

function insLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function Calcular() {
    if (isNumero(num.value) && !insLista(num.value, valores)) {
        window.alert('Tudo Ok')
    } else {
        window.alert('Valor invalidor ou já encontrado na lista.')
    }
}