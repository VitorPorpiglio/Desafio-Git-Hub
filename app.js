//não tem nada aqui de especial, apenas para testes.

let numeroBatatas = gerarNumeroAleatorio(10);
let batatas = numeroBatatas;
let quantidade;
let numeroMaximo = 75;
let palavraBatata;
let variavelTeste;

if (batatas > 1){
    palavraBatata = "batatas";
}   else{
    palavraBatata = "batata";
}

ChecarBatatas()

function ChecarBatatas(){
    console.log (numeroBatatas); 

    if (batatas >= 15){
        quantidade = `Você tem várias batatas! São ${batatas} ${palavraBatata}.`
    }   else{
        quantidade = `Você tem poucas batatas, apenas ${batatas} ${palavraBatata}.`
    }    
    console.log (quantidade);
}

function gerarNumeroAleatorio(maximo){
    return Math.floor(Math.random() * maximo + 1);
}