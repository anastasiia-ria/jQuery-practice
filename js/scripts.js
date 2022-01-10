function firstLast (string) {
  return (string.charAt(0) + string.charAt(string.length - 1)).toUpperCase();
}

function reverse (string) {
  return string.split('').reverse().join('');
}

function reverseFL (string) {
  return string + reverse(firstLast(string));
}

function count (string) {
  return string.charAt(parseInt(string.length / 2)) + reverseFL(string);
}

$(document).ready(function() {

  let sentence = prompt("Enter your sentence: ");

  $("#left").click(function() {
    alert(sentence);
  });

  $("#right").click(function() {
    alert(count(sentence));
  });

})