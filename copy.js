/*
Write a JavaScript program to create a new string of specified copies (positive number) of a given string. 
*/

function copy(str, num) {

let finalstr = str;

  for (let i = 1; i < num; i++) {
    finalstr += str;
  }
  return finalstr;
}
/* Alternatív megoldás
function copy (str, num) 
{
  if (num < 0)
    return false;
  else
  return str.repeat(num);
}
*/

console.log(copy("example", 3));
