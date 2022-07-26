let user = {userName: "mehmet furkan sakiz" , isActive: true}

console.log(user)

localStorage.setItem('userInfo',JSON.stringify(user))

let userInfo = localStorage.getItem('userInfo') //bilgiyi alıyoruz

userInfo = JSON.parse(userInfo)

console.log(userInfo)

//////////////////////////////////

let items = [1,2,3,user]

console.log(items)

localStorage.setItem('newItem',JSON.stringify(items))

let itemInfo = localStorage.getItem('newItem') //bilgiyi alıyoruz

itemInfo = JSON.parse(itemInfo)

console.log(itemInfo)