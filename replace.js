/*
Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
*/

function replace(string) {
  let stringsplit = string.split("");
  for (let i = 0; i < string.length; i++) {
    switch (stringsplit[i]) {
      case ' ':
        break;
      case 'z':
        stringsplit[i] = 'a';
        break;
      case 'Z':
        stringsplit[i] = 'A';
        break;
      default:
        stringsplit[i] = String.fromCharCode(1 + stringsplit[i].charCodeAt(0));
    }
  }
  return stringsplit.join("");
}

console.log(replace("An Example"));
