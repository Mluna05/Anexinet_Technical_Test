var examNumber = 0.890625;
//var examNumber = 0.89062588888888;
var residue = examNumber;

var numBinary ="";
var flag = true;

function changeToBinary(){
  let binario = "";

  while(flag){

    residue = residue * 2;
    
    if(residue >= 1){
      residue -= 1;
      numBinary += "1";
    }else{
      numBinary += "0";
    }
    if(residue === 0){
      flag = false;
    }
    if (numBinary.length >32){
      return "Error";
    }
  }

  return numBinary;

}

console.log(changeToBinary());
