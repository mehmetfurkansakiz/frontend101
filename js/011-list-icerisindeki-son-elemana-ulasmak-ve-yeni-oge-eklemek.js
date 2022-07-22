let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son öge degistirildi..."

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk öge degistirildi..."

let ulDOM = document.querySelector("ul#list")
//listeyi çağırdık

let liDOM = document.createElement('li')
//li'ye element oluşturduk

liDOM.innerHTML = "kendi olusturdugumuz öge" //text

//ulDOM.append(liDOM) en sona 4.satır olarak eklendi

ulDOM.prepend(liDOM) // en başa 1.satır olarak eklendi 

