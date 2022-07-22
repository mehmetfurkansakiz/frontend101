//////////////////////////////////////
/*
let isActive = false //0
isActive = true //1
console.log(isActive) //true

let userName
let isUserName = Boolean(userName)
console.log(isUserName)
*/
//////////////////////////////////////

/*
//boolean içerisine 0 bile göndersek true dönecektir ancak boş gönderirsek false diyecektir. Boolean("") = false Boolean(" ")=true Boolean(0)=false //ALT AÇIKLAMA 

//boolean 0'ı eğer değer olarak alır "" içerisinde almazsa -0 bile gönderseniz false döner. ancak 0.1 true döner


userName = "user"
console.log("username:" , Boolean(userName))

console.log(Boolean(0 === 0)) //true
*/
//////////////////////////////////////


/*
İçinde değer barındırmayan tüm ifadeler false 'tur.

const c1 = Boolean(undefined);
const c2 = Boolean(null);
const c3 = Boolean("");
const c4 = Boolean(false);
const c5 = Boolean(NaN);
const c6 = Boolean(0);
const c6 = Boolean(-0);
*/
//////////////////////////////////////
var t = ""  &&  -2  &&  'JavaScript'; console.log(Boolean(t));