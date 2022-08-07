let items = [1, 2, 3, 4, 5]

//array icinde array:
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)
items.push(maleUsers)
console.log(items)

console.log(items[1]) //tüm kadın isimlerini çağırdık
console.log(items[6][1]) //erkek ismi hasanı çağırdık

//array icerisinden oge ayirmak
let newItems = items.splice(2,5)
console.log("new items: ", newItems)
console.log("items: ", items)
//array icerisindeki ogenin index bilgisini bulmak
items.push("lorem")
items.unshift("ipsum")
console.log(items.indexOf("lorem"))
console.log("items: ",items)

//array kopyalamak
let copyItems = items
console.log(items) //items

copyItems.pop() //son ogeyi cikartiyoruz
console.log("copyItems: ", copyItems )
console.log("items :", items)

console.log("kopyalandıktan sonraki hali: ")
copyItems = items.slice()
copyItems.pop() //son ogeyi cikartiyoruz
console.log("copyItems: ", copyItems )
console.log("items :", items)

let reallyCopyItems = [...items] // es6 kopyalama
console.log("reallyCoppied: ", reallyCopyItems)

//iki array bilgisini birlestirmek []...es6, ...es6]
let allUsers = [...maleUsers, ...femaleUsers] //es6 birlestirme
console.log("allUsers: ", allUsers)


//array icerisindeki bilgiyi String'e cevirmek
console.log(allUsers.toString())
console.log(allUsers.join(" --"))

//istedigimiz Index bilgisine oge beklemek
allUsers.splice(allUsers.length-1 , 0, "melisa")
allUsers.splice(Math.floor(allUsers.length/2) , 0, "ortanca")
console.log(allUsers)