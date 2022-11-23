/* Scrivi un programma che stampi in console i numeri da 1 a 100:


ma che per i multipli di 3 stampi “Fizz” al posto del numero e


per i multipli di 5 stampi “Buzz”.


Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.







/* stampo i numeri da uno a 100 */
for(let index = 1; index <= 100; index++ ){
    if (index % 3 === 0){
        console.log('Fizz');
    } else if (index % 5 === 0) {
        console.log('Buzz');
       
    } else  {
        console.log(index);
    }

    if (index % 3 === 0 && index % 5 === 0 ){
        console.log('FizzBuzz');
        
    }
     
        
    
    
}
    

    

/* se index % 3 da resto 0 allora stampa fizz
se index % 5 da resto 0 allora stampa buzz
se index % 3 && % 5 da resto 0 allora stampa fizzbuzz */


/* per verificare che un numero sia divisibile per un altro prendo il primo numero % secondo numero === 0
    ex 7 % 2 ==>1 allora 7 non è divisibile per 2.
    quindi a % b === 0; */