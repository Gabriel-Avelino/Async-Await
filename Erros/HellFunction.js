//Tanto as promises como o async/await foram criados para resolver o problema de HellFunction (várias funções juntas uma dentro da outra), que não permitia a vizualização de erros.
//Veja um exemplo desse erro.
MinhaFN((resultado)=>{
    OutraFN(resultado, (resultado2) => {
        AindaOutraFN(resultado2, (resultado3)=>{
            MaisUmaFN(resultado3, (resultado4)=>{
                
            })
        })
    })
})