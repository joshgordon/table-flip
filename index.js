//console.error
var e = console.error;
console.error = function () {
  e.apply(undefined, ["（╯°□°）╯︵ ┻━┻"].concat(Array.prototype.slice.call(arguments)));
};

//console.warn
var w = console.warn;
console.warn = function () {
  w.apply(undefined, ["ಠ_ಠ"].concat(Array.prototype.slice.call(arguments)));
};
