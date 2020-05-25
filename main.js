function hamburger() {
    　　document.getElementById('line1').classList.toggle('linea');
    　　document.getElementById('line2').classList.toggle('lineb');
    　　document.getElementById('line3').classList.toggle('linec');
    　　document.getElementById('target').classList.toggle('slidex');
    　　document.getElementById('nav_f').classList.toggle('fadein');
    }
    
    document.getElementById('target').addEventListener('click', function () {
    　　hamburger();
    });
    
    let list = document.getElementsByClassName('list');
    
    for (let i = 0; i < list.length; i++) {
    　　list[i].addEventListener('click', function () {
    　　　　hamburger();
        });
    }
  $(function() {
      
      var h = $(window).height();
      $(window).on("scroll",function(){
        var s = $(window).scrollTop();
        if(h/2 < s){
          $(".btnTop").addClass("active");
          console.log('up')
        }else{
          $(".btnTop").removeClass("active");
        }
      })
    
      $(".btnTop").on("click",function(){
        console.log("i")
        /*
        htmlとbody要素のscrollTopを500ミリ秒かけて0にする（スクロールを戻す）。
        ＄("html")だけ$("body")だけで良いのでは無いか？と思うかもしれないが、
        IEやfirefoxなど色んなブラウザで同じ効果を得るための慣例
        */
        $("html,body").animate({scrollTop: 0 }, 500, "swing");
    
      });
  });
