//array - dizilerle calismak

//array olusturmak
    let domain = "mehmetfurkansakiz"
    let isActive = false
    let items = [1,2,3,4, isActive, domain]
    console.log(items)
    let emptyArray = [] //bos list

//array icerisindeki eleman/oge sayisini ogrenmek
    console.log(items.length) //6
    //document.querySelector('#info.innerHTML = items.lenght)

//array icindeki ilk elemanin cagrilmasi
    console.log(items [0]) //1

//array icinbdeki ortadaki elemanin cagirilmasi
    console.log(
         items[Math.floor((items.length-1) / 2)] 
    ) // 3

//degisken icindeki bilginin array olup olmadiginin kontrol edilmesi    
    console.log( items[(items.length)-1] ) //mehmetfurkansakiz

//hangileri isArray -> true verir ?
    console.log(Array.isArray(items)) //true
    console.log(Array.isArray( [] ))  //true
    console.log(Array.isArray( 1 ))   //false
    console.log(Array.isArray( true ))//false
