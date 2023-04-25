const fibonacci = function (count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  let a = 0; //prev fib
  let b = 1; // current fib
  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};

module.exports = fibonacci;
