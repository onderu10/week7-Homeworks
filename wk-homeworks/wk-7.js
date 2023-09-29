//1-)
const str = "javascript'te dizeler değişmezdir";
const result = str.split(" ").map(str => str[0].toUpperCase()
 + str.slice(1,)).join(" ");
// split metodu ile önce kelimeleri "" ilk harflerini belirlemek için ayırıyoruz

console.log(result);
//--------------------------------------------
// 2-)başharfini büyük olarak yazdırma

const namelerArr = ["roronoa zoro", "vinsmoke sanji", "tony tony helikopter", "altın roger"];

namelerArr.forEach(name => {
  const words = name.split(" ");//split metodu ile önce kelimeleri "" ayırıyoruz
  const bigWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);// chart metodu ile karakter numarasını belirleyerek büyük  harfe çeviriyoruz
  });
  console.log(bigWords.join(" "));
});

//3-)günün haftasonu olup olmaması------- 


const nowDate = new Date(); // şuanki tarihi newdate ile tanımlıyoruz

// js'de haftanın ilk günü pazar olarak alındığı için (0) ile indisi başlar 
const weeksDay = nowDate.getDay();


if (weeksDay === 0 || weeksDay === 6) {
  console.log("Bugün Hafta Sonu.");
} else {
  console.log("Bugün Hafta Sonu Değil.");

}

//4-) Yılın günün ve aynı belirleme





// Gün ve ay isimlerini tanımlıyorum
const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

//getmonth ve getday metodu ile tanımlıyorum
const dayName = days[nowDate.getDay()];
const monthName = months[nowDate.getMonth()];

// konsola günü ve aynı belirleyecek şekilde $ ile yazdırıyorum.
console.log(`Gün: ${dayName}  Ay: ${monthName}`);

//5-) soruyu anlayamadığım için mantığını kuramadım özür dilerim.
