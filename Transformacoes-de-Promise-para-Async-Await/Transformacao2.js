//Transformação do arquivo "Promise-catch.js" em Async-Await
const coinFlip = new Promise ((resolve, reject)=> Math.random()> 0.5 ? resolve(true): reject(false));

console.log('Begin');

//nesse caso, ele gera um erro de rejeição.
(async function() {
    const result = await coinFlip

new Promise ((resolve)=> setTimeout(()=> resolve(), 2000)).then(()=> console.log('Yay'))
})();


//Nesse caso, ele joga o resultado em result, mesmo com o erro
(async function() {
    const result = await coinFlip.catch(err => err)//cria uma nova promise que joga o valor em result, que será usado na primeira promise.

new Promise ((resolve)=> setTimeout(()=> resolve(), 2000)).then(()=> console.log('Yay'))
})();

//Nesse caso, ele não exibe o erro e o resultado será erro caso seja false.
(async function() {
    const result = await coinFlip.catch(err => 'erro')

new Promise ((resolve)=> setTimeout(()=> resolve(), 2000)).then(()=> console.log('Yay'))
})();

//O valor é uma string que passa o resultado
(async function() {
    const result = await coinFlip
        .then (result=> `o resultado é ${result}`)
        .then (text => `Alguém disse que ${text}`)

new Promise ((resolve)=> setTimeout(()=> resolve(), 2000)).then(()=> console.log('Yay'))
})();

