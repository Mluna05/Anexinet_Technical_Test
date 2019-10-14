var arrayPrime = [
                    [1, 0, 3, 2],
                    [4, 3, 6, 5],
                    [7, 8, 1, 3],
                    [7, 1, 3, 2]
                 ];

var arrayFinal = JSON.parse( JSON.stringify(arrayPrime) );

function transposedArrray( array ){

  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {

      arrayFinal[j][i] =  arrayPrime[i][j];

    }
  }
 console.log(arrayFinal);
}

transposedArrray(arrayPrime);
