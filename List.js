var arrayToList = function(InputArray){  
  var OutputList = null;
  for (var i = InputArray.length - 1 ; i >= 0; i--)
    OutputList = {value: InputArray[i], rest: OutputList}; 
  return OutputList;
  }


console.log(arrayToList([10, 20]));
//  {value: 10, rest: {value: 20, rest: null}}