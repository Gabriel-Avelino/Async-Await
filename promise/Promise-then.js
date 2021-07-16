const promise = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve('End'), 5000)
})

//Sintaxe encadeada
console.log('Begin')
promise.then((text) => console.log(text))//chamo a promise, e com o resultado dela faço uma ação, dando uma sintaxe melhor para callback(função dentro de outra passada como argumento), passando um callback de sucesso para a promise.

promise.then(console.log)

promise.then(
    (res)=> setTimeout(()=> console.log(res), 5000),
    (rej) => console.error(rej)
)
