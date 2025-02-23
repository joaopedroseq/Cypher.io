document.addEventListener("DOMContentLoaded", function() {
const all_letter_lower = "abcdefghijklmnopqrstuvwxyz";
const all_letter_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const all_numbers = "0123456789";
const all_symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

const website = document.getElementById("site");
const passwordBox = document.getElementById("password");
const submitButton = document.getElementById("submitButton");
const cypheredPassword = document.getElementById("cypheredPassword");

submitButton.addEventListener("click", encodePassword);


function encodePassword() {
  let passwordUncyphered = passwordBox.value;
  let websiteName = website.value;
  let cypher = getCypher(websiteName);
  let passwordCyphered = codifyPassword(passwordUncyphered, cypher);
  cypheredPassword.value = passwordCyphered;
  cypheredPassword.select();
  document.execCommand('copy');
  alert('Valor copiado para a área de transferência');
  // Define um tempo (por exemplo, 5 segundos = 5000 milissegundos)
  const timeout = 5000;

  // Apaga o valor do campo de entrada após x tempo
  setTimeout(function() {
    cypheredPassword.value = '';
  }, timeout);
}

function getCypher(websiteName) {
  let cypher = 0;
  for (let letter of websiteName) {
    if (all_letter_lower.includes(letter)) {
      cypher += all_letter_lower.indexOf(letter);
    } else if (all_numbers.includes(letter)) {
      cypher += all_numbers.indexOf(letter);
    } else if (all_symbols.includes(letter)) {
      cypher += all_symbols.indexOf(letter);
    }
  }
  return cypher;
}

function codifyPassword(password, cypher) {
  let encodedPassword = "";
  for (let letter of password) {
    if (all_letter_lower.includes(letter)) {
      let index = (all_letter_lower.indexOf(letter) + cypher) % 26;
      encodedPassword += all_letter_lower[index];
    } else if (all_letter_upper.includes(letter)) {
      let index = (all_letter_upper.indexOf(letter) + cypher) % 26;
      encodedPassword += all_letter_upper[index];
    } else if (all_numbers.includes(letter)) {
      let index = (all_numbers.indexOf(letter) + cypher) % 10;
      encodedPassword += all_numbers[index];
    } else if (all_symbols.includes(letter)) {
      let index = (all_symbols.indexOf(letter) + cypher) % 32;
      encodedPassword += all_symbols[index];
    }
  }
  return shuffleString(encodedPassword, cypher);
}

// Função para baralhar uma string com uma semente específica
function shuffleString(str, seed) {
    let array = str.split('');
    const rng = seedrandom(seed);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
  }

  // Função seedrandom
function seedrandom(seed) {
  var key = [];
  for (var i = 0; i < seed.length; i++) {
    key.push(seed.charCodeAt(i));
  }
  return function() {
    var t = 0.5, s = 0.0;
    for (var i = 0; i < key.length; i++) {
      t += key[i];
      s = (s + t) * 16807 % 2147483647;
    }
    return (s % 2147483647) / 2147483647;
  }
}
})
