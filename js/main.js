let formulario = document.getElementById('formulario');
let btnEnviar = document.getElementById('btn-enviar');
let emailForm = document.getElementById('email');
let mensagemForm = document.getElementById('mensagem');

let informacao = document.getElementById('informacao');
let btnInformacao = document.getElementById('btn-informacao');

formulario.addEventListener('submit', e => {
    e.preventDefault(); // cancelando o envio do formulário

    let email = emailForm.value;
    let mensagem = mensagemForm.value;

    let emailVerificado = verificaEmail(email);
    let mensagemVerificado = verificaMensagem(mensagem);
    verificador(emailVerificado, mensagemVerificado);
})

function verificaEmail(email) {   // verifica se email está completo
    let ultimoCampo = email.length; // pega o ultimo valor do email
    if(email.indexOf('.com', ultimoCampo - 4) !== -1) {  // email certo, verifica se os 4 ultimos campos são .com
        let user;
        let domain;
        separaEmail(email);
        return true;
    } else {
        return false;
    }
}

function verificaMensagem(mensagem) { // verificador de mensagem
    if(mensagem === '') {
        return false;
    } else {
        return true;
    }
}

function separaEmail(email) { // separa o email em user e domain
    let emailSeparado = email.split('@');
    user = emailSeparado[0];
    domain = emailSeparado[1].slice(0, -4);
}

function validaEmail(user, domain) { // validador de email
    if(user.length <= 32 && domain.length <= 16 ) {
        return true;
    } else {
        return false;
    }
}

function verificador(email, mensagem) {  // verifica se está tudo certo e mostra msg
    if(email === true && mensagem === true) {
        mostraCampo(`Obrigado pelo contato, ${user}`, 'certo');
    }  else if (mensagem !== true) {
        mostraCampo('Insira uma mensagem','atencao');
    } else {
        mostraCampo('Endereço de email inválido', 'errado');
    }
}

function mostraCampo(mensagem, classe) { // abre o campo info
    mostraMensagem(mensagem, classe);
    mostraBtn();
}

function mostraMensagem(mensagem, classe) {  // mostra msg no campo info
    informacao.innerHTML = `${mensagem}`;
    informacao.classList.add(`${classe}`);
    informacao.classList.remove('esconde');
    excluiClasse(classe);   // exclui as classes adicionadas
}

function mostraBtn() { // mostra o btn de fechar
    btnInformacao.classList.remove('esconde');
}

function esconde() { // esconde o btn de fechar e campo informação
    informacao.classList.add('esconde');
    btnInformacao.classList.add('esconde');
}

function excluiClasse(classe) { // função que exclui as classes
    let classes = ['certo', 'atencao', 'errado'];
    for(let i = 0; i < classes.length; i++) {
        if(classes[i] === classe) {
            continue;
        } else {
            informacao.classList.remove(`${classes[i]}`);
        }
    }
}

