const PRODUCTS = ["laptop", "phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(items => items.length > 5) //6 harf ve fazlasına sahip olan kelimeleri filtreledik

console.log(NEW_PRODUCTS)

// aktif kullanicilar ??
const USERS=[
{fullName: "Ayse Sumer" ,isActive: false},
{fullName: "Ahmet Urgan", isActive: true},
{fullName: "Asya Basar", isActive : true},
{fullName: "Aksel Du rmaz", isActive: false},

]

const ACTIVE_USERS = USERS.filter( active => active.isActive == true )
console.log(ACTIVE_USERS)


const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
  ];

const OLDER_THAN_30 = person.filter( personList => personList.age >= 30) //30 yasindan büyükler geliyor
console.log(OLDER_THAN_30)

const KNOW_JAVASCRIPT = person.filter( personList => personList.languages.includes("JavaScript")) //JavaScript iceren geliyor
console.log(KNOW_JAVASCRIPT)