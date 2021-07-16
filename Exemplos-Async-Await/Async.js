//IIFE: expressão de uma função que será imediatamente invocada.
(function (){

})()

//É o mesmo que:
 
/*
const função = function(){

}

função()
*/

//Async é um sintax sugar, uma forma de deixar a sintaxe mais organizada. Para usar o Async, fazemos:

(async function(){
    console.log("Hello world")//pega o conteúdo da function e coloca em uma promise, utilizando o then e a consumindo da mesma forma. 
})()//retorna uma promise

//Para o compilador, o async retorna uma nova Promise, e seria o mesmo que:


(function(){
    return new Promise((resolve,reject)=> {
        console.log("Hello world")
        resolve() //termina a execução
    }) 
})()

//Quando você não retorna nada no JS, há o retorno do valor implícito undefined