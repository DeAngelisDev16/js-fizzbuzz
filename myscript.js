

const myDiv = document.getElementById('myDiv');
console.log(myDiv);




/* stampo i numeri da uno a 100 */
for(let index = 1; index <= 100; index++ ){   
    if (index % 3 === 0 && index % 5 === 0 ){   //condizione particolare va letta prima!!!
        console.log('FizzBuzz');
        myDiv.append('FizzBuzz');
         

    } else if (index % 3 === 0){
        console.log('Fizz');
        myDiv.append('Fizz');
        

    } else if (index % 5 === 0) {
        console.log('Buzz');
        myDiv.append('Buzz');
        
      
    } else  {
        console.log(index);
        myDiv.append(index);
    }

}
    
   






    
     
        
    
    
    

    

/* se index % 3 da resto 0 allora stampa fizz
se index % 5 da resto 0 allora stampa buzz
se index % 3 && % 5 da resto 0 allora stampa fizzbuzz */


/* per verificare che un numero sia divisibile per un altro prendo il primo numero % secondo numero === 0
    ex 7 % 2 ==>1 allora 7 non è divisibile per 2.
    quindi a % b === 0; */