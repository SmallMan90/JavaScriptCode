// Solution for the Recursion exercise from Eloquent Javascipt book chapter 3 Functions.

function isEven(num){
  if(num == 0){
   return true;
  }else if(num == 1){
   return false;
  }else{
    return isEven(num - 2);
  }
  }