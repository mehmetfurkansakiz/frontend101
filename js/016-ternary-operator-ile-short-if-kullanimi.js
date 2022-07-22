let userName = prompt("kullanici bilginizi yaziniz")
let info = document.querySelector("#info")

//ternary kullanimi:
//kosul ? dogruysa : yanlissa
info.innerHTML = `${userName.length > 0 ? userName : "Kullanici bilginiz bulunamadi!"}`
