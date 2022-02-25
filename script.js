const listitems = document.querySelectorAll("a");
const dream = document.querySelector("span");
const paragraphs = document.querySelectorAll(".description p");

listitems.forEach((item,index) => { /* listitemdaki tüm a etiketlerini ve bunların indexlerini foreach ile alıcaz */
/* yukarı doğru 2sn yavaşça 1 kere hareket etsin. index/7'lik geçikme koyuyorum. BU kadar saniyelik bi kısımda animasyonu dalgalı bir animasyon yapmak için geciktiririz.*/

/*BU animasyonlar bittikten sonra sağdan sola doğru getir ve yavaş yavaş gözüksün. */

    item.style.animation = `moveup 2s ease-in-out forwards ${index/7}s`;

    item.addEventListener("animationend",() => { /* Animasyon bittiğinde paragraflara da bir animasyon ekle diyoruz. */
        paragraphs.forEach((item,index)=>{
          item.style.animation =   `moveup 1s ease-in-out forwards ${index/10}s`;
        }) 
        dream.style.animation = "movetoleft 0.5s ease-in-out forwards";
    })

})


