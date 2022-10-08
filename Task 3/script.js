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

document.getElementById('btn').addEventListener('click', showUsers)

function showUsers() {
    document.getElementById('message').innerHTML = ''

    fetch(ENDPOINT)
    .then(x => x.json())
    .then(users => {
        for (let i = 0; i < users.length; i++) {
            const card = document.createElement('div')
            card.style.border = '2px solid black'
            card.style.marginBottom = '10px'
            document.getElementById('output').appendChild(card)

            const loginIngo = document.createElement('h3')
            loginIngo.style.backgroundColor = 'gray'
            loginIngo.style.color = 'white'
            loginIngo.innerText = "User's login: " + users[i].login

            const avatarUrlInfo = document.createElement('a')
            avatarUrlInfo.innerText = users[i].avatar_url
            avatarUrlInfo.href = users[i].avatar_url
            avatarUrlInfo.target = '_blank'
            avatarUrlInfo.style.color = 'brown'
            
            card.append(loginIngo, avatarUrlInfo)
        }
    })
}