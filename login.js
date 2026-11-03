const form =
document.getElementById("formLogin");

const usuario =
document.getElementById("usuario");

const senha =
document.getElementById("senha");

form.addEventListener("submit", function(event) {

    event.preventDefault();
    const nomeDigitado = usuario.value;
    const senhaDigitada = senha.value;

    if (nomeDigitado === "aluno" && senhaDigitada === "1234") {
        alert("Login realizado com sucesso!");
        window.location.href = "index.html"
    } else {
        alert("Usuário ou senha incorretos!");
    }

}); 