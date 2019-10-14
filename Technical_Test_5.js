var avar arrayPrime = "CDB";

function permutation (arrayPrime, index, size) {
    var x;

    if(index === size) {
        console.log(arrayPrime.toString());

    } else {

        for(x = index; x < size; x++) {
            flipPos(arrayPrime, index, x);
            permutation(arrayPrime, index + 1, size);
            flipPos(arrayPrime, index, x);
        }
    }
}

function flipPos (arrayPrime, frstElm, scndElm) {

    var aux = arrayPrime[frstElm];
    arrayPrime[frstElm] = arrayPrime[scndElm];
    arrayPrime[scndElm] = aux;
}

permutation(arrayPrime.split(""), 0, arrayPrime.length);
