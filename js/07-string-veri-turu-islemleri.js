/*
let email = "mehmetfurkansakiz@gmail.com"
let firstName = "furkan"
let lastName = "SAKIZ"

console.log(email.length)

//0.karakter yani ilk karakter ya da herhangi birisi
console.log(firstName[0])
console.log(firstName.charAt(5))

//büyük küçük harf
firstName= firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

//string içinde aradığımız bilgi (search)
console.log(email.search("@")) //17.ymiş
console.log(email[17])
console.log(email.search("qwefqwef")) //olmayan bir şey (-1 döndü)

//slice (belli bir yere kadar almak)
let DOMAIN = email.slice( email.search("@") + 1) //@ işareti dahil olmadan domaini aldık
console.log(DOMAIN)                               //gmail.com

console.log(DOMAIN.slice(0, DOMAIN.indexOf('.'))) //gmail

//bilgiyi degistir (replace)
email = email.replace('gmail.com', 'hotmail.com')
console.log(email)

//içeriyor mu (includes)
console.log(email.includes('ewrgwerg')) //false
console.log(email.includes('@')) //true

//istediğim şey ile başladı mı bitti mi
console.log(email.endsWith('hotmail.com')) //true
console.log(email.startsWith('hotmail.com')) //false çünkü mehmetfurkansakiz@hotmail.com

//ilk harfleri büyük yapmak
firstName = "FURKAN"
lastName = "SAKIZ"

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLocaleLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLocaleLowerCase()}`
//Furkan Sakız

// toLocaleLowerCase türkçeye uygun küçültüyor örnek olarak SAKIZ = sakız ama toLowerCase ise sakiz yapıyor

console.log(fullName)

let language = "Java"
language = language.replace('Java','JavaScript')
console.log(language)

let url = "www.kodluyoruz.org"
url = url.slice(url.indexOf('.')+1)
console.log(url)
*/