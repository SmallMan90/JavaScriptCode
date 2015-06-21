var width = 10;
  var height = 6;

for(var i = 0; i < height; i++){ 
  
  if(i%2 != 0){
    var output = "";
    for(var j = 0; j < (width/2); j++){
     output = output + "# ";
    }
    console.log(output);
    }
  else { 
    var output = "";
    for(var j = 0; j < (width/2); j++){
      output = output + " #";
     }
    console.log(output);
  }
}