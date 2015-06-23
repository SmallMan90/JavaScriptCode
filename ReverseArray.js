var reverseArray = function(InputArray){
    var RevArray = [];
  for(var i = 0; i < InputArray.length; i++){
    RevArray.unshift(InputArray[i]); 
  }
  return RevArray;
}



var reverseArrayInPlace = function(InputArray){
  
  if ((InputArray.length)%2 == 0){
    for (var i = 0; i < (InputArray.length/2); i++){
      var temp = InputArray[i];
      InputArray[i] = InputArray[InputArray.length - 1 - i];
      InputArray[InputArray.length - 1 - i] = temp;
    }
    return InputArray;
  }else{
    var midOfArray = Math.floor((InputArray.length/2)); 
    for (var i = 0; i < midOfArray; i++){
      var temp = InputArray[i];
      InputArray[i] = InputArray[InputArray.length - 1 - i];
      InputArray[InputArray.length - 1 - i] = temp;
    }
    return InputArray;
  }
}
  
console.log(reverseArray(["A", "B", "C"]));
// ? ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// ? [5, 4, 3, 2, 1]