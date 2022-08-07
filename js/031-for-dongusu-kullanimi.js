// for dongusu kullanimi

//for ([baslangic ataması]; [koşul]; [arttirim ifadesi])  {
//   yapilacak islem
//   }
let users = ["lorem", "ipsum", "dolor"]

// for( let index = 0; index < users.length; index++){
//     console.log(users[index])
// }

const userListDOM = document.querySelector('#userList')
for( let index = 0; index < users.length; index++){
    const liDOM = document.createElement('li')
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM)
}