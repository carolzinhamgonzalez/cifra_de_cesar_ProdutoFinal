var stringUser = prompt('Insira a palavra que você quer codificar com a Cifra de César:');
while (stringUser === '') { //| typeof parseInt(stringUser) === 'number'){
  alert('Insira apenas letras');
  stringUser = prompt('Insira a palavra que você quer codificar com a Cifra de César:');
}
function cipher (stringUser) {
  var numberAscii = [];
  var codeNumberAscii = [];
  var stringCode = [];
  for (i = 0; i < stringUser.length; i++){
    numberAscii.push(stringUser.charCodeAt(i));
  }
  for (j = 0; j < numberAscii.length; j++){
    if (96 < numberAscii[j] < 123){
      codeNumberAscii.push((numberAscii[j] - 97 + 7) % 26 + 97);
    } else if (64 < numberAscii[j] < 91){
      codeNumberAscii.push((numberAscii[j] - 65 + 7) % 26 + 65);
    }
  }
  for (h = 0; h < codeNumberAscii.length; h++){
    stringCode.push(String.fromCharCode(codeNumberAscii[h]));
  }
  return stringCode.join('');
}
var resultCipher = cipher(stringUser);
function decipher (resultCipher) {
  var numberAscii = [];
  var codeNumberAscii = [];
  var stringCode = [];
  for (i = 0; i < resultCipher.length; i++){
    numberAscii.push(resultCipher.charCodeAt(i));
  }
  for (j = 0; j < numberAscii.length; j++){
    if (96 < numberAscii[j] < 123){
      codeNumberAscii.push((numberAscii[j] - 97 - 7) % 26 + 97);
    }
    else if (numberAscii[j] > 64 && numberAscii[j] < 91){
      codeNumberAscii.push((numberAscii[j] - 65 - 7) % 26 + 65);
    }
 }
  for (h = 0; h < codeNumberAscii.length; h++){
    stringCode.push(String.fromCharCode(codeNumberAscii[h]));
  }
  return stringCode.join('');
}
document.write('Sua palavra codificada é ' + cipher(stringUser));
document.write(' e sua palavra descodificada é ' + decipher(resultCipher) + '!');
