//Existem casos onde o Async/Await não funciona. Um deles é no caso de promisify. No exemplo abaixo, vemos uma forma funcional:
const fs = require ('fs')

fs.readFile('./assets/invictus.txt', (err,file)=>{
    if(err) throw new Error ('Algo deu errado')
})

const readFile = (path) => new Promise((resolve, reject) =>{
    fs.readFile(path, (err,file)=>{
        if(err) reject(err)
        resolve(file)
    }) //Nesse callback nativo não consigo executar o async/await porque dentro do callback é necessária a promise
})

readFile('./assets/invictus.txt')
    .then(file=> {

    })

//Porém , há o item promisify que irá promisificar a função permitindo o consumo:
const fs = require ('fs');
const { promisify } = require('util')  
const readFileAsync = promisify(fs.readFile)

await readFile