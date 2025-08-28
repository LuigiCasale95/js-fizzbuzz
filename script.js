/****************************Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. *****************************/
 
//se multiplo di 3
const fizz = "Fizz"
//se multiplo di 5
const buzz = "Buzz"
//se è sia multiplo di 3 che di 5
const fizzBuzz = "FizzBuzz"

/* Inizio ciclo */
for (let i = 1; i<=100; i++) {
    /* se il numero 1 è diviso per 15 da 0 allora la appare FizzBuzz */
    if (i % 15 === 0) {

        console.log(`${fizzBuzz}`)
    }
        /*altrimenti se il numero 1 è diviso per 3 da 0 allora la appare Fizz */
    else if (i % 3 === 0) {

        console.log(`${fizz}`)
    }
        /*altrimenti se il numero 1 è diviso per 5 da 0 allora la appare Buzz */
    else if (i % 5 === 0) {
        
        console.log(`${buzz}`)
    }
        /* altrimenti scrivi semplicemente la i (il numero)*/
    else {
        console.log(i)
    }

}