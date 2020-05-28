function hamburger() {
  　　　document.getElementById('line1').classList.toggle('linea');
    　　document.getElementById('target').classList.toggle('slidex');
    　　document.getElementById('nav_f').classList.toggle('fadein');
    }
    document.getElementById('target').addEventListener('click', function () {
    　　hamburger();
    console.log("yy")
    });
    let list = document.getElementsByClassName('list');
    for (let i = 0; i < list.length; i++) {
    　　list[i].addEventListener('click', function () {
    　　　　hamburger();
      });
  }


    check5.addEventListener('click',() => {
      check();
    });
  let text=document.querySelector('input' );
  let text2=document.querySelector('textarea' );
  
  function check(){
  if (text2.value == ""){
    alert('お問い合わせ内容を入力してください');    
  }else{
    alert(text.value + text2.value )
  }
  };

      $(".btnTop").on("click",function(){
        console.log("i")
       
        $("html,body").animate({scrollTop: 0 }, 500, "swing");
    
      });
