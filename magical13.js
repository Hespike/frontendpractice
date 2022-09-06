/*Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference. */

function magical13() {

  let givenNumber = prompt();

  if (givenNumber > 13) {
    return ((givenNumber - 13) * 2);
  } else {
    return 0;
  }
}

magical13();
