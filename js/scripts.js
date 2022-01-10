function firstLast (string) {
  return (string.charAt(0) + string.charAt(string.length - 1)).toUpperCase();
}

function reverse (string) {
  return string.split('').reverse().join('');
}