var stringUser = prompt('Insira a palavra que você quer codificar com a Cifra de César:');
while (stringUser === '') { //| typeof parseInt(stringUser) === 'number'){
  alert('Insira apenas letras');
  stringUser = prompt('Insira a palavra que você quer codificar com a Cifra de César:');
}

//função para codificar a string
//function cipher (stringUser) {
  var numberAscii = [];
  var codeNumberAscii = [];
  var stringCode = [];
//for para descobrir o número Ascci de cada letra da string
  for (i = 0; i < stringUser.length; i++){
    numberAscii.push(stringUser.charCodeAt(i));
  }
console.log(numberAscii);
//for para descobrir o numero Ascii de cada letra codificada
  for (j = 0; j < numberAscii.length; j++){
    codeNumberAscii.push((numberAscii[j] - 65 + 7) % 26 + 65);
  }
//}
console.log(codeNumberAscii);

  for (h = 0; h < codeNumberAscii.length; h++){
    stringCode.push(String.fromCharCode(codeNumberAscii[h]));
  }

console.log(stringCode);
