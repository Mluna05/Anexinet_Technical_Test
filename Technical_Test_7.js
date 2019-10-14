var arrayPrime = [
                    [1, 0, 3, 2],
                    [4, 3, 6, 5],
                    [7, 8, 1, 3],
                    [7, 1, 3, 2]
                 ];

var arrayFinal= JSON.parse( JSON.stringify(arrayPrime) );

var ceros = [];

function fundCero(){
   for (i = 0; i < arrayPrime.length; i++) {
     for (j = 0; j < arrayPrime.length; j++) {

       if (arrayPrime[i][j] == 0)
         ceros.push( { x:i , y:j } );

     }
   }
 }

function changeCeros(){
    for (j = 0; j < ceros.length; j++) {
       for (i = 0; i < arrayPrime .length; i++) {
          arrayFinal[ceros[j].x][i] = 0;
          arrayFinal[i][ceros[j].y] = 0;
       }
    }
}

 fundCero();
 changeCeros();

 console.log(arrayFinal);
