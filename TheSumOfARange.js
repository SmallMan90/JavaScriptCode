var range = function(start, end, diff) {
  var temp = [];
  if(diff == null || diff == undefined){
  for(var i = start; i <= end; i++){
    temp.push(i);
  }
  }else if(diff < 0){
    var i = start;
    do{
      temp.push(i);
      i = i + diff;
    }while(i >= end)
  }else {
    var i = start;
    do{
      temp.push(i);
      i = i + diff;
    }while(i<=end)
  }
  
  return temp;
 }

var sum = function(num) {
  var output = 0;
  for( var i = 0; i < num.length; i++ ){
   output = output + num[i];
  }
  return output;
}

console.log(range(1, 10, 2));
// ? 55
console.log(range(5, 2, -1));
// ? [5, 4, 3, 2]