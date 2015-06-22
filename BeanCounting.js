var countBs = function(string){
      Bcount = 0;
  for(var i = 0; i < string.length; i++){
    if(string.charAt(i) == "B"){
       Bcount++;
    }
  }
  return Bcount;
}


var countChar = function(string, charToCount){
     charCount = 0;
  for(var i = 0; i < string.length; i++){
    if(string.charAt(i) == charToCount){
       charCount++;
     }
}
  return charCount;
}