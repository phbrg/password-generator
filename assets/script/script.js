// pega os valores
const elementos = {
    saida: document.querySelector(".saida"),
    quantidade: document.querySelector(".quantidade"),
    qtdRange: document.querySelector(".qtdRange"),
    maiuscula: document.querySelector(".maiuscula"),
    minuscula: document.querySelector(".minuscula"),
    numero: document.querySelector(".numero"),
    simbolo: document.querySelector(".simbolo")
}

// atualiza valor do range ao mudar
setInterval(() => {
    var valorRange = elementos.quantidade.value;
    elementos.qtdRange.innerHTML = valorRange;
}, 100)

// criando valores
const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "1234567890";
const simbolos = "!@#$%&*()^~:;.,/{}[]-_=+";
var senha = "";


// função que gera um caracter aleatorio
function geraCaractere(elm) {
    const rand = (max, min) => Math.floor(Math.random() * (max-min) + min);
    return elm[rand(0, elm.length)];
}

// gera a senha
function gerarSenha() {
    if(senha.length > 0) senha = ""; // ve se a variavel senha está vazia

    if(elementos.maiuscula.checked) senha += maiusculas; // adiciona a variavel senha 
    if(elementos.minuscula.checked) senha += minusculas;
    if(elementos.numero.checked) senha += numeros;
    if(elementos.simbolo.checked) senha += simbolos;

    if(!elementos.maiuscula.checked && !elementos.minuscula.checked && !elementos.numero.checked && !elementos.simbolo.checked) { // verifica se não está vazio
        elementos.saida.innerHTML = "<span>Você tem que selecionar ao menos 1 opção!</span>"
        return;
    }

    let novaSenha = "";

    for(let i = 0; i < elementos.quantidade.value; i++) { // gera a senha na quantidade desejada pelo user
        novaSenha += geraCaractere(senha)
    }

    elementos.saida.innerHTML = novaSenha
}