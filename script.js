ajustaTema = () => {
    let modoEscuro = parseInt(localStorage.getItem("modoEscuro"));
    if (modoEscuro) {
        document.documentElement.classList.remove('modo-escuro');
        document.getElementById('btn-tema').textContent = 'Modo Escuro';
        localStorage.setItem("modoEscuro", 0);
    } else {
        document.documentElement.classList.add('modo-escuro');
        document.getElementById('btn-tema').textContent = 'Modo Claro';
        localStorage.setItem("modoEscuro", 1);
    }
}

ajustaTexto = (regra) => {
    let tamanhoFonte = parseFloat(localStorage.getItem("tamanhoFonte"));
    switch (regra) {
        case "+":
            if (tamanhoFonte <= 2.0) {
                tamanhoFonte += 0.1;
            } else {
                alert("Tamanho máximo atingido!");
            }
            break;
        case "-":
            if (tamanhoFonte > 0.5) {
                tamanhoFonte -= 0.1;
            } else {
                alert("Tamanho mínimo atingido!");
            }
            break;
        case "=":
            tamanhoFonte = 1.0;
            break;
    }
    localStorage.setItem("tamanhoFonte", tamanhoFonte);
    document.body.style.fontSize = tamanhoFonte.toFixed(1) + "em";
}

function iniciar() {
    let tamanhoFonte = parseFloat(localStorage.getItem("tamanhoFonte"));
    let modoEscuro = parseInt(localStorage.getItem("modoEscuro"));
    if (isNaN(tamanhoFonte)) {
        tamanhoFonte = 1.0; 
    }
    if (isNaN(modoEscuro)) {
        modoEscuro = 0; 
    }
    localStorage.setItem("modoEscuro", modoEscuro);
    localStorage.setItem("tamanhoFonte", tamanhoFonte);


    if (modoEscuro === 1) {
        localStorage.setItem("modoEscuro", 0);
    } else {
        localStorage.setItem("modoEscuro", 1);
    }

    ajustaTema();
    ajustaTexto("");

}
document.addEventListener('DOMContentLoaded', function () {
    iniciar();
    document.getElementById('btn-maior').addEventListener('click', () => ajustaTexto("+"));
    document.getElementById('btn-menor').addEventListener('click', () => ajustaTexto("-"));
    document.getElementById('btn-reset').addEventListener('click', () => ajustaTexto("="));
    document.getElementById('btn-tema').addEventListener('click', () => ajustaTema());
});