function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let qtdID = '';

    switch (tipoIngresso) {
        case "inferior":
            qtdID = 'qtd-inferior';
            comprarPista(quantidade, qtdID);
            break;

        case "superior":
            qtdID = 'qtd-superior';
            comprarPista(quantidade, qtdID);
            break;
        case "pista":
            qtdID = 'qtd-pista';
            comprarPista(quantidade, qtdID);
            break;

        default:
            break;
    }
}

function comprarPista(quantidade, qtdID) {
    let elementoQtdPista = document.getElementById(qtdID);
    let qtdPista_Inferior_Superior = parseInt(elementoQtdPista.textContent);
    if (quantidade > qtdPista_Inferior_Superior) {
        alert('Não há ingressos suficientes.');
    } else {
        qtdPista_Inferior_Superior -= quantidade;
        elementoQtdPista.textContent = qtdPista_Inferior_Superior;
        alert('Compra realizada com sucesso');
    }
}

