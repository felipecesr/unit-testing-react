# Introdução

Aprender testes de unidade não para após dominar as habilidades técnicas. Tem muito mais coisas envolvidas do que só escrever testes. Você sempre deve se esforçar para alcançar o melhor retorno do tempo investido escrevendo testes de unidade, minimizando o esforço e maximizando os benefícios que eles oferecem.

Projetos que alcançam esse equilíbrio crescem sem esforço, não precisam de muita manutenção, e podem se adaptar rapidamente a mudanças.

## A definição de "teste de unidade"

Testes de unidade são uma técnica de teste em que as menores partes testáveis de uma aplicação, chamadas unidades, são individualmente e independentemente verificadas para validar seu comportamento correto.

Uma unidade é um "caso de uso" dentro do sistema e sempre tem um "ponto de entrada" e um "ponto de saída". Um exemplo simples é uma função que calcula algo e retorna um valor. Vale ressaltar que uma unidade pode ser uma função, várias funções, ou até mesmo vários módulos ou componentes.

## Pontos de Entrada e pontos de saída

Um ponto de entrada é algo que podemos acionar de fora (via testes ou código de produção) e resulta em algo: retorna um valor, altera um estado ou faz uma chamada para algo externo.

O código abaixo mostra uma exemplo simples de unidade.

```js
function sum(a, b) {
  return a + b;
}
```

Nesse caso, a função é o ponto de entrada, e como a chamada da função resulta em um valor retornado, ele é o ponto de saída.

## Um teste do zero

Um teste é basicamente um código que dispara um erro quando o resultado da execução é diferente do esperado. O exemplo a seguir mostra o que seria um teste sem o uso de nenhum framework.

```js
const result = sum(6, 4);
const expected = 10;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
```

É possível adicionar mais testes com variações nos inputs usando o mesmo ponto de entrada. Para isso, provalvemente você vai querer ter métodos genéricos para usar em todos os testes.

```js
function expect(result) {
  return {
    toEqual(expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
  };
}

function test(title, callback) {
  try {
    callback();
    console.log(`PASSED: ${title}`);
  } catch (error) {
    console.error(`FAILED: ${title}`);
    console.error(error);
  }
}

test("sum with 6 and 4 is equal 10", () => {
  const result = sum(6, 4);
  expect(result).toEqual(10);
});

test("sum with 2 and 3 is equal 5", () => {
  const result = sum(2, 3);
  expect(result).toEqual(5);
});
```

Observe como os testes são fáceis de ler e escrever com apenas alguns métodos utilitários. Frameworks de teste fornecem mais métodos como esses, facilitando ainda mais a escrita de testes.
