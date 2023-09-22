const { calcularINSS } = require("./script");
var assert = require('assert');

assert(calcularINSS(1600,124.20)=="certo","O valor não está batendo");