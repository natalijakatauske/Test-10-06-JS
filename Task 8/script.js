/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function() {
        const sumResult = this.a + this.b
        console.log(sumResult)
    }
    this.subtraction = function() {
        const subtractionResult = this.a - this.b
        console.log(subtractionResult)
    }
    this.multiplication = function() {
        const multiplicationResult = this.a * this.b
        console.log(multiplicationResult)
    }
    this.division = function() {
        const divisionResult = this.a / this.b
        console.log(divisionResult)
    }
}

let result = new Calculator(100, 2)

result.sum()
result.subtraction()
result.multiplication()
result.division()