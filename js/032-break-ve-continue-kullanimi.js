let loremList = ['lorem', 'ipsum', 'dolor', 'amet', 'consectetur', 'adipisicing', 'elit']

let counter = 0

for(; counter<10 ; counter++){
    if(counter === 5) break
    console.log(counter) //5'e kadar yazılacak ve 5 yazılmayacak
}

counter = 0

for(; counter<10 ; counter++){
    if(counter === 5) continue
    console.log(counter) //sadece 5 yazilmayacak 9'a kadar devam edecek
}

const UL_DOM = document.querySelector('#userList')

for (let index = 0; index < loremList.length; index++) {
    if(loremList[index] === 'dolor'){continue}
    const LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = loremList[index]
    UL_DOM.append(LI_DOM)
}