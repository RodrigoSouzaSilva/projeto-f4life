let btnEnviar = document.getElementById('btn-enviar');
let formulario = document.getElementById('formulario');
let formEmail = document.getElementById('email');
let formMensagem = document.getElementById('mensagem');
let confirmacao = document.getElementById('confirmacao');
let btnConfirmacao = document.getElementById('btn-confirmacao');

formulario.addEventListener('submit', e => {
    e.preventDefault();
    let email = formEmail.value;
    let mensagem = formMensagem.value;

    let emaildivido = email.split('@'); // divide pelo @
    let user = emaildivido[0];          // pega o usuario
    let domainCom = emaildivido[1];    // pega o dominio.com




    let domain;
    if(domainCom == undefined) {
        domain = false;
    } else {
        domain = domainCom.slice(0,-4);  // retira o .com
    }


    console.log(`usuario - ${user} | dominio - ${domain} | msg - ${mensagem}`);

    if(mensagem == false) {
        confirmacao.innerHTML = `Erro no envio: Insira uma mensagem`;
        confirmacao.classList.remove('esconde');
        btnConfirmacao.classList.remove('esconde');

        confirmacao.classList.add('atencao');
        confirmacao.classList.remove('certo');
        confirmacao.classList.remove('errado');
    } else if(user.length <= 32 && domain.length <= 16) {
        confirmacao.innerHTML = `Obrigado pelo contato, ${user}!`;
        confirmacao.classList.remove('esconde');
        btnConfirmacao.classList.remove('esconde');

        confirmacao.classList.add('certo');
        confirmacao.classList.remove('atencao');
        confirmacao.classList.remove('errado');
    } else {
        confirmacao.innerHTML = `Erro no envio: Endereço de mail inválido`;
        confirmacao.classList.remove('esconde');
        btnConfirmacao.classList.remove('esconde');

        confirmacao.classList.add('errado');
        confirmacao.classList.remove('certo');
        confirmacao.classList.remove('atencao')
    }
})


//                       rodrigo@hotmail.com

function apagar() {
    confirmacao.classList.add('esconde');
    btnConfirmacao.classList.add('esconde');
}