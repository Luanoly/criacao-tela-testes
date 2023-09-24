function calcularINSS(salarioBruto) {
    let inss;

    if (salarioBruto <= 1320.00) {
        inss = salarioBruto * 0.075;
    } else if (salarioBruto <= 2571.29) {
        inss = salarioBruto * 0.09 - 19.80;
    } else if (salarioBruto <= 3856.94) {
        inss = salarioBruto * 0.12 - 96.94;
    } else if (salarioBruto <= 7507.49) {
        inss = salarioBruto * 0.14 - 174.08;
    } else {
        inss = 876.96;
    }

    return inss.toFixed(2);
}

function calcularIRPF(salarioBruto) {
    let baseCalculo = salarioBruto;
    let irpf;

    if (salarioBruto <= 2112.00) {
        irpf = 0;
    } else if (salarioBruto <= 2826.65) {
        irpf = (baseCalculo * 0.075) - 158.40;
    } else if (salarioBruto <= 3751.05) {
        irpf = (baseCalculo * 0.15) - 370.40;
    } else if (salarioBruto <= 4664.68) {
        irpf = (baseCalculo * 0.225) - 651.73;
    } else {
        irpf = (baseCalculo * 0.275) - 884.96;
    }

    return irpf.toFixed(2);
}

function calcularSalarioLiquido(salarioBruto) {
    const inss = calcularINSS(salarioBruto);
    const irpf = calcularIRPF(salarioBruto - inss);
    const salarioLiquido = salarioBruto - parseFloat(inss) - parseFloat(irpf);

    return salarioLiquido.toFixed(2);
}

module.exports = {calcularINSS, calcularIRPF, calcularSalarioLiquido}


// document.getElementById('calcularINSS').addEventListener('click', function () {
//     const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
//     const inss = calcularINSS(salarioBruto);

//     document.getElementById('resultado').innerHTML = `INSS a ser pago: R$ ${inss}`;
// });

// document.getElementById('calcularIRPF').addEventListener('click', function () {
//     const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
//     const irpf = calcularIRPF(salarioBruto);

//     document.getElementById('resultado').innerHTML = `IRPF a ser pago: R$ ${irpf}`;
// });

// document.getElementById('calcularSalarioLiquido').addEventListener('click', function () {
//     const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
//     const salarioLiquido = calcularSalarioLiquido(salarioBruto);

//     document.getElementById('resultado').innerHTML = `Salário Líquido: R$ ${salarioLiquido}`;
// });

