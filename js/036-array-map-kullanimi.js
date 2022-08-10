const USERS = ["AYSE" , "MehMet", "FurKAN", "TuĞkAn", "burak"]


const NEW_USER = USERS.map( user => user.toLowerCase())
console.log(NEW_USER) 

//userName içerisinde orijinal isim kalsın
// shortName içerisinde ilk harf büyük . (A.) (kısaltma)
// newName icerisinde ilk harf büyük gerisi küçük

// const USERS_OBJ = USERS.map( item => 
//     {
//         return {
//             userName: item, shortName: `${item[0].toUpperCase()}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//         }
        
//     } 
// )
// console.log(USERS_OBJ)

const USERS_OBJ = USERS.map( item => 
    ( //return yerine parantezleri de kullanabilirsiniz. tek obje gönderiyormuş gibi kullanmak için return ya da parantez içine almayı deneyin
        {
            userName: item, shortName: `${item[0].toUpperCase()}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
        }
    )
)
console.log(USERS_OBJ)