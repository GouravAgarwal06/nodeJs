function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Can not perform division by 0");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFn(10, 2)
  .then((result) => console.log(result, "res"))
  .catch((error) => console.log(error, "err"));


divideFn(10, 0)
  .then((result) => console.log(result, "res"))
  .catch((error) => console.log(error, "err"));
