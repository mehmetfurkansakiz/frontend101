let laptop1 = {
    brand:"Apple", 
    model: "MacBook Pro",
    "1kg": 2, 
    //model-name: "MacBook Pro",
    model_name: "MacBook Pro",

}
console.log(laptop1) //{brand: 'Apple', model: 'Macbook Pro', 1kg: 2}

//anahtar bilgisi olusturmak
console.log(laptop1.brand) //Apple
console.log(laptop1.model) //Macbook Pro
console.log(laptop1["1kg"])
console.log(laptop1.model, laptop1["brand"]) //Macbook Pro

//anahtar bilgisine yeni deger atamak
laptop1.brand = "Mac"
console.log(laptop1.brand) //Mac
laptop1["brand"] = "Mac1"
console.log(laptop1.brand) //Mac1

//yeni bilgi eklemek
laptop1.version = "10.15.7"
console.log(laptop1)
//anahtar bilgilerine ulasmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1)

console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {
    console.log("keys: ", keyInfo)
})

//deger bilgilerine ulasmak (values) -> Object.values(item)

let values = Object.values(laptop1)
console.log(values)

values.forEach(value => {
    console.log("values: ", value)
})
