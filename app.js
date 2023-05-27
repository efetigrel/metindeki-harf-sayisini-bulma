let metin = prompt("Metni giriniz: ");

let harf = prompt("Harfi Giriniz: ");

let sonuc = bul(harf);

alert("harf sayısı: " + sonuc);


function bul(harf) {
    let toplam = 0;
    for (let i = 0; i < metin.length; i++) {
        if (metin.charAt(i).toLowerCase() === harf.toLowerCase()) {
            toplam += 1;
        }
    }
    return toplam;
}