// funcionar numeros do range

var rangeValue = document.getElementById("rangePass").value;
var rangePrint = document.getElementById("rangeNumber");

rangePrint.innerHTML = rangeValue;

function rangeChange() {
    var rangeValue2 = document.getElementById("rangePass").value;
    var rangePrint2 = document.getElementById("rangeNumber");

    rangePrint2.innerHTML = rangeValue2;
}

function genPassword() {

    // lista de caracteres
    var lowercase = [..."abcdefghijklmnopqrstuvwxyz"];
    var uppercase = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    var numbers = [..."12345567890"];
    var symbols = [..."!@#$*-+"];
    var listaSenha = [];

    // checkbox
    var checkLower = document.getElementById("lowercaseCheck");
    var checkUpper = document.getElementById("uppercaseCheck");
    var checkNumber = document.getElementById("numberCheck");
    var checkSymbols = document.getElementById("symbolsCheck");

    // atualiza a lista conforme as caixas checkadas pelo usuario
    if (checkLower.checked) {
        listaSenha.push(...lowercase);
    } 
    if (checkUpper.checked) {
        listaSenha.push(...uppercase);
    } 
    if (checkNumber.checked) {
        listaSenha.push(...numbers);
    } 
    if (checkSymbols.checked) {
        listaSenha.push(...symbols);
    }

    // verifica se foi selecionado ao menos um checkbox
    if (!checkSymbols.checked && !checkNumber.checked && !checkUpper.checked && !checkLower.checked) {
        alert("Você precisa selecionar ao menos uma checkbox!");
        return;
    }

    // pega o valor do input range

    var range = document.getElementById("rangePass").value;

    // função de gerar a senha randomizando a lista (*)

    function randomPass(arr, n) {
        const copy = [...arr];
        const resultado = [];
        for (let i = 0; i < n; i++) {
            const indice = Math.floor(Math.random() * copy.length);
            resultado.push(copy[indice]);
            copy.splice(indice, 1);
        }
        return resultado;
    }

    const finalPassword = randomPass(listaSenha, range).join('');
    
    // pegar e exibir a senha

    var printPass = document.getElementById("passGen");

    printPass.innerHTML = finalPassword;

    // funcionar barra de strong 

    var ponto1 = 0;
    var ponto2 = 0;
    var ponto3 = 0;
    var ponto4 = 0;

    if (checkLower.checked) {
        var ponto1 = 1;
    }
    if (checkUpper.checked) {
        var ponto2 = 1;
    } 
    if (checkNumber.checked) {
        var ponto3 = 1;
    } 
    if (checkSymbols.checked) {
        var ponto4 = 1;
    }

    var strong = ponto1 + ponto2 + ponto3 + ponto4;

    if (strong == 1) {
        $(".passStrongOut").css("width","25%").css("background-color","#ff0000").css("filter","drop-shadow(0px 0px 3px #ff0000)");
    } else if (strong == 2) {
        $(".passStrongOut").css("width","50%").css("background-color","#f7ac43").css("filter","drop-shadow(0px 0px 3px #f7ac43)");
    } else if (strong == 3) {
        $(".passStrongOut").css("width","75%").css("background-color","#07750b").css("filter","drop-shadow(0px 0px 3px #07750b)");
    } else if (strong == 4) {
        $(".passStrongOut").css("width","100%").css("background-color","#006eff").css("filter","drop-shadow(0px 0px 3px #006eff)");
    }
}
function copyPass() {
    const element = document.getElementById("passGen");
    const range = document.createRange();

    range.selectNode(element);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    alert("Senha copiada!");
  }