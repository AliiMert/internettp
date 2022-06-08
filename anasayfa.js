(function() {

    window.addEventListener("load", init);
    function init() {
        window.alert("Şu anda yanlış sayfadasınız. Lütfen aşığıdaki yönlendirmeleri uygulayın.");
      let Button = document.getElementById("btn");
      Button.addEventListener("click", sayfaDegis);
    }


    function sayfaDegis() {
       location.href = "anasayfa.html";                        
    }
   
    

  })();
  