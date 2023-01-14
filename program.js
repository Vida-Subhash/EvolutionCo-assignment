const data2 = [1, 2, 3, 4, 'a', 1, 1, 2, 8];
// Create objct
function createObj(inputData) {
  let result = {};
  inputData.forEach((element) => {
    if (result[element]) {
      result[element] = `${parseInt(result[element].split(' ')[0]) + 1} times`;
    } else {
      result[element] = `1 times`;
    }
  });
  return result;
}
console.log(createObj(data2));

// Input array: [1,2,3,4,’a’,1,1,2]
// Output Object: { 1: ‘3 times’, 2: ‘2 times’, 3: ‘1 times, 4: ‘1 times, a: ‘1 times’ }