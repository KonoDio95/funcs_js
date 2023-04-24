function Soma() {
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    let soma = numero1 + numero2;

    document.getElementById('resultado').value = soma;
}

function Sub() {
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    let soma = numero1 - numero2;

    document.getElementById('resultado').value = soma;
}

function Multi() {
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    let soma = numero1 * numero2;

    document.getElementById('resultado').value = soma;
}

function Divd() {
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    let soma = numero1 / numero2;

    document.getElementById('resultado').value = soma;
}