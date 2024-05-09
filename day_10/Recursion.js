// 1-

const recursiveSum = (n) => {
  if (n <= 0) return 0;
  return n + recursiveSum(n - 1);
};

console.log(recursiveSum(0));

// 2-
const reverseString = (str, len) => {
  if (len < 0) return "";
  console.log(str[len]);
  return str[len] + reverseString(str, len - 1);
};

const str = "hello";
console.log(reverseString(str, str.length - 1));

// 3-

const recursivePrint = (n) => {
  if (n == 1) {
    console.log(1);
    return null;
  }
  console.log(n);
  recursivePrint(n - 1);
};
recursivePrint(4);

const recursivePrintArr = (arr1, i) => {
  if (i == -1) {
    return null;
  }
  console.log(arr1[i]);
  recursivePrintArr(arr1, i - 1);
};
const arr = [1, 2, 5, "e", "hi", 8];
recursivePrintArr(arr, arr.length - 1);
