
/*JS FOR TOGGLE FORM*/
  
  var LoginForm = document.getElementById("LoginForm");
  var SignForm = document.getElementById("SignForm");
  var Indicator = document.getElementById("Indicator");

  function signup(){
    SignForm.style.transform ="translateX(0px)";
    LoginForm.style.transform ="translateX(0px)";
    Indicator.style.transform ="translateX(100px)";
  }
  function login(){
    SignForm.style.transform ="translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform="translateX(0px)";
  }


/*----product gallery----*/
var productImg=document.getElementById("productImg");
var smallImg=document.getElementByClassName("smallImg");
smallImg[0].onclick=function(){
  productImg.src=smallImg[0].src;
}
smallImg[1].onclick=function(){
  productImg.src=smallImg[1].src;
}
smallImg[2].onclick=function(){
  productImg.src=smallImg[2].src;
}