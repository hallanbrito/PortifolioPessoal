function escreverPorExtenso(numero) {
  var unidades = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
  var especiais = ['dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
  var dezenas = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
  var centenas = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

  var numeroPorExtenso = '';

  if (numero === 0) {
    numeroPorExtenso = 'zero';
  } else if (numero < 10) {
    numeroPorExtenso = unidades[numero];
  } else if (numero < 20) {
    numeroPorExtenso = especiais[numero - 10];
  } else if (numero < 100) {
    var unidade = numero % 10;
    var dezena = Math.floor(numero / 10);
    numeroPorExtenso = dezenas[dezena];
    if (unidade > 0) {
      numeroPorExtenso += ' e ' + unidades[unidade];
    }
  } else if (numero < 1000) {
    var centena = Math.floor(numero / 100);
    var resto = numero % 100;
    numeroPorExtenso = centenas[centena];
    if (resto > 0) {
      numeroPorExtenso += ' e ' + escreverPorExtenso(resto);
    }
  } else {
    numeroPorExtenso = 'Número inválido';
  }

  return numeroPorExtenso;
}