//Porém, mesmo com a criação das promises, pode ocorrer um PromiseHell ou CallbackHell (problema parecido com o HellFunction), que é o uso inadequado das promises.
//Obs: isso é apenas uma demonstração de escrita, não há arquivos para a execução dos comandos
const fs = require('fs');
const path = require ('path');
const basePath = './assets';
const {promisify} = require('util')  
const readFileAsync = promisify(fs.readFile)

console.log('Begin')
readFileAsync(path.resolve(basePath, 's1.txt'),{ encoding: "utf-8" })
    .then((sentence)=>{
        console.log(sentence,'\n')
        return readFileAsync(path.resolve(basePath, 's2.txt'),{ encoding: "utf-8" })
        .then((sentence)=>{
            console.log(sentence,'\n')
            return readFileAsync(path.resolve(basePath, 's3.txt'),{ encoding: "utf-8" })
            .then((sentence)=>{
                console.log(sentence,'\n')
                return readFileAsync(path.resolve(basePath, 's4.txt'),{ encoding: "utf-8" })
                .then(console.log)
                .finally(()=> console.log('End'))
            })
        })
    })



//Para resolver, basta encadear as funções fora das chaves da função then.
const fs = require('fs');
const path = require ('path');
const basePath = './assets';
const { promisify } = require('util')  
const readFileAsync = promisify(fs.readFile)


console.log('Begin')
readFileAsync(path.resolve(basePath, 's1.txt'),{ encoding: "utf-8" })
    .then((sentence)=>{
        console.log(sentence,'\n')
        return readFileAsync(path.resolve(basePath, 's2.txt'),{ encoding: "utf-8" })
    })
    .then((sentence)=>{
        console.log(sentence,'\n')
        return readFileAsync(path.resolve(basePath, 's3.txt'),{ encoding: "utf-8" })
    })
    .then((sentence)=>{
        console.log(sentence,'\n')
        return readFileAsync(path.resolve(basePath, 's4.txt'),{ encoding: "utf-8" })
    })
    .then(console.log)
    .finally(() => console.log('End'))
    

/*
//Outra resolução é com async/await:
(async function(){
    try{
    const sentence1 = await readFileAsync(path.resolve(basePath, 's1.txt'),{ encoding: "utf-8" })
    console.log(sentence1, '\n')

    const sentence2 = await readFileAsync(path.resolve(basePath, 's2.txt'),{ encoding: "utf-8" })
    console.log(sentence2, '\n')

    const sentence3 = await readFileAsync(path.resolve(basePath, 's3.txt'),{ encoding: "utf-8" })
    console.log(sentence3, '\n')

    const sentence4 = await readFileAsync(path.resolve(basePath, 's4.txt'),{ encoding: "utf-8" })
    console.log(sentence4, '\n')
    }catch(err){
        console.error(err)
    }//o bloco try/catch é usado para substituir o finally, sem esse bloco, um erro em uma das promises não permitirá a execuçaõ do último console.log
    console.log('End')
})()
*/