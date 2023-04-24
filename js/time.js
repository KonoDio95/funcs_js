// Função que captura o valor da idade, acrescenta 50 e devolve para a página
function newIdade(idadeF) {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    let idadeFutura = parseInt(idade) + idadeF; 

    if (idadeF < 50) {
        return document.getElementById('idade_20').value = idadeFutura;  
    }
    else{
        return document.getElementById('idade_futura').value = idadeFutura;  
    }
}

// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e
// insere no contexto da página
function carregaNovo() {
    let url = 'images/novo.jpeg';
    
    let img = new Image(250,250);
    img.src = url;    
    
    return document.getElementById('novo').appendChild(img);    
}

// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e
// insere no contexto da página
function carregaVinte() {
    let url = 'images/vitem.jpg';

    let img = new Image(250,250);
    img.src = url;    
    
    return document.getElementById('vintem').appendChild(img);    
}

// Função que carrega uma imagem definida pelo usuário, trata a resolução da mesma e
// insere no contexto da página
function carregaIdoso() {
    let url = 'images/idoso.jpg';

    let img = new Image(250,250);
    img.src = url;    

    return document.getElementById('idoso').appendChild(img);
}

