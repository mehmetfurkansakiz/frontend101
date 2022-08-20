let user1 = {
    firstName : "Furkan",
    lastName : "Sakız",
    score : [1,2,3,4],
    isActive : true,
    shortName: function() {
        return `${this.firstName[0].toUpperCase()}${this.lastName.toUpperCase()}`
    }
}

console.log(user1.shortName())

var birey = {
	isim: 'Ali',
	soyisim: 'Veli',
	dogumYili: 1989,
	merhabaDe: (age) => `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım`,
};
birey.yasHesapla = function () {
	return 2021 - this.dogumYili;
};
console.log(birey.merhabaDe(birey.yasHesapla()));

