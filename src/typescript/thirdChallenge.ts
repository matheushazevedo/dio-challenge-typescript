let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0;

limparSaldo()

function somarAoSaldo(soma: number, limparTela?: boolean): void {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        if (limparTela) {
            limparCampoSoma();
        }
    }
}

function limparSaldo(): void {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    };
}

function limparCampoSoma(): void{
    soma.value = '';
}

botaoAtualizar?.addEventListener('click', function () {
    if (campoSaldo) {
        somarAoSaldo(Number(soma.value), true);        
    }
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
