var arrayOriginal = ["ax","osos","alas","soso", "slaa", "aasl", "xee", "eex","exe", "sala", "exe", "mario", "salasa", "orima", "xa"];

var arrayWODuplicates =[];

var aux = [];

var index = [];

var angrams = [];

function evalWord(){

  arrayWODuplicates = [...new Set(arrayOriginal)];
  aux = [...arrayWODuplicates];

  for (x = 0; x < arrayWODuplicates.length; x++) {
    findAnagrama( arrayWODuplicates[x] , aux );
  }

}

function findAnagrama( strPrime, arrayAux ){

  for (i = 0; i < arrayAux.length; i++) {

    if(strPrime.length === arrayAux[i].length)
    {

      if( JSON.stringify(strPrime) === JSON.stringify(arrayAux[i]) ){
        angrams.push(strPrime);
        index.push(i);
      } else {

        var ordered = {};
        Object.keys(letterInWord(strPrime)).sort().forEach(function(key) {
          ordered[key] = letterInWord(strPrime)[key];
        });

        var ordered2 = {};
        Object.keys(letterInWord(arrayAux[i])).sort().forEach(function(key) {
          ordered2[key] = letterInWord(arrayAux[i])[key];
        });


        if( JSON.stringify(ordered) === JSON.stringify(ordered2)){
          angrams.push(arrayAux[i]);
          index.push(i);
        }

      }

    }

  }

   for (var e = index.length -1; e >= 0; e--){
      aux.splice(index[e],1);
    }
  index= [];
}


function letterInWord(str){
  var obj={};

        for(x = 0; x < str.length; x++) {
          var l = str.charAt(x);

          obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
        }

  return obj;
}


evalWord();
console.log(angrams);
