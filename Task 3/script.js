/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

// console.log('labas')

document.getElementById('btn').addEventListener('click', showUsers)

function showUsers() {
    document.getElementById('message').innerHTML = ''

    fetch(ENDPOINT)
    .then(x => x.json())
    .then(users => {
        for (let i = 0; i < users.length; i++) {
            console.log(users[i])

            const card = document.createElement('div')
            card.style.border = '2px solid black'
            document.getElementById('output').appendChild(card)
            const loginIngo = document.createElement('h3')
            loginIngo.style.backgroundColor = 'gray'
            loginIngo.style.color = 'white'
            loginIngo.innerText = users[i].login
            const avatarUrlInfo = document.createElement('h4')
            avatarUrlInfo.innerText = users[i].avatar_url
            card.append(loginIngo, avatarUrlInfo)
        }
    })
}