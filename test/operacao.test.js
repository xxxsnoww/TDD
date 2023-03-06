const {describe,expect,it} = require('@jest/globals');
const calculadora = require('../src/operacoes/operacoes');

describe('Teste da calculadora', () => {
    it('Operação de soma', () => {
        let resultado = calculadora.sum(1,2);

        expect(resultado).toEqual(3)

      resultado = calculadora.sum(0,2);

        expect(resultado).toEqual(2)

        resultado = calculadora.sum(-1,2);

        expect(resultado).toEqual(1)

        resultado = () => calculadora.sum("a",2);

        expect(resultado).toThrow('Não é um número')

        
        resultado = () => calculadora.sum(2,"a");

        expect(resultado).toThrow('Não é um número')
        
    })
})
it('Operacao de Subtração', () => {
    let resultado = calculadora.sub(3,2);

        expect(resultado).toEqual(1)

      resultado = calculadora.sub(2,2);

        expect(resultado).toEqual(0)

        resultado = calculadora.sub(1,2);

        expect(resultado).toEqual(-1)

        resultado = () => calculadora.sub("a",2);

        expect(resultado).toThrow('Não é um número')

        
        resultado = () => calculadora.sub(2,"a");

        expect(resultado).toThrow('Não é um número')
})
it('Operacao de Multiplicação', () => {
    let resultado = calculadora.mult(10,2);

    expect(resultado).toEqual(20)

    resultado = calculadora.mult(3,2);

    expect(resultado).toEqual(6)

  resultado = calculadora.mult(2,2);

    expect(resultado).toEqual(4)

    resultado = calculadora.mult(1,2);

    expect(resultado).toEqual(2)

    resultado = () => calculadora.mult("b",2);

    expect(resultado).toThrow('Não é um número')

    
    resultado = () => calculadora.mult(2,"a");

    expect(resultado).toThrow('Não é um número')

    
    resultado = calculadora.mult(50,1);

    expect(resultado).toEqual(50)

    
    resultado = calculadora.mult(3,2);

    expect(resultado).toEqual(6)
})
it('Operacao de Divisão', () => {
  let resultado = calculadora.div(10,2);

  expect(resultado).toEqual(5)

  resultado = calculadora.div(4,2);

  expect(resultado).toEqual(2)

resultado = calculadora.div(2,2);

  expect(resultado).toEqual(1)

  resultado = calculadora.div(6,2);

  expect(resultado).toEqual(3)

  resultado = () => calculadora.div(2,"b");

  expect(resultado).toThrow('Não é um número')
})