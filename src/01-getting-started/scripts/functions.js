const functions = {
  size: num => {
    if (num < 10) return 'small';
    if (num < 20) return 'medium';
    return 'large';
  },

  add: (num1, num2) => {
    console.log(num1 + num2);
    return num1 + num2;
  },

  sub: (num1, num2) => {
    return num1 - num2;
  },

  mult: (num1, num2) => {
    return num1 * num2;
  },
  div: (num1, num2) => {
    return num1 / num2;
  }
};

export default functions;
