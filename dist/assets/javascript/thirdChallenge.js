"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma, limparTela) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        if (limparTela) {
            limparCampoSoma();
        }
    }
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
    ;
}
function limparCampoSoma() {
    soma.value = '';
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {
    if (campoSaldo) {
        somarAoSaldo(Number(soma.value), true);
    }
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
