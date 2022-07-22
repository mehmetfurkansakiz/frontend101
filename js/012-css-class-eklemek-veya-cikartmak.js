let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class") //tek seferde birden fazla eklemek

greeting.classList.remove("title","second-class","third-class", "olmayan-class") //olmayan class hata vermeyecektir! //birden fazla class silmek


greeting.classList.toggle("title", "new-info") //class var ise siler yoksa oluşturur
console.log(greeting.classList)
