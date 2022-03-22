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

    let user;
    let domain;

    let verificadorEmail;
    let verificadorMensagem;

    const regExp1 = /[a-z]/;
    const regExp2 = /[A-Z]/;
    const regExp3 = /[0-9]/;
    const regExp4 = /[.]/;
    const regExp5 = /\.com+$/
    // regExp1.test(user)

    
    verificaCom(email); // verifica se tem .com
    verificaMensagem(mensagem); // verifica se tem mensagem
    
    verificador(verificadorEmail,verificadorMensagem); // verifica se todos são true
    

    function verificaCom(email) { 
        if(regExp5.test(email)) {
            verificadorEmail = true;
            separaEmail(email); // separa @
            validaUser(user);   // pegar user
            validaDomain(domain); // pega domain
        } else {
            verificadorEmail = false;
        }
    }
    
    function separaEmail(email) { // separa o @ do email
        let separador = email.split('@');
        user = separador[0];
        domain = separador[1].slice(0, -4);
    }

    function validaUser(user) {  // valida usuario
        let separaUser = user.split('');
        if(separaUser.length <= 32) {
            for(let i = 0; i < separaUser.length; i++) {
                if(regExp1.test(separaUser[i]) || regExp2.test(separaUser[i]) || regExp3.test(separaUser[i]) || regExp4.test(separaUser[i])) {
                    continue;
                } else {
                    verificadorEmail = false;
                }
            }
        } else {
            verificadorEmail = false;
        }
        
    }

    function validaDomain(domain) { // valida o dominio
        let separaDomain = domain.split('');
        if(separaDomain.length <= 16) {
            for(let x = 0; x < separaDomain.length; x++) {
                if(regExp1.test(separaDomain[x]) || regExp3.test(separaDomain[x])) {
                    continue;
                } else {
                    verificadorEmail = false;
                }
            }
        } else {
            verificadorEmail = false;
        }
    }

    function verificaMensagem(mensagem) { // verifica se tem mensagem
        if(mensagem !== '') {
            verificadorMensagem = true;
        } else {
            verificadorMensagem = false;
        }
    }

    function verificador(email, mensagem) { // verifica quais inf. são verdadeira
        if(email && mensagem) {
            console.log('Aceito');
            mostraCampo(`Obrigado pelo contato, ${user}!`, 'certo');
            apagaClasse('certo')
        } else if(email !== true) {
            console.log('email invalido');
            mostraCampo(' Endereço de mail inválido', 'errado');
            apagaClasse('errado');
        } else {
            console.log('falta mensagem');
            mostraCampo('Insira uma mensagem', 'atencao');
            apagaClasse('atencao');
        }
    }

    function mostraCampo(mensagem, classe) { // mostra campo informação
        informacao.classList.remove('esconde');
        informacao.innerHTML = mensagem;
        informacao.classList.add(`${classe}`)
        btnInformacao.classList.remove('esconde');
    }

    function apagaClasse(classe) { // exclui as classes que não e usada
        let classes = ['certo', 'atencao', 'errado'];
        for(let c = 0; c < classes.length; c++) {
            if(classe === classes[c]) {
                continue;
            } else {
                informacao.classList.remove(classes[c]);
            }
        }
    }

})

function esconde() { // apaga no campo da informação
    informacao.classList.add('esconde');
    btnInformacao.classList.add('esconde');
}