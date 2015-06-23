var range = function(start, end) {
  var temp = [];
  for(var i = start; i <= end; i++){
   temp.push(i);
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

console.log(sum(range(1, 10)));
// 55 