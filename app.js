var stringUser = prompt('Insira a palavra que você quer codificar com a Cifra de César:');
while (stringUser === '') { //| typeof parseInt(stringUser) === 'number'){
  alert('Insira apenas letras');
  stringUser = prompt('Insira a palavra que você quer codificar com a Cifra de César:');
}
