/*# Exercício 1

Crie duas funcões que recebem como parâmetro um objeto.
1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
2. A segunda deve retornar os valores do objeto como texto corrido.

3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto 
como argumento da funcão de callback, e em seguida imprimir o valor retornado.

Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
Repita o processo para a funcão 2*/

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

function caixaAlta(valor){
    return [valor.nome.toUpperCase(), valor.profissao.toUpperCase(), valor.username.toUpperCase(), valor.senha.toUpperCase()]
}
console.log(caixaAlta(objeto));

//2 

function textoCorrido(valor){
    console.log(valor.nome)
    console.log(valor.profissao)
    console.log(valor.username)
    console.log(valor.senha)
}
textoCorrido(objeto)

//3(



function funcao1 (valor, funcao) {
    const resultado = funcao(valor);
    return resultado
}

console.log(funcao1(objeto, caixaAlta))


