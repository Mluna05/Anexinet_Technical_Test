var dic = { "0": 1, "6" : 1, "9" : 1 , "8" : 2 } ;

var numPrime = 868886232428;

var numCircles = 0;

function calcuateCeros( num ){

  var exam = (""+num).split("");

  for (i = 0; i < exam.length; i++) {

    numCircles += dic[ exam[i] ] || 0 ;

  }

  console.log( numCircles );
}


calcuateCeros( numPrime );
