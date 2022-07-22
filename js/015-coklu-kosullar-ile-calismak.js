let userName = prompt("kullanici adiniz nedir")
let age = prompt("yasiniz")
let info = document.querySelector("#info")

if(userName && age >= 18) {
    info.innerHTML = "ehliyet alabilirsiniz"
} else if (!userName) {
    info.innerHTML = "Kullanıcı adınız yok"
} else if (!(age >=18)) {
    info.innerHTML = "Yaş bilginiz yok veya 18 yaşından küçüksünüz"
}

let letter;
letter = s.charAt(0)
