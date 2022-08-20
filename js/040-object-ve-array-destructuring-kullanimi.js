//object destructuring

let settings = {
    userName: "loremIpsum",
    password: "badPassword",
    isActive: false,
    fakeIp: "ipipip", //ip name'i live server'i bozuyor sanırım :D
    serverName: "mehmetfurkansakiz.org"
}
//obje icerisindeki bilgilerin tek seferde cikarilmasi:
//let userName = settings.userName
//console.log(userName)

//rename && destructuring
let {userName:newUserName, password:newPassword, isActive, fakeIp, serverName} = settings
console.log("rename && destructuring: ",newUserName, newPassword, isActive, fakeIp, serverName)
console.log(settings)
console.log(newUserName)

//obje icerisindeki bazi bilgilerin cikarilmasi:
let {userName:userName2 , password:password2, ...newSettings} = settings
console.log("bazi bilgilerin cikarilmasi: ",userName2,password2,newSettings)

//eger degisken ismi daha once tanimlanmadiysa:
//let {userName , password, ...newSettings} = settings

//objenin destructuring ile cikarilmasi:
//hatali
// let settings2 = settings
// settings2.userName = "degisen bilgi"
// console.log("settings", settings)
// console.log("settings2",settings2)

//dogrusu
let settings2 = {...settings}
settings2.userName = "degisen bilgi"
console.log("settings", settings)
console.log("settings2",settings2)

let score = [100, 200, 300, 400]

let [score1, score2, ...otherscore] = score
console.log(score1, score2, otherscore)

let copyOfScore = [...score]
console.log(copyOfScore)

let [,pronoun,,name]=["Merhaba","benim","adım","Mehmet"];
console.log(pronoun)
console.log(name)

let person={name:"Selin",city:"Ankara",favoriteColor:"aqua blue"}; 
let {name:foo}=person;
console.log(foo)