let vitoria = 200
let derrota = 0

let saldo = rank(vitoria, derrota)
let nivelRank = ranked()

console.log(`O Herói tem saldo de ${saldo} vitória(s) e está no nível de ${nivelRank}`)

function rank(victory, defeat){
    return(victory - defeat)
}
    
function ranked(){
    let nivel = " "    
    switch(true){   
        case (saldo < 11):                    
            nivel = "FERRO"                  
            break
        case (saldo < 21):        
            nivel = "BRONZE"                  
            break
        case (saldo < 51):
            nivel = "PRATA"                  
            break
        case (saldo < 81):        
            nivel = "OURO"                  
            break
        case (saldo < 91):        
            nivel = "DIAMANTE"                 
            break
        case (saldo < 101):        
            nivel = "LENDÁRIO"                  
            break
        case (saldo > 100):        
            nivel = "IMORTAL"                  
            break             
    }
    return nivel
}