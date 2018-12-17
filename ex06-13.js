function ChangeImageAndBack(){

  imgback();

  ThreeSecChange2();
  
  }
  
  
  function ThreeSecChange2(){
  setTimeout("imgchange2()" ,3000);
  }
  function imgchange2(){
   document.getElementById('img13').src = './img/isu.jpg';
   }
   
   //function ThreeSecBack(){
   //関数imgchange1を3000ミリ秒間で呼び出す
   // setInterval("imgback()" ,3000);
   //}
   
   function imgback(){
    document.getElementById('img13').src = './img/kouseikunn.png';
   }
   