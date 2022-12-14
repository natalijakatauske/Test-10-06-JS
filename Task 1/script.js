/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector('form').addEventListener('submit', calculateFunction)

function calculateFunction(event) {
    event.preventDefault()
    const result = document.getElementById('search').value
    const lbConvertor = result * 2.2046
    const gConvertot = result / 0.0010000
    const ozConvertor = result * 35.274

    const card = document.createElement('div')
    card.style.textAlign = 'center'
    document.getElementById('output').appendChild(card)

    const lbOutputInfo = document.createElement('h2')
    lbOutputInfo.style.padding = '10px 0'
    lbOutputInfo.style.backgroundColor = 'white'
    lbOutputInfo.style.margin = '10px 80px'
    lbOutputInfo.innerText = `${lbConvertor} lb`

    const gOutputInfo = document.createElement('h2')
    gOutputInfo.style.padding = '10px 0'
    gOutputInfo.style.backgroundColor = 'white'
    gOutputInfo.style.margin = '10px 80px'
    gOutputInfo.innerText = `${gConvertot} g`

    const ozOutputInfo = document.createElement('h2')
    ozOutputInfo.style.padding = '10px 0'
    ozOutputInfo.style.backgroundColor = 'white'
    ozOutputInfo.style.margin = '10px 80px'
    ozOutputInfo.innerText = `${ozConvertor} oz`

    card.append(lbOutputInfo, gOutputInfo, ozOutputInfo)
}