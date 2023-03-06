function sum(num1,num2) {
    if(isNaN(num1)|| isNaN(num2)) {
        throw 'Não é um número'
    }
    return num1 + num2
}
function sub(num1,num2) {
    if(isNaN(num1)|| isNaN(num2)) {
        throw 'Não é um número'
    }
    return num1 - num2
}
function div(num1,num2) {
    if(isNaN(num1)|| isNaN(num2)) {
        throw 'Não é um número'
    }
    return num1/num2
}
function mult(num1,num2) {
    if(isNaN(num1)|| isNaN(num2)) {
        throw 'Não é um número'
    }
    return num1*num2

}

function raiz(num) {
    if(isNaN(num)) {
        throw 'Não é um número'
    }
    return Math.sqrt(num)
}
function pot(num) {
    if(isNaN(num)) {
        throw 'Não é um número'
    }
    return Math.pow(num)
}
module.exports = {
    sum,
    sub,
    div,
    mult,
    raiz,
    pot

}