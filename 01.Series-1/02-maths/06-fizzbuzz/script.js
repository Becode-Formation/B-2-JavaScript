
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    // your code here

    //POUR i = 0, i est plus petit ou égale à 100, i ++ 
        // SI i divisé par 3  est égale à un nombre entier 
            // MONTRE "Fizz"
        // SINON SI i divisié par 5 est égale à un nombre entier
            // MONTRE "buzz"
        // SINON SI i divisé par 5 ET i divisé par 3 est un nombre entier 
            // Montre "Fiizbuzz"
        //SINON 
            // Montre le nombre
    for(i = 1; i <= 100; i ++) {

        if(Number.isInteger(i / 3) && Number.isInteger(i / 5) ){
            console.log("FizzBuzz");
        } else if (Number.isInteger(i / 3)) {
            console.log("Fizz");
        } else if (Number.isInteger(i / 5)) {
            console.log("Buzz");
        } else {
            console.log(i);
        }

    }
})();
