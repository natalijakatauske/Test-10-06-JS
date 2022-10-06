/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
// console.log('labas')

let clicks = 0

function onClick() {
    clicks += 1
    document.getElementById('btn__state').innerText = clicks
}

document.getElementById('btn__element').addEventListener('click', onClick)