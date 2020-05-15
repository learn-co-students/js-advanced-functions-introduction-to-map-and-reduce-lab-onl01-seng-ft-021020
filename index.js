// Your code here

function mapToNegativize(array) {
  let output = [];
  for (const element of array) {
    output.push(element * -1);
  }
  return output;
}
function mapToNoChange(array) {
  let output = [...array];
  return output;
}
function mapToDouble(array) {
  let output = [];
  for (const element of array) {
    output.push(element * 2);
  }
  return output;
}
function mapToSquare(array) {
  let output = [];
  for (const element of array) {
    output.push(element ** 2);
  }
  return output;
}
function reduceToTotal(array, startpoint = 0) {
  let output = startpoint;
  for (const num of array) {
    output += num;
  }
  return output;
}
function reduceToAnyTrue(array) {
  for (const element of array) {
    if (!!element) return !!element;
  }
  return false;
}

function reduceToAllTrue(array) {
  for (const element of array) {
    if (!element) return !!element;
  }
  return true;
}
