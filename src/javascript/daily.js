import { logicalExpression } from '@babel/types';

const functions = {
  makeEmailArr: arr => {
    console.log(arr[0]);
    console.log(arr[1]);

    return arr[0].toLowerCase() + '.' + arr[1].toLowerCase() + '@evolveu.ca';
    return 'first.last@evolveu.ca';
  }
};

export default functions;
