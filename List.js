var arrayToList = function(InputArray){  
  var OutputList = null;
  for (var i = InputArray.length - 1 ; i >= 0; i--)
    OutputList = {value: InputArray[i], rest: OutputList}; 
  return OutputList;
  }

function listToArray(OutputList) {
  var array = [];
  for (var node = OutputList; node.rest != null; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(value, OutputList) {
  return {value: value, rest: OutputList};
}

function nth(OutputList, n) {
  if (!OutputList)
    return undefined;
  else if (n == 0)
    return OutputList.value;
  else
    return nth(OutputList.rest, n - 1);
}


console.log(arrayToList([10, 20]));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// ? [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// ? 20