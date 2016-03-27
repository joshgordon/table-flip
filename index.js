//console.error
var e = console.error;
console.error = function () {
  e("（╯°□°）╯︵ ┻━┻", ...arguments);
};

//console.warn
var w = console.warn;
console.warn = function () {
  w("ಠ_ಠ", ...arguments);
};
