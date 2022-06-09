(function() {

    window.addEventListener("load", init);
    function init() {
        let progressler = document.getElementsByClassName("progressler"); // Tüm progress barları temsil eder.
        let progressMetinleri = document.getElementsByClassName("progressMetinleri"); // Tüm progresslerin value metinlerini (b) temsil eder. Her birinin sırası aynı.
        const animasyonHizi = 750; // Tüm animasyonların son bulacağı süre /(ms cinsinden)
        const artis = 1; // % cinsinden

        for(let i = 0; i < progressler.length; i++){
            let sonDeger = progressler[i].value;
            progressler[i].value = 0; // Başlangıç değerini sıfıra atadım.
            const timerHizi = (animasyonHizi / (sonDeger / artis)); // Bu progress için timerın çalışma sıklık hızını temsil eder. (ms cinsinden)
            let timer = setInterval(function(){
                let yeniDeger = progressler[i].value < sonDeger - artis ? progressler[i].value + artis : sonDeger;
         
                progressler[i].value = yeniDeger;
                progressMetinleri[i].innerHTML = "%" + yeniDeger ; // Yeni değeri ekrana gösteriyorum
                if (yeniDeger == sonDeger) // Eğer gerekli son değere gelindiyse:
                {
                    clearInterval(timer); // Bu zamanlayıcıyı durduruyorum.
                    timer = null;
                }
                console.log('sa');
            }, timerHizi);
        }
    }
  })();