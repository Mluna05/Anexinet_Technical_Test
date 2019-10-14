function sumNumbers (num1, num2) {
   if (num2 == 0) {
       return num1;
   } else {
       return sumNumbers(num1 ^ num2, (num1 & num2) << 1)
   }
};

console.log(sumNumbers( 500, 24));
