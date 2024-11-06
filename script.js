const button = document.getElementById("button");
const resposta = document.getElementById("resposta");
const image = document.querySelector("img");
const tempo = document.getElementById("tempo");
const numeroAleatorio = Math.floor(Math.random()* 11);
let timer = 0;

setInterval(() => {
    tempo.innerText = timer;
    timer++;
}, 1000);
tempo.innerText = timer;

const verifica = () => {

    resposta.innerText = "Processando...";
    image.src = "./images/nazaré.gif";



    const numeroDigitado = document.querySelector("input").value;

    setTimeout( () => {
        
   if (Number(numeroDigitado) === numeroAleatorio) {
    resposta.innerText = "Acertou o numero !!";
    resposta.style.color = "green";
    image.src = "./images/acertou.jpg";

    setTimeout(() => {
        alert(`Seu tempo foi de: ${timer} segundos.`);
    }, 1000);
   

    setTimeout(() => {
        window.location.reload();
    }, 5000);

   } else {
    

    if ((numeroDigitado < numeroAleatorio) && (numeroDigitado >= 0)) {

        resposta.innerText = "Digite um numero MAIOR";
        resposta.style.color = "goldenrod";
        image.src = "./images/mais.webp";

    } else if((numeroDigitado > numeroAleatorio) && (numeroDigitado < 11)){
        resposta.innerText = "Digite um numero menor";
        resposta.style.color = "purple";
        image.src = "./images/menos.webp";
    } else{
        resposta.innerText = "Numero de 0 a 10 !!!";
        resposta.style.color = "crimson";
        image.src = "./images/burro.jpg";
    }
   }
    }, 3000);
};



button.addEventListener("click", verifica);
