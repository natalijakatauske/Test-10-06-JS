/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

console.log('labas')

fetch(ENDPOINT)
.then(x => x.json())
.then(data => {
    for (let i = 0; i < data.length; i++) {
        const card = document.createElement('div')
        card.style.border = '3px solid black'
        card.style.marginTop = '10px'
        document.getElementById('output').append(card)

        const brandInfo = document.createElement('h2')
        brandInfo.style.backgroundColor = 'blue'
        brandInfo.style.color = 'white'
        brandInfo.style.textAlign = 'center'
        brandInfo.style.height = '35px'
        brandInfo.innerText = data[i].brand
        card.append(brandInfo)

            for (let j = 0; j < data[i].models.length; j++) {
                console.log(data[i].models[j])

                const modelInfo = document.createElement('li')
                modelInfo.style.listStyle = 'square'
                modelInfo.style.paddingLeft = '10px'
                modelInfo.innerText = data[i].models[j]
                card.append(modelInfo)
            }
    }
})