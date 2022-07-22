let firstName = "lorem" //dışarıdan mümkün olduğunca parametre vermeyin

function greetings(firstName ="") { //firstname'i boş tanımladık ama parametre olarak ismi yazarsak otomatik firstname ile eşitlenecektir!
    //console.log(`Merhaba ${firstName} ? firstName : ""`) varsa yaz yoksa boş geç
    console.log(`Merhaba ${firstName}`)
}

greetings() //fonksiyona parametre göndermedik
greetings("furkan") //firstName'e tanımlanacaktır

function greetings2 (firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("ad","soyad")
console.log(greetingsInfo)

function domIdWriteInfo(id,info){
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">Color REDDD</span>`
// domIdWriteInfo('greeting',greetings2("lorem","ipsum"))
domIdWriteInfo('greeting',htmlInfo)
domIdWriteInfo('info',greetings2("lorem","ipsum"))