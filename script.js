//feito por Luan Barbosa e Guilherme Ferreira
function obterNumeros() {
    let obj = { numeros: [1, 3, 7, -1, 0, 4, 9], qt: 7 };
    return obj;
}

function Somar() {
    let objSomar = obterNumeros();

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");

    div1.innerHTML = "1";
    div2.innerHTML = "2";
    div3.innerHTML = "3";
    div4.innerHTML = "4";

    let quantidade = document.createElement("div");
    let somatoria = document.createElement("div");

    let soma = 0;
    
    for (let i = 0; i < objSomar.qt; i++) {
        soma += objSomar.numeros[i];
    }

    quantidade.innerHTML = "Quantidade: " + objSomar.qt;
    somatoria.innerHTML = "Soma: " + soma;

    document.body.appendChild(div1);
    document.body.appendChild(div2);
    document.body.appendChild(div3);
    document.body.appendChild(div4);
    document.body.appendChild(quantidade);
    document.body.appendChild(somatoria);
}