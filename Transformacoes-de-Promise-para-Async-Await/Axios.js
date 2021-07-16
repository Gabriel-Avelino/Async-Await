//Exemplo de chamada de API
const axios = require ('axios')

class MinhaClasse {
    async MeuMetodo (){
        const result = await axios.get('/').then(response => response.data)//pega o resultado do await, joga no then e passa o resultado no result.
        return result
    }
}

