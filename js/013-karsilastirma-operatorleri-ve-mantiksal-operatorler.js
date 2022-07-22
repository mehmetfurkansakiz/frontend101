let price = "100"
let user = "guest"

// eşitse ==
console.log("==",price == 1) //false
console.log("==",price == 100) //true

// hem degeri hem türü esitse ===

console.log("===",price === 100) //false
console.log("===",price === 1) //false

// esit degilse != 
console.log("!=",price != 1) //true
console.log("!=",user != "guest") //false

// kücükse büyükse ve eşitse < > <= >=
console.log("<",price < 100) //false
console.log(">",price > 10) //true
console.log("<=",price <= 99) //false
console.log(">=",price >= 100) //true

// ve &
price = 0
console.log("&&",price > 0 && user != "furkan") //(false) price şartı sağlamıyor ama user şartı sağlıyor!

// || veya
console.log("||",price > 0 || user != "furkan") //(true) price şartı sağlamıyor ama user şartı sağlıyor!

// degil ! (tersi)
user = "guest"
price = 1
console.log("!",!(price > 0 && user == "guest")) //(false) aslında true ancak parantez dışında ! (değil) var ve false yapıyor 
console.log(!!2)

var user1="guest"; var price1=1;
