const PRODUCTS = ["laptop", "phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

// PRODUCTS.forEach((product, index) => console.log(product,index))
// PRODUCTS.forEach((product, index, array) => console.log( array [index] = product += " 123" ))
PRODUCTS.forEach((product, index, array) =>  array [index] = `${product.toUpperCase()}` )

console.log(PRODUCTS)

const userListDOM = document.querySelector('#userList')

PRODUCTS.forEach( item => {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = item
    userListDOM.append(liDOM)
})

/*
 for( let index = 0; index < users.length; index++){
     const liDOM = document.createElement('li')
     liDOM.innerHTML = users[index]
     userListDOM.appendChild(liDOM)
 }
*/

