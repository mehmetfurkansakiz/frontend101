 fetch("data/settings.json").then(response => {
         return response.json()
     }
 ).then(responseJson => {
     console.log(responseJson)
     console.log(responseJson.userName)
 })

 const userListDOM = document.querySelector('#userList')

 //API üzerinden veri cektik
 fetch("https://jsonplaceholder.typicode.com/posts").then
 (
     response => response.json()
 )
 .then(responseJson => 
 {
     responseJson.forEach(item => {
         // console.log(item) //forEach ile hepsini tek tek yazdirdik
         let liDOM = document.createElement('li')
         liDOM.innerHTML = item.title
         userListDOM.append(liDOM)
     });
 })

 fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(responseJson => {
     console.log(responseJson.slice(4,8))
 })