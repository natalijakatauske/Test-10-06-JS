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
        const sumResult = a + b
        console.log(sumResult)
    }
    this.subtraction = function() {
        const subtractionResult = a - b
        console.log(subtractionResult)
    }
    this.multiplication = function() {
        const multiplicationResult = a * b
        console.log(multiplicationResult)
    }
    this.division = function() {
        const divisionResult = a / b
        console.log(divisionResult)
    }
}

let result = new Calculator(100, 2)

result.sum()
result.subtraction()
result.multiplication()
result.division()