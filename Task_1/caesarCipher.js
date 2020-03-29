function caesarCipher(str, shift) {
  if (shift < 0) return caesarCipher(str, shift + 26);
  let output = '';
  for (let i = 0; i < str.length; i++) {
    let symbol = str[i];
    if (symbol.match(/[a-z]/i)) {
      const code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        symbol = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        symbol = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    output += symbol;
  }
  return output;
}

module.exports = { caesarCipher };
