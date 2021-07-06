// console.log("JS OK");

/* 1. stampare i numeri da 1 a 100; 
   2. calcolare i multipli:
      - di 3 e di 5;
      - di 3;
      - di 5;
      - non calcolarli;
   3. stampare le 4 soluzioni; 
*/  



for (var i = 1; i <= 100; i++) {
    // console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
        
    else {
        console.log(i);
    }
}

   