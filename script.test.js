const assert = require('assert');
const { calcularINSS, calcularIRPF, calcularSalarioLiquido } = require('./script'); 


// Teste para calcularINSS
assert.strictEqual(calcularINSS(1000), "70.00", "ERRADO, O CORRETO É: 75.00"); // Teste para salarioBruto <= 1320.00
assert.strictEqual(calcularINSS(3000), "263.06", "CERTO"); // Teste para salarioBruto <= 3856.94
assert.strictEqual(calcularINSS(5000), "525.92", "CERTO"); // Teste para salarioBruto <= 7507.49

// Teste para calcularIRPF
assert.strictEqual(calcularIRPF(1000), "0.00", "CERTO"); // Teste para salarioBruto <= 2112.00
assert.strictEqual(calcularIRPF(3000), "79.60", "CERTO"); // Teste para salarioBruto <= 3751.05
assert.strictEqual(calcularIRPF(5000), "400", "ERRADO, O CORRETO É: 490.04"); // Teste para salarioBruto acima de 4664.68

// Teste para calcularSalarioLiquido
assert.strictEqual(calcularSalarioLiquido(1000), "925.00", "CERTO"); 
assert.strictEqual(calcularSalarioLiquido(3000), "2000", "ERRADO, O CORRETO É: 2690.07"); 
assert.strictEqual(calcularSalarioLiquido(5000), "4119.14", "CERTO");


