function calcularMedia() {
    let nome = document.getElementById("nome").value.trim();
    let nota1Texto = document.getElementById("nota1").value;
    let nota2Texto = document.getElementById("nota2").value;
    let mensagemErro = document.getElementById("mensagemErro");
   
   
    mensagemErro.textContent = "";

    if (nome === "" || nota1Texto === "" || nota2Texto === "") {

        mensagemErro.textContent = "Preencha todos os campos!";

        return null;
    }

    let nota1 = Number(nota1Texto);
    let nota2 = Number(nota2Texto);

    if (Number.isNaN(nota1) || Number.isNaN(nota2)) {

        mensagemErro.textContent = "Digite notas numéricas válidas!";

        return null;
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {

        mensagemErro.textContent = "As notas devem estar entre 0 e 10!";

        return null;
    }

    let media = (nota1 + nota2) / 2;

    document.getElementById("resultadoNome").textContent = nome;
    document.getElementById("resultadoMedia").textContent = media.toFixed(2);

    return media;
}


function verificarSituacao() {
    let media = calcularMedia();

    if (media === null) {
        return;
    }

    let situacao = document.getElementById("resultadoSituacao");

    if (media >= 7) {

        situacao.textContent = "APROVADO";
        situacao.style.color = "green";

    } else {

        situacao.textContent = "REPROVADO";
        situacao.style.color = "red";
    }
}

function limparCampos() {

    document.getElementById("nome").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("resultadoNome").textContent = "---";
    document.getElementById("resultadoMedia").textContent = "---";
    document.getElementById("resultadoSituacao").textContent = "---";
    document.getElementById("mensagemErro").textContent = "";
    document.getElementById("resultadoSituacao").style.color = "";

}

if (document.getElementById("btnMedia")) {
    document.getElementById("btnMedia").addEventListener("click", calcularMedia);
    document.getElementById("btnSituacao").addEventListener("click", verificarSituacao);
    document.getElementById("btnLimpar").addEventListener("click", limparCampos);
}

function mostrarDataHora() {

    let agora = new Date();
    let data = agora.toLocaleDateString("pt-BR");
    let hora = agora.toLocaleTimeString("pt-BR");

    document.getElementById("data").textContent = "Data: " + data;
    document.getElementById("hora").textContent = "Hora: " + hora;

}

if (document.getElementById("data")) {
    mostrarDataHora();

}