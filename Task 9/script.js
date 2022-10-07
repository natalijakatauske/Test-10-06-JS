/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

console.log('labas')

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        const bln = Boolean(this.budget > 100000000)
        console.log(bln)
        // if (this.budget > 100000000) {
        //     console.log('true')
        // } else {
        //     console.log('false')
        // }
    }
}
const movie1 = new Movie('Titanic', 'J. Cameron', 200000000)
movie1.wasExpensive()