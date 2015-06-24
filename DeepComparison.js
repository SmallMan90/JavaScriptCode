var deepEqual= function(value1, value2){
  if(value1 === value2) return true;

  if(value1 == null || typeof value1 != "object" ||
     value2 == null || typeof value2 != "object")
    return false;
  
  var props1 = 0, props2 = 0;
  
  for(var prop in value1)
    props1++;
  
  for(var prop in value2){
    props2++;
    if(!(prop in value1) || !deepEqual(value1[prop], value2[prop]))
      return false;
}

  return props1 == props2;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true