let items = [10,20,30,40]
console.log("items - ilk hali: ", items)
//array: sona oge eklemek
    items.push(50)
    console.log("items - +50: ", items)

//array: basa oge eklemek
    items.unshift(10)
    console.log("items - +10: ", items)

//array: sondaki ogeyi cikartmak
    let lastItem = items.pop() //son eleman lastItem içerisine eklendi
    console.log("lastItem: ", lastItem , ", items: ", items)

//array: bastaki ogeyi cikartmak
    let firstItem = items.shift() //ilk eleman firstItem içerisine eklendi
    console.log("firstItem: ", firstItem , ", items: ", items)

//array: ilk ögeyi degistirmek
    items[0] = 1000
    console.log(items)

//array: son ögeyi degistirmek
    items[items.length-1] = 2000
    console.log(items)

    var sports = ['basketball', 'football', 'tennis', 'voleyball', 'timsah' ];
  console.log(sports); // basketball, football, tennis
  sports.splice(1,5);
  console.log(sports); // basketball, tennis


  // splice(); diziye eleman/elemanlar eklenebilmesini ya da silinebilmesini sağlar. 
  // Silinen değeri gei döndürür. ekleneni döndürmez. dizinin yapısını değiştirir.

  var dizi = new Array("ali", "veli", "kırklareli", "emret", "komutanım");

  console.log("orjinal dizi : " + dizi + "<br>");
  var sil = dizi.splice(2, 1); // 2. indisten başla 1 tane sil, silinecek adet sayısı belirtilmezse 2. indisten başlar sona kadar siler.
  
  console.log("silinen değer : " + sil + "<br>");
  console.log("silindikten sonraki dizi : " + dizi + "<br>");
  
  var ekle = dizi.splice(1,0,"ahmet", "mehmet"); // 1. indisten başla (değeri 1. indisin önüne koyar), değer silme (0 koyarak değer silme diyoruz), sonradan yazılanları diziye 1. indisten itibaren ekle
  
  console.log("eklenen değer : " + ekle + "<br>"); // eklenen değeri döndürmez dedik!
  console.log("ekledikten sonraki dizi : " + dizi + "<br>");

  // aynı anda hem silip hem ekleme yapalım
  
  var oncesilsonraekle = dizi.splice(1,2,"murat"); // 1. indisten sonra (1. indis dahil) 2 değer silip güncel değer i ekledi
  console.log("silinen değerler : " + oncesilsonraekle + "<br>");
  console.log("ekledikten sonraki dizi : " + dizi + "<br>");