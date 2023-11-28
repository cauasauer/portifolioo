const mensagensDivertidas = 
[
    "Qual é a peça de carro que é feita só no Egito? Os faraóis",

    "Quem é a mãe do mingau? A mãe zena",

    "Qual é o vinho que não tem álcool?Ovinho de codorna",

    "O que o cavalo foi fazer no orelhão? Passar trote",

    "Qual é o lugar mais certo do Brasil? O sertão",

    "O engenheiro olhou para o espelho. O que aconteceu?O engenheiro civil",

]   

let botaoDivertido = document.getElementById("botaoDivertido")
let mensagemDivertida = document.getElementById("mensagemDivertida")

botaoDivertido.addEventListener('click', function(){
    //Math.floor(x) retorna o menor número inteiro dentre o número "x"
    //Math.random() retorna um número pseudo-aleatório no intervalo
    const mensagemAleatoria = mensagensDivertidas[Math.floor(Math.random() * mensagensDivertidas.length) ]

    mensagemDivertida.textContent = mensagemAleatoria;
} )